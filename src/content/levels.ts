import type { LocalizedText } from "@/i18n/config";

/**
 * =============================================================================
 * POZIOMY NAUCZANIA
 * =============================================================================
 * Jedno źródło prawdy dla: profilu korepetytora, sekcji „dla kogo”
 * oraz listy rozwijanej w formularzu zgłoszenia.
 */

export const studentLevelSlugs = [
  "podstawowa-4-6",
  "podstawowa-7-8",
  "egzamin-osmoklasisty",
  "liceum-technikum",
  "matura-podstawowa",
  "matura-rozszerzona",
  "studia",
  "inny",
] as const;

export type StudentLevelSlug = (typeof studentLevelSlugs)[number];

export type StudentLevel = {
  slug: StudentLevelSlug;
  label: LocalizedText;
  /** Krótkie uściślenie pokazywane na profilu korepetytora. */
  note?: LocalizedText;
};

export const studentLevels: readonly StudentLevel[] = [
  {
    slug: "podstawowa-4-6",
    label: { pl: "Szkoła podstawowa, klasy 4–6" },
    note: { pl: "Ułamki, procenty, podstawy geometrii, budowanie pewności siebie." },
  },
  {
    slug: "podstawowa-7-8",
    label: { pl: "Szkoła podstawowa, klasy 7–8" },
    note: { pl: "Wyrażenia algebraiczne, równania, twierdzenie Pitagorasa, bryły." },
  },
  {
    slug: "egzamin-osmoklasisty",
    label: { pl: "Przygotowanie do egzaminu ósmoklasisty" },
    note: { pl: "Powtórki działowe i praca na arkuszach CKE z omówieniem błędów." },
  },
  {
    slug: "liceum-technikum",
    label: { pl: "Liceum i technikum" },
    note: { pl: "Funkcje, ciągi, trygonometria, geometria analityczna, planimetria." },
  },
  {
    slug: "matura-podstawowa",
    label: { pl: "Matura podstawowa" },
    note: { pl: "Plan powtórek pod arkusz i pewne zdanie egzaminu." },
  },
  {
    slug: "matura-rozszerzona",
    label: { pl: "Matura rozszerzona" },
    note: { pl: "Dowody, optymalizacja, rachunek różniczkowy, zadania na wysoki wynik." },
  },
  {
    slug: "studia",
    label: { pl: "Studia — pierwsze lata" },
    note: { pl: "Analiza matematyczna, algebra liniowa, statystyka opisowa." },
  },
  {
    slug: "inny",
    label: { pl: "Inny poziom / nie jestem pewien" },
  },
];

export function getStudentLevel(slug: string): StudentLevel | undefined {
  return studentLevels.find((level) => level.slug === slug);
}
