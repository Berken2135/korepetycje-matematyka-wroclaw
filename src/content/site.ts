import type { LocalizedText } from "@/i18n/config";

/**
 * =============================================================================
 * DANE FIRMY — jedyne miejsce do edycji marki i kontaktu.
 * =============================================================================
 *
 * ⚠️ PLACEHOLDERY DO ZASTĄPIENIA PRZED PUBLIKACJĄ:
 *    - `name` / `legalName` — nazwa marki (obecnie „Studeo”, propozycja)
 *    - `email`, `phone`, `phoneHref` — dane kontaktowe
 *    - `url` (lub zmienna NEXT_PUBLIC_SITE_URL) — docelowa domena
 *    - `socials` — pusta tablica; dopisz profile, gdy będą istnieć
 *    - `policies` — zasady odwoływania i płatności ustal po swojemu
 */

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

const siteUrlFromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const site = {
  /** Nazwa marki. Neutralna względem przedmiotu, żeby przetrwała rozwój oferty. */
  name: "Studeo",
  legalName: "Studeo Korepetycje",

  tagline: {
    pl: "Korepetycje z matematyki online",
  } satisfies LocalizedText,

  description: {
    pl: "Indywidualne korepetycje z matematyki online. Wrocław i cała Polska.",
  } satisfies LocalizedText,

  /** Produkcyjna domena. Nadpisywana przez NEXT_PUBLIC_SITE_URL. */
  url: siteUrlFromEnv ?? "https://studeo.pl", // ⚠️ PLACEHOLDER

  /** Lokalizacja — używana w SEO, danych strukturalnych i treściach. */
  location: {
    city: "Wrocław",
    region: "Dolnośląskie",
    countryCode: "PL",
    /** Współrzędne centrum Wrocławia — wystarczające dla usługi zdalnej. */
    latitude: 51.1079,
    longitude: 17.0385,
  },

  /** ⚠️ PLACEHOLDER — wstaw prawdziwe dane kontaktowe. */
  contact: {
    email: "kontakt@studeo.pl",
    phone: "+48 600 100 200",
    phoneHref: "+48600100200",
    /** Godziny, w których realnie odpowiadasz na zgłoszenia. */
    availability: {
      pl: "Poniedziałek–piątek, 9:00–20:00",
    } satisfies LocalizedText,
    responseTimeHours: 24,
  },

  /** Zasady biznesowe — cytowane w FAQ, więc zmiana tutaj aktualizuje treść. */
  policies: {
    /** Ile godzin przed lekcją można ją odwołać bezkosztowo. */
    freeCancellationHours: 12,
    /** ⚠️ PLACEHOLDER — dostosuj do swoich metod płatności. */
    paymentMethods: {
      pl: "przelew bankowy lub BLIK",
    } satisfies LocalizedText,
    /** Czy płatność następuje po lekcji (`after`) czy z góry (`upfront`). */
    paymentTiming: "after" as "after" | "upfront",
    /** Czy pierwsza lekcja jest lekcją diagnostyczną w normalnej cenie. */
    firstLessonIsDiagnostic: true,
  },

  /**
   * Profile społecznościowe. Celowo PUSTE — nie linkujemy do nieistniejących
   * kont. Stopka renderuje tę sekcję tylko wtedy, gdy tablica nie jest pusta.
   */
  socials: [] as SocialLink[],
} as const;

/** Bezpieczny, absolutny URL dla metadanych i danych strukturalnych. */
export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
