import type { Metadata } from "next";
import { Footer } from "@/components/common/Footer";
import { JsonLd } from "@/components/common/JsonLd";
import { Navbar } from "@/components/common/Navbar";
import { Marquee } from "@/components/ui/Marquee";
import { SITE } from "@/constants/site";
import { structuredData } from "@/lib/structuredData";
import { About } from "@/sections/About/About";
import { Contact } from "@/sections/Contact/Contact";
import { Faq } from "@/sections/Faq/Faq";
import { Hero } from "@/sections/Hero/Hero";
import { Services } from "@/sections/Services/Services";
import { Skills } from "@/sections/Skills/Skills";
import { Process } from "@/sections/Process/Process";
import { Work } from "@/sections/Work/Work";

// Canonical and indexing directives live on the page, not the root layout (see layout.tsx).
export const metadata: Metadata = {
  alternates: { canonical: SITE.url },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Skills />
        <Work />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
