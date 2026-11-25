import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "accent" | "ghost";

interface StyleProps {
  /** accent: the main action. ghost: a secondary action, outlined. */
  variant?: Variant;
  className?: string;
}

const BASE =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] leading-none transition-colors duration-150";

function styles({ variant = "accent", className = "" }: StyleProps): string {
  const look =
    variant === "accent"
      ? "bg-accent text-night hover:bg-accent-deep"
      : "border border-line text-snow hover:border-accent hover:text-accent";
  return `${BASE} ${look} ${className}`.trim();
}

type LinkProps = StyleProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({ variant, className, ...rest }: LinkProps) {
  // External links open in a new tab; in-page anchors stay put.
  const external = typeof rest.href === "string" && /^https?:\/\//.test(rest.href);
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={styles({ variant, className })}
    />
  );
}

type ButtonProps = StyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant, className, ...rest }: ButtonProps) {
  return <button {...rest} className={styles({ variant, className })} />;
}
