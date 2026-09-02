/**
 * Wszystkie adresy w jednym miejscu — slugi są polskie, bo poprawia to
 * trafność w wynikach wyszukiwania i czytelność linków.
 *
 * Gdy dojdzie drugi język, opakuj te wartości w `/${locale}` w jednym miejscu.
 */
export const routes = {
  home: "/",
  tutor: (slug: string) => `/korepetytorzy/${slug}`,
  pricing: "/cennik",
  booking: "/umow-lekcje",
  faq: "/faq",
  about: "/o-nas",
  contact: "/kontakt",
} as const;

/** Kotwice do sekcji strony głównej — używane przez CTA „Zobacz ofertę”. */
export const homeSections = {
  tutor: "korepetytor",
  why: "dlaczego-my",
  how: "jak-to-dziala",
  pricing: "cennik",
  testimonials: "opinie",
  faq: "faq",
} as const;
