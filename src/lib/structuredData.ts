import { FOOTER, ROLES, SITE } from "@/constants/site";
import { skills } from "@/data/skills";

/*
 * schema.org markup for the homepage, built only from data that is already on
 * the site, so it can never drift from what visitors read:
 *  - jobTitle    <- ROLES
 *  - knowsAbout  <- every item in src/data/skills.ts
 *  - sameAs      <- the GitHub link shown in the footer
 *
 * Deliberately left out: email and phone (spam), an employer, education, and a
 * photo URL (no stable public URL).
 */
const personId = `${SITE.url}/#person`;
const websiteId = `${SITE.url}/#website`;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      jobTitle: [...ROLES],
      knowsAbout: skills.flatMap((category) => category.items),
      sameAs: [FOOTER.github.href],
      mainEntityOfPage: SITE.url,
    },
  ],
};
