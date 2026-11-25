import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import { SEO, SITE } from "@/constants/site";
import "./globals.css";

// Outfit carries everything; Instrument Serif italic is only for the accent
// phrase inside headings.
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

/*
 * Site-wide metadata. The canonical URL and the robots directives are
 * deliberately NOT set here: root metadata is inherited by every route,
 * including the 404 page. A canonical here would point it at the homepage, and
 * "index, follow" here would sit beside Next's own "noindex" on the 404 page.
 * Both live in page.tsx instead.
 *
 * The social preview image comes from src/app/opengraph-image.tsx, which Next
 * wires into og:image automatically.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SEO.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SEO.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: "website",
    url: SITE.url,
    title: SEO.title,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${instrument.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
