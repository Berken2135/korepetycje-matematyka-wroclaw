import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { How } from "@/components/sections/How";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { TutorIntro } from "@/components/sections/TutorIntro";
import { Why } from "@/components/sections/Why";
import { JsonLd } from "@/components/seo/JsonLd";
import { featuredFaqItems } from "@/content/faq";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { buildFaqSchema } from "@/lib/schema";

const dict = getDictionary();

export const metadata: Metadata = buildMetadata({
  title: dict.meta.home.title,
  description: dict.meta.home.description,
  path: routes.home,
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TutorIntro />
      <Why />
      <How />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <JsonLd data={buildFaqSchema(featuredFaqItems)} />
    </>
  );
}
