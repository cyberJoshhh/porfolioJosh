import { Globe, Layers, LayoutTemplate, Server, type LucideIcon } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/constants/site";

// In the same order as SERVICES.items.
const ICONS: LucideIcon[] = [Globe, Layers, Server, LayoutTemplate];

export function Services() {
  return (
    <section id="services" className="bg-coal relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden
        className="bg-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,#000_25%,#000_75%,transparent)]"
      />
      <Asterisk className="text-accent/40 pointer-events-none absolute top-10 -right-12 size-36" />
      <div className="max-w-page relative mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow={SERVICES.eyebrow} title={SERVICES.title} align="center" />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.items.map((service, index) => {
            const Icon = ICONS[index] ?? Globe;
            return (
              <li
                key={service.title}
                className="border-line bg-smoke hover:border-accent/60 rounded-lg border p-7 transition-colors"
              >
                <span className="border-line bg-night text-accent grid size-12 place-items-center rounded-md border">
                  <Icon aria-hidden className="size-5" />
                </span>
                <h3 className="heading mt-6 text-lg">{service.title}</h3>
                <p className="text-ash mt-3 text-[0.95rem]">{service.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
