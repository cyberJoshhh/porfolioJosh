import { ButtonLink } from "@/components/ui/Button";
import { Glow, Sparkle } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/constants/site";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <Glow className="-right-40 bottom-0 size-[30rem]" />
      <Sparkle className="top-20 left-[4%] size-4" delay={1.1} />
      <div className="max-w-page relative mx-auto grid items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:order-1 lg:col-span-7">
          {skills.map((category) => (
            <li key={category.id} className="border-line bg-coal rounded-lg border p-6">
              <h3 className="heading text-accent text-base">{category.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li key={item} className="bg-smoke rounded-md px-3 py-1.5 text-sm font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="lg:order-2 lg:col-span-5">
          <SectionHeading eyebrow={SKILLS.eyebrow} title={SKILLS.title} />
          <p className="text-ash mt-6 max-w-[30rem]">{SKILLS.intro}</p>
          <ButtonLink href="#contact" className="mt-9">
            {SKILLS.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
