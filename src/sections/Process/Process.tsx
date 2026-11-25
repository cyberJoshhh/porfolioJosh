import { Sparkle } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS } from "@/constants/site";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <Sparkle className="top-24 right-[8%] size-5" delay={0.4} />
      <Sparkle className="bottom-16 left-[30%] size-3" delay={1.8} />
      <div className="max-w-page relative mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow={PROCESS.eyebrow} title={PROCESS.title} />

        {/* A real sequence, so the step numbers carry meaning. */}
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.steps.map((step, index) => (
            <li key={step.title} className="border-line bg-coal rounded-lg border p-7">
              <span aria-hidden className="accent text-accent text-5xl leading-none">
                {index + 1}
              </span>
              <h3 className="heading mt-5 text-lg">{step.title}</h3>
              <p className="text-ash mt-3 text-[0.95rem]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
