interface AsteriskProps {
  className?: string;
  /** Outlined (the big decorative marks) or filled (the small eyebrow mark). */
  filled?: boolean;
}

// Six arms as one closed outline, so a stroke never shows crossing lines.
const SHAPE =
  "M45 4 L55 4 L55 41.34 L87.34 22.67 L92.34 31.33 L60 50 L92.34 68.67 L87.34 77.33 L55 58.66 L55 96 L45 96 L45 58.66 L12.66 77.33 L7.66 68.67 L40 50 L7.66 31.33 L12.66 22.67 L45 41.34 Z";

/** The site's recurring mark: a six-armed asterisk. Always decorative. */
export function Asterisk({ className = "", filled = false }: AsteriskProps) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={className}>
      <path
        d={SHAPE}
        fill={filled ? "currentColor" : "none"}
        stroke={filled ? "none" : "currentColor"}
        strokeWidth={2.5}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
