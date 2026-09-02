/**
 * Konfiguracja jezykow / Locale configuration.
 *
 * JAK DODAC ANGIELSKI:
 *  1. Zmien `locales` na `["pl", "en"] as const`.
 *  2. TypeScript zglosi blad w KAZDYM miejscu, gdzie brakuje tlumaczenia
 *     (wszystkie pola `LocalizedText` w `src/content/*` oraz slownik).
 *     To zamierzone - lista bledow jest lista rzeczy do przetlumaczenia.
 *  3. Stworz `src/i18n/dictionaries/en.ts` na podstawie `pl.ts`.
 *  4. Dopiero wtedy (jesli potrzebne) przenies `src/app/*` do `src/app/[locale]/*`
 *     i przekazuj `locale` z params zamiast uzywac `defaultLocale`.
 */
export const locales = ["pl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";

/** Tekst we wszystkich obslugiwanych jezykach. */
export type LocalizedText = Record<Locale, string>;

/** Lista tekstow we wszystkich obslugiwanych jezykach. */
export type LocalizedList = Record<Locale, readonly string[]>;

/** Kod jezyka dla atrybutu `lang` / `hreflang`. */
export const htmlLang: Record<Locale, string> = {
  pl: "pl-PL",
};

/**
 * Wybiera wartosc dla danego jezyka.
 * `t(tutor.headline)` zwraca polski tekst, dopoki `defaultLocale === "pl"`.
 */
export function t<T>(value: Record<Locale, T>, locale: Locale = defaultLocale): T {
  return value[locale];
}
