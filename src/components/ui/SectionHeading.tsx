import type { Title } from "@/types";
import { Asterisk } from "./Asterisk";

interface SectionHeadingProps {
  eyebrow: string;
  title: Title;
  /** Heading level: h1 for the hero, h2 for sections. */
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

/** Renders a title's plain words in uppercase sans and its accent in italic serif. */
export function TitleText({ title }: { title: Title }) {
  return (
    <>
      {title.before}
      {title.before ? " " : null}
      <span className="accent">{title.accent}</span>
      {title.after ? " " : null}
      {title.after}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  as: Tag = "h2",
  align = "left",
  className = "",
  titleClassName = "text-[clamp(1.9rem,4vw,2.9rem)]",
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`.trim()}>
      <p className="eyebrow">
        <Asterisk filled className="size-3" />
        {eyebrow}
      </p>
      <Tag className={`heading mt-4 ${titleClassName}`}>
        <TitleText title={title} />
      </Tag>
    </div>
  );
}
