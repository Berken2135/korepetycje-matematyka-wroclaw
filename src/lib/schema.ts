import type { Crumb } from "@/components/layout/Breadcrumbs";
import type { FaqItem } from "@/content/faq";
import type { PricingPlan } from "@/content/pricing";
import { currency } from "@/content/pricing";
import { absoluteUrl, site } from "@/content/site";
import type { Tutor } from "@/content/tutors";
import { getDictionary, t } from "@/i18n";
import { routes } from "@/lib/routes";

/**
 * Budowniczowie danych strukturalnych (schema.org). Zwracają zwykłe obiekty —
 * renderowane przez `<JsonLd data={...} />` na poziomie strony.
 */

const dict = getDictionary();

export function buildBreadcrumbSchema(items: readonly Crumb[]) {
  const allItems: readonly Crumb[] = [{ label: dict.common.home, href: routes.home }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href ?? routes.home),
    })),
  };
}

export function buildFaqSchema(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: t(item.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(item.answer).join(" "),
      },
    })),
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    legalName: site.legalName,
    url: absoluteUrl("/"),
    description: t(site.description),
    email: site.contact.email,
    telephone: site.contact.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: site.location.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: "Polska",
    },
    sameAs: site.socials.map((social) => social.href),
  };
}

export function buildPersonSchema(tutor: Tutor) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl(`${routes.tutor(tutor.slug)}#person`),
    name: tutor.name,
    url: absoluteUrl(routes.tutor(tutor.slug)),
    jobTitle: t(tutor.headline),
    description: t(tutor.summary),
    knowsAbout: t(tutor.expertise),
    worksFor: { "@id": absoluteUrl("/#organization") },
    alumniOf: tutor.education.map((entry) => ({
      "@type": "EducationalOrganization",
      name: t(entry.organisation),
    })),
    image: tutor.photo.src ? absoluteUrl(tutor.photo.src) : undefined,
  };
}

export function buildOfferSchema(plan: PricingPlan) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": absoluteUrl(`${routes.pricing}#${plan.id}`),
    name: t(plan.name),
    description: t(plan.description),
    price: plan.price,
    priceCurrency: currency.code,
    availability: "https://schema.org/InStock",
    url: absoluteUrl(routes.pricing),
    seller: { "@id": absoluteUrl("/#organization") },
  };
}
