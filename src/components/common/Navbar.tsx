"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Asterisk } from "@/components/ui/Asterisk";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACT, NAV_LINKS, SITE } from "@/constants/site";
import { useActiveSection } from "@/hooks/useActiveSection";

// Also track sections with no nav link so the highlight clears instead of
// sticking to the last linked section.
const SECTION_IDS = [
  "top",
  ...NAV_LINKS.map((link) => link.href.replace("#", "")),
  "skills",
  "process",
  "faq",
];

// The nav links sit in the bar from this width up (Tailwind's lg). Below it
// they collapse into the menu.
const DESKTOP_QUERY = "(min-width: 1024px)";

export function Navbar() {
  const activeId = useActiveSection(SECTION_IDS);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Once the page scrolls, the bar gets a solid background and a hairline.
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu (below lg). Escape and growing to desktop width both close it.
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const firstName = SITE.name.split(" ")[0];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
          scrolled || open
            ? "border-line bg-night/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="max-w-page mx-auto flex h-[4.5rem] items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#top"
            onClick={closeMenu}
            className="flex items-center gap-2 text-lg font-semibold tracking-[0.06em] uppercase"
            aria-label={`${SITE.name}, back to top`}
          >
            <Asterisk filled className="text-accent size-6" />
            {firstName}
          </a>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === `#${activeId}`;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`text-sm font-medium tracking-[0.08em] uppercase transition-colors ${
                    isActive ? "text-accent" : "text-ash hover:text-snow"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ButtonLink href="#contact" onClick={closeMenu} className="min-h-11 px-5">
                {CONTACT.ctaLabel}
              </ButtonLink>
            </div>

            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
              className="border-line text-snow hover:border-accent hover:text-accent grid size-11 shrink-0 place-items-center rounded-md border transition-colors lg:hidden"
            >
              {open ? (
                <X aria-hidden className="size-5" strokeWidth={2} />
              ) : (
                <Menu aria-hidden className="size-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-menu"
            aria-label="Main menu"
            className="border-line bg-night absolute inset-x-0 top-full border-b lg:hidden"
          >
            <ul className="max-w-page mx-auto px-5 py-3 sm:px-8">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === `#${activeId}`;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex min-h-14 items-center text-xl font-semibold tracking-[0.04em] uppercase transition-colors ${
                        isActive ? "text-accent" : "text-snow hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="px-5 pb-5 sm:hidden">
              <ButtonLink href="#contact" onClick={closeMenu} className="w-full">
                {CONTACT.ctaLabel}
              </ButtonLink>
            </div>
          </nav>
        ) : null}
      </header>

      {/* Tap anywhere outside the menu to close it. A sibling of the header,
          because the header's backdrop-filter would trap a fixed child. */}
      {open ? (
        <div aria-hidden onClick={closeMenu} className="fixed inset-0 z-40 bg-black/50 lg:hidden" />
      ) : null}
    </>
  );
}
