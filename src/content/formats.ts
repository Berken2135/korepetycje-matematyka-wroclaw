import type { IconName } from "@/components/ui/Icon";
import type { LocalizedText } from "@/i18n/config";

/**
 * =============================================================================
 * FORMY LEKCJI
 * =============================================================================
 * W MVP dostępna jest wyłącznie forma ONLINE (`available: true`).
 * Forma stacjonarna jest zdefiniowana i widoczna jako *nieaktywna* — dzięki
 * temu komunikat „tylko online” jest jednoznaczny, a nie przemilczany.
 *
 * JAK URUCHOMIĆ LEKCJE STACJONARNE: ustaw `available: true` przy `stacjonarnie`
 * i dodaj tę formę do `formats` korepetytora w `tutors.ts`. Formularz, profil
 * i FAQ zaktualizują się same.
 */

export const lessonFormatSlugs = ["online", "stacjonarnie"] as const;

export type LessonFormatSlug = (typeof lessonFormatSlugs)[number];

export type LessonFormat = {
  slug: LessonFormatSlug;
  available: boolean;
  label: LocalizedText;
  shortLabel: LocalizedText;
  description: LocalizedText;
  icon: IconName;
};

export const lessonFormats: readonly LessonFormat[] = [
  {
    slug: "online",
    available: true,
    label: { pl: "Online — jeden na jeden" },
    shortLabel: { pl: "Online" },
    description: {
      pl: "Wideorozmowa z tablicą współdzieloną. Uczysz się z domu, bez dojazdów, a notatki z lekcji zostają u Ciebie.",
    },
    icon: "monitor",
  },
  {
    slug: "stacjonarnie",
    available: false,
    label: { pl: "Stacjonarnie we Wrocławiu" },
    shortLabel: { pl: "Stacjonarnie" },
    description: {
      pl: "Obecnie nie prowadzimy lekcji stacjonarnych. Cały czas lekcji przeznaczamy na naukę, a nie na dojazdy.",
    },
    icon: "map-pin",
  },
];

export const availableLessonFormats: readonly LessonFormat[] = lessonFormats.filter(
  (format) => format.available,
);

export const primaryLessonFormat = availableLessonFormats[0] as LessonFormat;

export function getLessonFormat(slug: string): LessonFormat | undefined {
  return lessonFormats.find((format) => format.slug === slug);
}
