import type { IconName } from "@/components/ui/Icon";
import type { LocalizedText } from "@/i18n/config";

/**
 * =============================================================================
 * PRZEDMIOTY
 * =============================================================================
 * Publiczne strony renderują WYŁĄCZNIE przedmioty ze `status: "active"`.
 * Wpisy `"planned"` istnieją, żeby model danych był gotowy na rozwój oferty —
 * nie pojawiają się nigdzie w interfejsie.
 *
 * JAK DODAĆ PRZEDMIOT: dopisz wpis (lub przełącz `status` na `"active"`),
 * dodaj plan w `pricing.ts` i przypisz go korepetytorowi w `tutors.ts`.
 */

export type SubjectSlug = "matematyka" | "fizyka" | "angielski";

export type SubjectStatus = "active" | "planned";

export type Subject = {
  slug: SubjectSlug;
  status: SubjectStatus;
  /** Mianownik, np. „Matematyka”. */
  name: LocalizedText;
  /** Dopełniacz do fraz typu „korepetycje z …”, np. „matematyki”. */
  nameGenitive: LocalizedText;
  description: LocalizedText;
  icon: IconName;
};

export const subjects: readonly Subject[] = [
  {
    slug: "matematyka",
    status: "active",
    name: { pl: "Matematyka" },
    nameGenitive: { pl: "matematyki" },
    description: {
      pl: "Od podstawówki do matury rozszerzonej: algebra, funkcje, geometria, ciągi, prawdopodobieństwo i analiza.",
    },
    icon: "sigma",
  },
  // ── Poniżej: przygotowane na przyszłość, NIEWIDOCZNE publicznie ───────────
  {
    slug: "fizyka",
    status: "planned",
    name: { pl: "Fizyka" },
    nameGenitive: { pl: "fizyki" },
    description: { pl: "Mechanika, elektryczność, termodynamika i optyka." },
    icon: "atom",
  },
  {
    slug: "angielski",
    status: "planned",
    name: { pl: "Angielski" },
    nameGenitive: { pl: "angielskiego" },
    description: { pl: "Konwersacje, gramatyka i przygotowanie do egzaminów." },
    icon: "language",
  },
];

export const activeSubjects: readonly Subject[] = subjects.filter(
  (subject) => subject.status === "active",
);

/**
 * Główny przedmiot oferty — używany w nagłówkach i SEO.
 * Rzut jest bezpieczny: co najmniej jeden przedmiot jest zawsze aktywny.
 */
export const primarySubject = activeSubjects[0] as Subject;

export function getSubject(slug: SubjectSlug): Subject | undefined {
  return subjects.find((subject) => subject.slug === slug);
}

export function getActiveSubject(slug: SubjectSlug): Subject | undefined {
  return activeSubjects.find((subject) => subject.slug === slug);
}
