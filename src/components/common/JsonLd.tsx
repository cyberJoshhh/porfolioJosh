interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renders schema.org structured data. "<" is escaped so no value can ever close
 * the script tag early (the approach the Next.js docs recommend).
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
