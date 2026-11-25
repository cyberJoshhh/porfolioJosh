import Image from "next/image";
import { Asterisk } from "@/components/ui/Asterisk";
import { ButtonLink } from "@/components/ui/Button";
import { Glow } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WORK } from "@/constants/site";
import { projects } from "@/data/projects";

export function Work() {
  return (
    <section id="work" className="bg-coal relative overflow-hidden py-24 sm:py-28">
      <div
        aria-hidden
        className="bg-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,#000_25%,#000_75%,transparent)]"
      />
      <Glow className="top-1/3 -right-32 size-[26rem]" />
      <Asterisk className="text-accent/70 pointer-events-none absolute top-24 -left-14 hidden size-40 lg:block" />

      <div className="max-w-page relative mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow={WORK.eyebrow} title={WORK.title} align="center" />
        <p className="text-ash mx-auto mt-5 max-w-[32rem] text-center">{WORK.intro}</p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const links = project.links.filter((link) => link.href !== "#");
            const [liveLink, ...otherLinks] = links;

            return (
              <article
                key={project.id}
                id={`work-${project.id}`}
                className="border-line bg-smoke flex flex-col overflow-hidden rounded-lg border"
              >
                {/* Screenshot, or a titled placeholder until there is one. */}
                <div className="border-line bg-night relative aspect-[16/9] border-b">
                  {project.image ? (
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      sizes="(min-width: 1024px) 34rem, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="absolute inset-0 flex items-end justify-between gap-6 p-7"
                    >
                      <p className="accent text-accent max-w-[14ch] text-3xl leading-[1.05] sm:text-4xl">
                        {project.title}
                      </p>
                      <Asterisk className="text-accent/60 size-16 shrink-0" />
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="heading text-xl sm:text-2xl">{project.title}</h3>
                  <p className="text-ash mt-2">{project.summary}</p>

                  <dl className="border-line mt-6 space-y-4 border-t pt-6 text-[0.95rem]">
                    <div>
                      <dt className="text-accent text-xs font-semibold tracking-[0.08em] uppercase">
                        {WORK.labels.problem}
                      </dt>
                      <dd className="text-ash mt-1">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-accent text-xs font-semibold tracking-[0.08em] uppercase">
                        {WORK.labels.built}
                      </dt>
                      <dd className="text-ash mt-1">{project.built}</dd>
                    </div>
                    {project.myPart ? (
                      <div>
                        <dt className="text-accent text-xs font-semibold tracking-[0.08em] uppercase">
                          {WORK.labels.myPart}
                        </dt>
                        <dd className="text-ash mt-1">{project.myPart}</dd>
                      </div>
                    ) : null}
                  </dl>

                  <ul aria-label="Built with" className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="bg-night rounded-md px-3 py-1.5 text-sm font-medium"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>

                  {liveLink ? (
                    <div className="mt-auto flex flex-wrap gap-3 pt-7">
                      <ButtonLink href={liveLink.href}>{liveLink.label}</ButtonLink>
                      {otherLinks.map((link) => (
                        <ButtonLink key={link.label} href={link.href} variant="ghost">
                          {link.label}
                        </ButtonLink>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
