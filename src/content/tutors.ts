import type { LessonFormatSlug } from "./formats";
import type { StudentLevelSlug } from "./levels";
import type { SubjectSlug } from "./subjects";
import type { LocalizedList, LocalizedText } from "@/i18n/config";

/**
 * =============================================================================
 * KOREPETYTORZY
 * =============================================================================
 * Publiczne strony renderują WYŁĄCZNIE korepetytorów ze `status: "active"`.
 *
 * ⚠️ CAŁA TREŚĆ PONIŻEJ TO PLACEHOLDER. Przed publikacją zastąp prawdziwymi
 *    danymi: imię i nazwisko, biografię, wykształcenie, doświadczenie i liczby
 *    w `stats`. Nie publikuj wymyślonych kwalifikacji.
 *
 * JAK DODAĆ KOREPETYTORA: dopisz obiekt do tablicy. Strona
 * `/korepetytorzy/[slug]` wygeneruje się automatycznie, a `sitemap.ts`
 * doda ją do mapy strony.
 */

export type TutorStatus = "active" | "draft";

export type TutorCredential = {
  title: LocalizedText;
  organisation: LocalizedText;
  /** Dowolny tekst, np. „2018–2023” albo „od 2020”. */
  period: string;
};

export type TutorStat = {
  value: string;
  label: LocalizedText;
};

export type Tutor = {
  slug: string;
  status: TutorStatus;
  /** ⚠️ PLACEHOLDER — polski odpowiednik „John Doe”. */
  name: string;
  headline: LocalizedText;
  /** Jedno zdanie na kartę korepetytora. */
  summary: LocalizedText;
  photo: {
    /** `null` → renderowany jest elegancki placeholder z inicjałami. */
    src: string | null;
    alt: LocalizedText;
  };
  subjects: readonly SubjectSlug[];
  /** Akapity biografii. */
  bio: LocalizedList;
  education: readonly TutorCredential[];
  experience: readonly TutorCredential[];
  expertise: LocalizedList;
  levels: readonly StudentLevelSlug[];
  formats: readonly LessonFormatSlug[];
  languages: LocalizedList;
  /** Wskazuje plan z `pricing.ts`. */
  pricingPlanId: string;
  stats: readonly TutorStat[];
  /** Jak wygląda typowa lekcja — punkty na profilu. */
  teachingApproach: LocalizedList;
};

export const tutors: readonly Tutor[] = [
  {
    slug: "jan-kowalski",
    status: "active",
    name: "Jan Kowalski", // ⚠️ PLACEHOLDER
    headline: { pl: "Korepetytor matematyki" },
    summary: {
      pl: "Uczy matematyki od podstawówki do matury rozszerzonej. Zaczyna od diagnozy luk, a nie od pierwszego rozdziału podręcznika.",
    },
    photo: {
      src: null, // ⚠️ PLACEHOLDER — wstaw np. "/tutors/jan-kowalski.jpg"
      alt: { pl: "Zdjęcie korepetytora matematyki" },
    },
    subjects: ["matematyka"],
    bio: {
      pl: [
        // ⚠️ PLACEHOLDER — napisz własnymi słowami.
        "Matematyki uczę od kilku lat — najpierw kolegów z roku, potem uczniów przygotowujących się do egzaminu ósmoklasisty i matury. Z czasem zauważyłem, że problemem prawie nigdy nie jest „brak zdolności”, a konkretna luka z wcześniejszych lat, której nikt nie wychwycił.",
        "Dlatego pierwszą lekcję zawsze zaczynam od diagnozy: rozwiązujemy kilka zadań, żeby zobaczyć, gdzie dokładnie urywa się rozumowanie. Dopiero potem układamy plan — czasem trzeba wrócić o dwa lata wstecz, żeby ruszyć z bieżącym materiałem.",
        "Pracuję wyłącznie jeden na jeden i online. Cała lekcja należy do jednego ucznia, a zaoszczędzony czas dojazdu można przeznaczyć na naukę.",
      ],
    },
    education: [
      {
        // ⚠️ PLACEHOLDER
        title: { pl: "Matematyka, studia magisterskie" },
        organisation: { pl: "Uniwersytet Wrocławski" },
        period: "2018–2023",
      },
    ],
    experience: [
      {
        // ⚠️ PLACEHOLDER
        title: { pl: "Korepetycje indywidualne z matematyki" },
        organisation: { pl: "Uczniowie szkół podstawowych i średnich" },
        period: "od 2019",
      },
      {
        // ⚠️ PLACEHOLDER
        title: { pl: "Przygotowanie do egzaminu ósmoklasisty i matury" },
        organisation: { pl: "Kursy przygotowawcze, Wrocław" },
        period: "2021–2024",
      },
    ],
    expertise: {
      pl: [
        "Wyrażenia algebraiczne i równania",
        "Funkcje: liniowa, kwadratowa, wykładnicza, logarytmiczna",
        "Ciągi liczbowe i procent składany",
        "Trygonometria i planimetria",
        "Geometria analityczna i stereometria",
        "Rachunek prawdopodobieństwa i statystyka",
        "Pochodne i podstawy analizy (poziom rozszerzony)",
        "Nadrabianie zaległości z poprzednich klas",
      ],
    },
    levels: [
      "podstawowa-4-6",
      "podstawowa-7-8",
      "egzamin-osmoklasisty",
      "liceum-technikum",
      "matura-podstawowa",
      "matura-rozszerzona",
    ],
    formats: ["online"],
    languages: { pl: ["polski", "angielski"] },
    pricingPlanId: "matematyka-online-60",
    stats: [
      // ⚠️ PLACEHOLDER — wstaw prawdziwe liczby albo usuń wpis.
      { value: "5+", label: { pl: "lat doświadczenia" } },
      { value: "1:1", label: { pl: "zawsze indywidualnie" } },
      { value: "24 h", label: { pl: "czas odpowiedzi" } },
    ],
    teachingApproach: {
      pl: [
        "Pierwsza lekcja to diagnoza — sprawdzamy, gdzie naprawdę jest luka.",
        "Każdą lekcję zaczynamy od krótkiej powtórki poprzedniej.",
        "Tłumaczę na przykładach i rysunkach, zanim wprowadzę wzór.",
        "Uczeń rozwiązuje zadania sam, przy mnie — nie oglądając mojego rozwiązania.",
        "Po lekcji dostajesz notatki w PDF i zadania na kolejny tydzień.",
      ],
    },
  },
];

export const activeTutors: readonly Tutor[] = tutors.filter((tutor) => tutor.status === "active");

export const primaryTutor = activeTutors[0] as Tutor;

export function getTutor(slug: string): Tutor | undefined {
  return activeTutors.find((tutor) => tutor.slug === slug);
}

export function getTutorsForSubject(subject: SubjectSlug): readonly Tutor[] {
  return activeTutors.filter((tutor) => tutor.subjects.includes(subject));
}

/** Inicjały do placeholdera zdjęcia, np. „JK”. */
export function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}
