import type { LocalizedText } from "@/i18n/config";

/**
 * =============================================================================
 * ⚠️ OPINIE — TREŚĆ PRZYKŁADOWA, NIE PRAWDZIWE OPINIE
 * =============================================================================
 * Wpisy poniżej mają `isPlaceholder: true` i istnieją TYLKO po to, żeby pokazać
 * wygląd sekcji. NIE PUBLIKUJ ICH JAKO PRAWDZIWYCH OPINII — publikowanie
 * wymyślonych rekomendacji jest wprowadzaniem klientów w błąd (i w Polsce
 * stanowi nieuczciwą praktykę rynkową).
 *
 * PRZED PUBLIKACJĄ zrób jedną z dwóch rzeczy:
 *   A) zastąp wpisy prawdziwymi opiniami (za zgodą autorów) i usuń pole
 *      `isPlaceholder`, albo
 *   B) ustaw `showTestimonials = false` — sekcja zniknie ze strony głównej,
 *      a układ strony pozostanie poprawny.
 *
 * Atrybucje są celowo ogólne („Rodzic ucznia klasy 8”), żeby nie tworzyć
 * wizerunku nieistniejących osób.
 */

export type Testimonial = {
  id: string;
  /** `true` = treść przykładowa, do zastąpienia przed publikacją. */
  isPlaceholder?: boolean;
  quote: LocalizedText;
  /** Kto mówi — bez wymyślonych imion i nazwisk. */
  author: LocalizedText;
  /** Kontekst, np. poziom nauki. */
  context: LocalizedText;
  /** Ocena 1–5; `undefined` = nie pokazujemy gwiazdek. */
  rating?: number;
};

/**
 * Przełącznik sekcji opinii na stronie głównej.
 * Ustaw `false`, dopóki nie masz prawdziwych opinii.
 */
export const showTestimonials: boolean = true;

export const testimonials: readonly Testimonial[] = [
  {
    id: "placeholder-1",
    isPlaceholder: true,
    quote: {
      pl: "Córka wchodziła na lekcje matematyki ze stresem, a po dwóch miesiącach sama pytała, czy może mieć dodatkowe zajęcia przed sprawdzianem. Ocena wzrosła z dopuszczającej na czwórkę.",
    },
    author: { pl: "Rodzic uczennicy klasy 8" },
    context: { pl: "Przygotowanie do egzaminu ósmoklasisty" },
    rating: 5,
  },
  {
    id: "placeholder-2",
    isPlaceholder: true,
    quote: {
      pl: "Najbardziej pomogło mi to, że nie dostawałem gotowych rozwiązań. Rozwiązywałem sam, a korepetytor tylko pokazywał, gdzie skręciłem w złą stronę. Na maturze rozszerzonej to zrobiło różnicę.",
    },
    author: { pl: "Maturzysta" },
    context: { pl: "Matura rozszerzona z matematyki" },
    rating: 5,
  },
  {
    id: "placeholder-3",
    isPlaceholder: true,
    quote: {
      pl: "Bałam się lekcji online, bo myślałam, że nic nie zrozumiem przez ekran. Tablica działa jednak lepiej niż zeszyt — wszystko zostaje w notatkach, do których mogę wrócić przed sprawdzianem.",
    },
    author: { pl: "Uczennica 2 klasy liceum" },
    context: { pl: "Funkcje i geometria analityczna" },
    rating: 5,
  },
];

/** Opinie do wyświetlenia — pusta tablica ukrywa sekcję. */
export const visibleTestimonials: readonly Testimonial[] = showTestimonials ? testimonials : [];

/** Czy w widocznych opiniach są jeszcze treści przykładowe (ostrzeżenie w konsoli). */
export const hasPlaceholderTestimonials = visibleTestimonials.some((item) => item.isPlaceholder);
