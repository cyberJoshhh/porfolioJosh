import { SERVICES } from "@/constants/site";
import { Asterisk } from "./Asterisk";

/** Repeat a list until it is long enough to cover a wide screen without gaps. */
function fill(words: readonly string[], min = 8): string[] {
  const out: string[] = [];
  while (out.length < min) out.push(...words);
  return out;
}

/**
 * A single accent caution tape with the services scrolling along it, tilted
 * slightly. Decorative: the same names are listed properly in the Services
 * section, so screen readers skip this.
 */
export function Marquee() {
  const words = fill(SERVICES.items.map((service) => service.title));

  return (
    <div aria-hidden className="relative h-28 overflow-hidden sm:h-32">
      <div className="tape absolute inset-x-[-4%] top-1/2 -translate-y-1/2 -rotate-[1.5deg]">
        <div className="marquee flex w-max">
          {/* Printed twice so the loop has no gap. */}
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {words.map((word, i) => (
                <li
                  key={`${copy}-${i}`}
                  className="flex items-center gap-7 pr-7 text-base font-bold tracking-[0.06em] whitespace-nowrap uppercase sm:text-lg"
                >
                  {word}
                  <Asterisk filled className="size-4" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
