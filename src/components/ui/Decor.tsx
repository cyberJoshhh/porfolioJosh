import { Asterisk } from "./Asterisk";

/*
 * Background elements. All are decorative (aria-hidden), ignore the pointer,
 * and sit behind section content: give the content wrapper `relative`.
 */

/** A soft accent glow. Position and size it with className. */
export function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`bg-accent/10 pointer-events-none absolute rounded-full blur-[110px] ${className}`}
    />
  );
}

/** A small filled asterisk that fades in and out. `delay` staggers several. */
export function Sparkle({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <span
      aria-hidden
      style={{ "--d": `${delay}s` } as React.CSSProperties}
      className={`twinkle text-accent pointer-events-none absolute ${className}`}
    >
      <Asterisk filled className="size-full" />
    </span>
  );
}

/** A hand-drawn loop ending in an arrowhead, pointing down and to the right. */
export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 90"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none absolute ${className}`}
    >
      <path d="M6 12c20-8 44-6 52 8 7 12-4 24-14 18-9-6-2-22 14-24 22-3 40 16 48 44" />
      <path d="M96 48l10 10 6-13" />
    </svg>
  );
}
