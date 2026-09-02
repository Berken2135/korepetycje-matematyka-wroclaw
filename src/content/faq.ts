import { formatPrice, primaryPricingPlan } from "./pricing";
import { site } from "./site";
import type { LocalizedList, LocalizedText } from "@/i18n/config";

/**
 * =============================================================================
 * FAQ
 * =============================================================================
 * `featured: true` → pytanie pojawia się także na stronie głównej.
 * Odpowiedzi cytują `site.policies` i `pricing.ts`, więc zmiana ceny lub zasad
 * odwoływania aktualizuje treść FAQ automatycznie.
 *
 * Uwaga: te treści zasilają też dane strukturalne `FAQPage` (schema.org).
 * Odpowiedź musi być prawdziwa — Google traktuje ją jako oświadczenie firmy.
 */

export const faqCategorySlugs = ["lekcje", "organizacja", "platnosci"] as const;

export type FaqCategorySlug = (typeof faqCategorySlugs)[number];

export type FaqCategory = {
  slug: FaqCategorySlug;
  label: LocalizedText;
};

export const faqCategories: readonly FaqCategory[] = [
  { slug: "lekcje", label: { pl: "Lekcje i materiał" } },
  { slug: "organizacja", label: { pl: "Organizacja i terminy" } },
  { slug: "platnosci", label: { pl: "Płatności" } },
];

export type FaqItem = {
  id: string;
  category: FaqCategorySlug;
  featured?: boolean;
  question: LocalizedText;
  /** Akapity odpowiedzi. */
  answer: LocalizedList;
};

const cancellationHours = site.policies.freeCancellationHours;
const price = formatPrice(primaryPricingPlan.price);
const duration = primaryPricingPlan.durationMinutes;

export const faqItems: readonly FaqItem[] = [
  {
    id: "czas-trwania",
    category: "lekcje",
    featured: true,
    question: { pl: "Ile trwa jedna lekcja?" },
    answer: {
      pl: [
        `Standardowa lekcja trwa ${duration} minut i kosztuje ${price}. To pełne ${duration} minut nauki — czas nie jest skracany na powitania ani na konfigurację połączenia.`,
        "Przy młodszych uczniach (klasy 4–6) czasem lepiej działają krótsze, częstsze spotkania. Jeśli po pierwszych lekcjach uznamy, że tak będzie skuteczniej, ustalimy inny format i proporcjonalną cenę.",
      ],
    },
  },
  {
    id: "jak-wygladaja-lekcje-online",
    category: "lekcje",
    featured: true,
    question: { pl: "Jak wyglądają lekcje online?" },
    answer: {
      pl: [
        "Spotykamy się na wideorozmowie i pracujemy na tablicy współdzielonej — widzisz na bieżąco wszystko, co piszę, i sam rozwiązujesz zadania na tej samej tablicy.",
        "Potrzebujesz komputera lub tabletu, przeglądarki i stabilnego internetu. Mikrofon jest konieczny, kamera nie. Link do spotkania dostajesz mailem przed lekcją — nie musisz nic instalować ani zakładać konta.",
        "Po lekcji wysyłam notatki z tablicy w PDF razem z zadaniami do samodzielnej pracy.",
      ],
    },
  },
  {
    id: "lekcje-stacjonarne-wroclaw",
    category: "lekcje",
    featured: true,
    question: { pl: "Czy prowadzicie lekcje stacjonarne we Wrocławiu?" },
    answer: {
      pl: [
        "Na razie nie — wszystkie lekcje odbywają się online. Jesteśmy z Wrocławia i większość naszych uczniów też, ale świadomie zrezygnowaliśmy z dojazdów.",
        "Powód jest prosty: przejazd przez miasto to zwykle 40–60 minut w obie strony, które nie uczą matematyki. Zamiast doliczać ten czas do ceny, przeznaczamy go na naukę.",
        "Lekcje online sprawdzają się na każdym poziomie — od klasy 4 do matury rozszerzonej. Jeśli w przyszłości uruchomimy zajęcia stacjonarne we Wrocławiu, poinformujemy o tym na tej stronie.",
      ],
    },
  },
  {
    id: "poziomy",
    category: "lekcje",
    featured: true,
    question: { pl: "Dla jakich uczniów są te korepetycje?" },
    answer: {
      pl: [
        "Od klasy 4 szkoły podstawowej do matury rozszerzonej, a także dla studentów pierwszych lat (analiza matematyczna, algebra liniowa, statystyka opisowa).",
        "Pracujemy zarówno z uczniami, którzy nadrabiają zaległości i chcą przestać się bać sprawdzianów, jak i z tymi, którzy celują w wysoki wynik na maturze rozszerzonej.",
        "Jeśli nie jesteś pewien, czy dany materiał wchodzi w zakres — napisz. Powiemy szczerze, jeśli czegoś nie prowadzimy.",
      ],
    },
  },
  {
    id: "pierwsza-lekcja",
    category: "organizacja",
    featured: true,
    question: { pl: "Jak wygląda pierwsza lekcja?" },
    answer: {
      pl: [
        `Pierwsza lekcja jest lekcją diagnostyczną w normalnej cenie (${price}). Nie jest to rozmowa handlowa — od pierwszej minuty rozwiązujemy zadania.`,
        "Celem jest ustalenie, gdzie dokładnie urywa się rozumowanie. Często okazuje się, że problem z funkcją kwadratową w liceum wynika z ułamków z klasy 6.",
        "Po lekcji dostajesz podsumowanie: co działa, co wymaga pracy i jaki plan proponujemy na najbliższe tygodnie. Nie musisz decydować o kolejnych lekcjach od razu.",
      ],
    },
  },
  {
    id: "odwolywanie",
    category: "organizacja",
    featured: true,
    question: { pl: "Co, jeśli muszę odwołać lekcję?" },
    answer: {
      pl: [
        `Odwołanie do ${cancellationHours} godzin przed lekcją jest bezpłatne — wystarczy wiadomość lub telefon. Wspólnie znajdziemy nowy termin.`,
        `Przy odwołaniu później niż ${cancellationHours} godzin przed lekcją prosimy o połowę stawki, ponieważ termin był już zablokowany i przygotowany. W sytuacjach nagłych — choroba, wypadek — oczywiście nie liczymy nic.`,
        "Nie ma limitu przenoszonych lekcji ani kar za przerwę w nauce. Nie podpisujesz żadnej umowy.",
      ],
    },
  },
  {
    id: "czestotliwosc",
    category: "organizacja",
    question: { pl: "Jak często powinny odbywać się lekcje?" },
    answer: {
      pl: [
        "Najczęściej raz w tygodniu w stałym terminie — to wystarcza, żeby nadążać za bieżącym materiałem i systematycznie nadrabiać braki.",
        "Przed maturą lub egzaminem ósmoklasisty uczniowie zwykle przechodzą na dwie lekcje tygodniowo w ostatnich miesiącach. Przy dużych zaległościach też lepiej zacząć od dwóch.",
        "Rzadziej niż raz na dwa tygodnie zwykle nie ma sensu — połowa lekcji schodzi wtedy na przypominanie poprzedniej.",
      ],
    },
  },
  {
    id: "rodzic-informacje",
    category: "organizacja",
    question: { pl: "Czy rodzic dowie się, jak przebiega nauka?" },
    answer: {
      pl: [
        "Tak, na życzenie. Po lekcji wysyłamy krótkie podsumowanie: co przerobiliśmy, jak poszło i nad czym trzeba pracować.",
        "Nie wysyłamy raportów bez uzgodnienia — starsi uczniowie często wolą sami przekazywać informacje, i to też szanujemy. Wystarczy powiedzieć, jak ma być.",
      ],
    },
  },
  {
    id: "platnosci",
    category: "platnosci",
    featured: true,
    question: { pl: "Jak i kiedy płacę za lekcje?" },
    answer: {
      pl: [
        `Płatność następuje ${site.policies.paymentTiming === "after" ? "po odbytej lekcji" : "przed lekcją"}: ${site.policies.paymentMethods.pl}. Nie pobieramy płatności kartą na stronie i nie przechowujemy żadnych danych płatniczych.`,
        "Przy stałych, cotygodniowych terminach najwygodniejsze jest rozliczenie raz w tygodniu lub raz w miesiącu — za lekcje, które faktycznie się odbyły.",
        "Nie ma opłaty wstępnej, abonamentu ani minimalnej liczby lekcji.",
      ],
    },
  },
  {
    id: "faktura",
    category: "platnosci",
    question: { pl: "Czy mogę dostać potwierdzenie płatności?" },
    answer: {
      pl: [
        "Tak — wystarczy poprosić przy ustalaniu terminu. Wystawiamy potwierdzenie na dane, które podasz.",
      ],
    },
  },
  {
    id: "inne-przedmioty",
    category: "lekcje",
    question: { pl: "Czy uczycie innych przedmiotów niż matematyka?" },
    answer: {
      pl: [
        "Na razie nie. Prowadzimy wyłącznie korepetycje z matematyki i wolimy powiedzieć to wprost, niż obiecywać ofertę, której nie mamy.",
        "Platforma jest przygotowana na kolejne przedmioty i korepetytorów. Gdy dołączą, pojawią się na tej stronie — z nazwiskiem, zakresem materiału i ceną, tak jak obecna oferta.",
      ],
    },
  },
];

export const featuredFaqItems: readonly FaqItem[] = faqItems.filter((item) => item.featured);

export function getFaqItemsByCategory(category: FaqCategorySlug): readonly FaqItem[] {
  return faqItems.filter((item) => item.category === category);
}
