import { primaryTutor } from "./tutors";
import { routes } from "@/lib/routes";
import type { LocalizedText } from "@/i18n/config";

export type NavItem = {
  href: string;
  label: LocalizedText;
};

/**
 * Nawigacja główna — celowo krótka (5 pozycji + przycisk CTA).
 * Link do korepetytora prowadzi bezpośrednio do jedynego aktywnego profilu;
 * gdy korepetytorów będzie więcej, podmień go na stronę z listą.
 */
export const mainNav: readonly NavItem[] = [
  { href: routes.tutor(primaryTutor.slug), label: { pl: "Korepetytor" } },
  { href: routes.pricing, label: { pl: "Cennik" } },
  { href: routes.faq, label: { pl: "FAQ" } },
  { href: routes.about, label: { pl: "O nas" } },
  { href: routes.contact, label: { pl: "Kontakt" } },
];

export const footerNav: readonly NavItem[] = [
  { href: routes.home, label: { pl: "Strona główna" } },
  { href: routes.tutor(primaryTutor.slug), label: { pl: "Korepetytor matematyki" } },
  { href: routes.pricing, label: { pl: "Cennik" } },
  { href: routes.booking, label: { pl: "Umów lekcję" } },
  { href: routes.faq, label: { pl: "Najczęstsze pytania" } },
  { href: routes.about, label: { pl: "O nas" } },
  { href: routes.contact, label: { pl: "Kontakt" } },
];
