import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Glow, Sparkle } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT } from "@/constants/site";
import { skills } from "@/data/skills";

// Real numbers only: the tools count comes straight from the skills list.
const toolCount = skills.reduce((total, category) => total + category.items.length, 0);
const STATS = [...ABOUT.stats, { value: String(toolCount), label: ABOUT.toolsStatLabel }];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <Glow className="top-10 -left-40 size-[28rem]" />
      <Sparkle className="top-16 right-[6%] size-4" delay={0.6} />
      <Sparkle className="right-[44%] bottom-20 size-3" delay={2} />
      <div className="max-w-page relative mx-auto grid items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading eyebrow={ABOUT.eyebrow} title={ABOUT.title} />

          <div className="text-ash mt-6 max-w-[38rem] space-y-4">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 grid max-w-[38rem] gap-x-8 gap-y-3 sm:grid-cols-2">
            {ABOUT.checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.95rem] font-medium">
                <Check aria-hidden className="text-accent mt-1 size-4 shrink-0" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>

          <ButtonLink href="#contact" className="mt-9">
            {ABOUT.cta}
          </ButtonLink>
        </div>

        <dl className="grid grid-cols-2 gap-4 lg:col-span-5">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="border-line bg-coal flex flex-col items-center justify-center rounded-lg border px-4 py-9 text-center"
            >
              <dt className="text-ash order-2 mt-2 text-sm">{stat.label}</dt>
              <dd className="order-1 text-4xl font-semibold sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
