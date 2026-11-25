import { ArrowDown, ArrowDownLeft } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";
import { Asterisk } from "@/components/ui/Asterisk";
import { ButtonLink } from "@/components/ui/Button";
import { Glow, Sparkle, Squiggle } from "@/components/ui/Decor";
import { ABOUT, HERO } from "@/constants/site";
import heroPhoto from "@/images/hero.jpg";

const style = (i: number) => ({ "--i": i }) as React.CSSProperties;

/** Text set on a circle, turning slowly around an arrow. */
function Badge() {
  return (
    <div className="relative size-28 sm:size-32">
      <svg viewBox="0 0 120 120" aria-hidden className="spin-slow text-accent absolute inset-0">
        <defs>
          <path id="badge-circle" d="M60 60 m-46 0 a46 46 0 1 1 92 0 a46 46 0 1 1 -92 0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" />
        {/* textLength stretches the words to fill the circle exactly (2 x pi x 46, less a hair). */}
        <text fill="currentColor" fontSize="10" fontWeight="500">
          <textPath href="#badge-circle" textLength="286" lengthAdjust="spacing">
            {HERO.badge.toUpperCase()}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        <span className="bg-accent text-night grid size-11 place-items-center rounded-full">
          <ArrowDownLeft aria-hidden className="size-5" strokeWidth={2.5} />
        </span>
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <Glow className="-top-40 right-[-12%] size-[34rem]" />
      <Glow className="top-[35%] left-[-14%] size-[26rem]" />
      <Sparkle className="right-[28%] bottom-[14%] size-4" />
      <Sparkle className="bottom-[18%] left-[54%] size-3" delay={1.3} />
      <Sparkle className="top-[26%] right-[9%] size-5" delay={2.4} />
      <Asterisk className="text-accent/70 pointer-events-none absolute -right-16 -bottom-16 size-48 sm:size-56 lg:-right-14 lg:bottom-6 lg:size-44" />

      <div className="max-w-page relative mx-auto grid items-center gap-14 px-5 pt-28 pb-20 sm:px-8 sm:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        {/* Joshua's portrait, framed in an arch. */}
        <div
          style={style(0)}
          className="rise relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:mx-0"
        >
          <div className="relative aspect-[5/6]">
            {/* A soft accent glow behind the portrait. */}
            <div
              aria-hidden
              className="bg-accent/15 absolute inset-x-[14%] top-[28%] h-1/2 rounded-full blur-3xl"
            />
            {/* Outer arch line, then an accent arch offset up and right like a printed misregistration. */}
            <div
              aria-hidden
              className="border-accent/25 absolute inset-x-0 top-[14%] bottom-0 rounded-t-full border border-b-0 [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]"
            />
            <div
              aria-hidden
              className="border-accent absolute inset-x-[9%] top-[22%] bottom-0 translate-x-3 -translate-y-3 rounded-t-full border-2 border-b-0 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_95%)]"
            />
            {/* The portrait fades into the page at the bottom instead of ending in a hard edge. */}
            <div className="bg-coal absolute inset-x-[9%] top-[22%] bottom-0 overflow-hidden rounded-t-full [mask-image:linear-gradient(to_bottom,#000_68%,transparent)]">
              <Image
                src={heroPhoto}
                alt={ABOUT.photoAlt}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 22rem, 80vw"
                className="object-cover object-[50%_12%] contrast-[1.06] saturate-[1.05]"
              />
            </div>
            <Squiggle className="text-snow/45 top-6 -left-16 hidden w-24 xl:block" />
            <div className="absolute -top-2 right-0 sm:right-2">
              <Badge />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p style={style(1)} className="rise text-accent text-lg font-medium">
            {HERO.greeting}
          </p>

          <h1 style={style(2)} className="rise heading mt-4 text-[clamp(2.6rem,6vw,4.6rem)]">
            {HERO.title.before}{" "}
            <span className="accent block text-[1.08em] leading-[1.02]">
              {/* Each word stays whole, so "back-end" never breaks at its hyphen. */}
              {HERO.title.accent.split(" ").map((word, i) => (
                <Fragment key={i}>
                  {i > 0 ? " " : null}
                  <span className="whitespace-nowrap">{word}</span>
                </Fragment>
              ))}
            </span>
          </h1>

          <p style={style(3)} className="rise text-ash mt-6 max-w-[34rem] text-lg">
            {HERO.intro}
          </p>

          <div style={style(4)} className="rise mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
            <ButtonLink href="#contact">{HERO.primaryCta}</ButtonLink>
            <a
              href="#work"
              className="group text-accent inline-flex items-center gap-3 text-sm font-semibold tracking-[0.06em] uppercase"
            >
              <span className="border-accent group-hover:bg-accent group-hover:text-night grid size-12 place-items-center rounded-full border transition-colors">
                <ArrowDown aria-hidden className="size-5" />
              </span>
              {HERO.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
