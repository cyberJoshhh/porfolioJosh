"use client";

import { useRef, useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { Button } from "@/components/ui/Button";
import { Glow, Sparkle } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT, CONTACT_SECTION as C } from "@/constants/site";

const LABEL = "block text-sm font-medium";
const FIELD =
  "mt-2 block w-full rounded-md border border-line bg-night px-4 py-3 text-base font-normal text-snow placeholder:text-[#8a8a8a] focus-visible:border-accent";

/*
 * Vercel only hosts the site; it does not send email. Messages are delivered by
 * Web3Forms, a form service: the browser posts the form to it and it forwards
 * the message to Joshua's inbox.
 *
 * The access key is public by design (it ends up in the page). It lives in
 * CONTACT.web3formsKey; NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel overrides it.
 * With no key at all the form still works: it opens the visitor's own email app.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || CONTACT.web3formsKey;
const ENDPOINT = "https://api.web3forms.com/submit";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error" | "mailOpened";

function readFields(form: HTMLFormElement) {
  const data = new FormData(form);
  const field = (key: string) => String(data.get(key) ?? "").trim();
  return {
    name: field("name"),
    business: field("business"),
    reach: field("reach"),
    message: field("message"),
    // A hidden checkbox no person can see or tick. Bots fill in everything.
    caughtBot: field("botcheck") !== "",
  };
}

type Fields = ReturnType<typeof readFields>;

function openMailApp(fields: Fields) {
  const lines = [
    `Name: ${fields.name}`,
    fields.business ? `Business: ${fields.business}` : "",
    `Reach me at: ${fields.reach}`,
    "",
    fields.message,
  ].filter((line, i) => line !== "" || i === 3);

  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(C.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = readFields(form);

    if (!ACCESS_KEY) {
      openMailApp(fields);
      setStatus("mailOpened");
      return;
    }

    // Look successful to a bot, but send nothing.
    if (fields.caughtBot) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: C.subject,
          name: fields.name,
          business: fields.business || "(not given)",
          reach: fields.reach,
          message: fields.message,
          // If they gave an email address, replying from the inbox goes to them.
          ...(EMAIL_PATTERN.test(fields.reach) ? { email: fields.reach } : {}),
        }),
      });
      const result = (await response.json()) as { success?: boolean };

      if (response.ok && result.success) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";
  const statusText =
    status === "success"
      ? C.success
      : status === "mailOpened"
        ? C.mailOpened
        : sending
          ? ""
          : ACCESS_KEY
            ? C.sendHint
            : C.submitHint;

  return (
    <section id="contact" className="bg-coal relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <Glow className="-top-20 -right-32 size-[28rem]" />
      <Sparkle className="top-16 left-[44%] size-4" delay={0.9} />
      <Asterisk className="text-accent/70 pointer-events-none absolute -bottom-12 -left-12 hidden size-44 lg:block" />

      <div className="max-w-page relative mx-auto grid items-start gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={C.eyebrow} title={C.title} />
          <p className="text-ash mt-6 max-w-[34ch] text-lg">{C.intro}</p>

          <ul className="mt-9 grid max-w-sm gap-3">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="border-line bg-smoke hover:border-accent/60 flex items-center gap-3 rounded-lg border p-4 transition-colors"
              >
                <span className="bg-night text-accent grid size-10 shrink-0 place-items-center rounded-md">
                  <Mail aria-hidden className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-[0.08em] uppercase">
                    {C.emailLabel}
                  </span>
                  <span className="text-ash block truncate text-sm">{CONTACT.email}</span>
                </span>
              </a>
            </li>
            {CONTACT.phone ? (
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="border-line bg-smoke hover:border-accent/60 flex items-center gap-3 rounded-lg border p-4 transition-colors"
                >
                  <span className="bg-night text-accent grid size-10 shrink-0 place-items-center rounded-md">
                    <Phone aria-hidden className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold tracking-[0.08em] uppercase">
                      {C.phoneLabel}
                    </span>
                    <span className="text-ash block truncate text-sm">{CONTACT.phone}</span>
                  </span>
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onInput={() => {
            // Typing again after a result clears the old message.
            if (status === "success" || status === "mailOpened") setStatus("idle");
          }}
          aria-labelledby="contact-form-title"
          className="border-line bg-smoke space-y-5 rounded-lg border p-6 sm:p-8 lg:col-span-7"
        >
          <h3 id="contact-form-title" className="heading text-lg">
            {C.formTitle}
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className={LABEL}>
              {C.fields.name}
              <input name="name" type="text" required autoComplete="name" className={FIELD} />
            </label>
            <label className={LABEL}>
              {C.fields.business}{" "}
              <span className="text-ash font-normal">({C.fields.businessHint})</span>
              <input name="business" type="text" autoComplete="organization" className={FIELD} />
            </label>
          </div>

          <label className={LABEL}>
            {C.fields.message}
            <textarea
              name="message"
              required
              rows={5}
              placeholder={C.fields.messagePlaceholder}
              className={FIELD}
            />
          </label>

          <label className={LABEL}>
            {C.fields.reach}
            <input
              name="reach"
              type="text"
              required
              placeholder={C.fields.reachPlaceholder}
              className={FIELD}
            />
          </label>

          {/* Spam trap: hidden from people and screen readers, filled in by bots. */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
            <Button
              type="submit"
              disabled={sending}
              className="disabled:pointer-events-none disabled:opacity-60"
            >
              {sending ? C.sending : ACCESS_KEY ? C.send : C.submit}
            </Button>
            <p
              role="status"
              className={`max-w-[34ch] text-sm ${
                status === "success" ? "text-accent font-semibold" : "text-ash"
              }`}
            >
              {statusText}
            </p>
          </div>

          {status === "error" ? (
            <div role="alert" className="border-accent/60 rounded-md border p-4 text-base">
              <p>{C.error}</p>
              <Button
                type="button"
                variant="ghost"
                className="mt-4"
                onClick={() => formRef.current && openMailApp(readFields(formRef.current))}
              >
                {C.fallbackCta}
              </Button>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
