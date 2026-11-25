import { Plus } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { Glow } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/constants/site";

export function Faq() {
  return (
    <section id="faq" className="border-line relative overflow-hidden border-t py-24 sm:py-28">
      <Glow className="bottom-0 -left-32 size-[24rem]" />
      <Asterisk className="text-accent/30 pointer-events-none absolute bottom-10 left-[30%] hidden size-28 lg:block" />
      <div className="max-w-page relative mx-auto grid gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <SectionHeading eyebrow={FAQ.eyebrow} title={FAQ.title} className="lg:col-span-5" />

        {/* Shared name: opening one question closes the others, with no JavaScript. */}
        <div className="space-y-3 lg:col-span-7">
          {FAQ.items.map((item) => (
            <details
              key={item.question}
              name="faq"
              className="group border-line bg-coal open:border-accent/50 rounded-lg border px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="border-line text-accent group-open:border-accent group-open:bg-accent group-open:text-night grid size-8 shrink-0 place-items-center rounded-full border transition-colors">
                  <Plus
                    aria-hidden
                    strokeWidth={2.5}
                    className="size-4 transition-transform duration-200 group-open:rotate-45"
                  />
                </span>
              </summary>
              <p className="text-ash max-w-[56ch] pb-6">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
