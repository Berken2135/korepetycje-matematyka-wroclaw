import { defaultLocale, type Locale } from "./config";
import { pl } from "./dictionaries/pl";

export type Dictionary = typeof pl;

/**
 * Slowniki zaladowane statycznie - przy jednym jezyku dynamiczny import tylko
 * dodalby opoznienie. Gdy dojdzie drugi jezyk, zamien na `import()` per locale.
 */
const dictionaries: Record<Locale, Dictionary> = { pl };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

export * from "./config";
