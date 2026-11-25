import { Asterisk } from "@/components/ui/Asterisk";
import { FOOTER, NAV_LINKS, SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-line bg-night border-t py-12">
      <div className="max-w-page mx-auto flex flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xl font-semibold tracking-[0.06em] uppercase">
            <Asterisk filled className="text-accent size-6" />
            {SITE.name}
          </p>
          <p className="text-ash mt-3 max-w-[36ch]">{SITE.tagline}</p>
        </div>

        <nav aria-label={FOOTER.navHeading}>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium tracking-[0.08em] uppercase">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ash hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={FOOTER.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ash hover:text-accent transition-colors"
              >
                {FOOTER.github.label}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <p className="max-w-page text-ash mx-auto mt-10 px-5 text-sm sm:px-8">
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  );
}
