import type { LocalizedText } from "@/i18n/config";

/**
 * =============================================================================
 * DOSTĘPNOŚĆ — słownik dni tygodnia i przedziałów godzinowych do formularza.
 * =============================================================================
 * Osobno od `formats.ts` (forma lekcji) i `levels.ts` (poziom ucznia):
 * to wyłącznie opcje pola „Preferowane dni/godziny” w formularzu zgłoszenia.
 */

export const weekdaySlugs = ["pon", "wt", "sr", "czw", "pt", "sob", "ndz"] as const;

export type WeekdaySlug = (typeof weekdaySlugs)[number];

export type Weekday = {
  slug: WeekdaySlug;
  label: LocalizedText;
  shortLabel: LocalizedText;
};

export const weekdays: readonly Weekday[] = [
  { slug: "pon", label: { pl: "Poniedziałek" }, shortLabel: { pl: "Pon" } },
  { slug: "wt", label: { pl: "Wtorek" }, shortLabel: { pl: "Wt" } },
  { slug: "sr", label: { pl: "Środa" }, shortLabel: { pl: "Śr" } },
  { slug: "czw", label: { pl: "Czwartek" }, shortLabel: { pl: "Czw" } },
  { slug: "pt", label: { pl: "Piątek" }, shortLabel: { pl: "Pt" } },
  { slug: "sob", label: { pl: "Sobota" }, shortLabel: { pl: "Sob" } },
  { slug: "ndz", label: { pl: "Niedziela" }, shortLabel: { pl: "Ndz" } },
];

export const timeSlotSlugs = ["rano", "poludnie", "popoludnie", "wieczor", "elastycznie"] as const;

export type TimeSlotSlug = (typeof timeSlotSlugs)[number];

export type TimeSlot = {
  slug: TimeSlotSlug;
  label: LocalizedText;
};

export const timeSlots: readonly TimeSlot[] = [
  { slug: "rano", label: { pl: "Rano (8:00–11:00)" } },
  { slug: "poludnie", label: { pl: "Południe (11:00–15:00)" } },
  { slug: "popoludnie", label: { pl: "Popołudnie (15:00–18:00)" } },
  { slug: "wieczor", label: { pl: "Wieczorem (18:00–21:00)" } },
  { slug: "elastycznie", label: { pl: "Elastycznie / dowolna pora" } },
];
