import type { LessonFormatSlug } from "./formats";
import type { SubjectSlug } from "./subjects";
import type { LocalizedList, LocalizedText } from "@/i18n/config";

/**
 * =============================================================================
 * CENNIK — jedyne miejsce, w którym zmienia się ceny.
 * =============================================================================
 * Publiczne strony renderują WYŁĄCZNIE plany ze `status: "active"`.
 *
 * JAK ZMIENIĆ CENĘ: edytuj `price` w planie. Zaktualizuje się strona główna,
 * cennik, profil korepetytora i dane strukturalne (Offer) w SEO.
 */

export const currency = {
  code: "PLN",
  /** Symbol wyświetlany po kwocie, zgodnie z polską konwencją. */
  symbol: "zł",
} as const;

export type PricingPlanStatus = "active" | "hidden";

export type PricingPlan = {
  id: string;
  status: PricingPlanStatus;
  subject: SubjectSlug;
  format: LessonFormatSlug;
  name: LocalizedText;
  description: LocalizedText;
  /** Cena za jedną lekcję w `currency.code`. */
  price: number;
  durationMinutes: number;
  /** Wyróżnia plan wizualnie na liście. */
  featured?: boolean;
  includes: LocalizedList;
  excludes: LocalizedList;
  note?: LocalizedText;
};

export const pricingPlans: readonly PricingPlan[] = [
  {
    id: "matematyka-online-60",
    status: "active",
    subject: "matematyka",
    format: "online",
    name: { pl: "Lekcja indywidualna" },
    description: {
      pl: "Jedna lekcja matematyki online, jeden na jeden z korepetytorem. Bez abonamentu i bez zobowiązań na przyszłość.",
    },
    price: 50,
    durationMinutes: 60,
    featured: true,
    includes: {
      pl: [
        "60 minut lekcji jeden na jeden — bez grup i bez dzielenia uwagi",
        "Plan lekcji przygotowany pod Twój sprawdzian, egzamin lub zaległości",
        "Notatki z tablicy współdzielonej wysyłane po lekcji w PDF",
        "Zestaw zadań do samodzielnej pracy na kolejny tydzień",
        "Krótkie podsumowanie postępów dla rodzica (na życzenie)",
      ],
    },
    excludes: {
      pl: [
        "Opłaty wstępnej ani wpisowego",
        "Abonamentu i minimalnej liczby lekcji",
        "Materiałów i arkuszy — są w cenie lekcji",
        "Dojazdów — lekcje odbywają się online",
      ],
    },
    note: {
      pl: "Płatność po odbytej lekcji. Rozliczenie tygodniowe przy stałych terminach.",
    },
  },
  // ── Przykład skalowalności: plan gotowy, ale UKRYTY publicznie. ───────────
  // Pokazuje docelowy model: Przedmiot → Korepetytor → cena za godzinę.
  {
    id: "fizyka-online-60",
    status: "hidden",
    subject: "fizyka",
    format: "online",
    name: { pl: "Lekcja indywidualna" },
    description: { pl: "Jedna lekcja fizyki online, jeden na jeden." },
    price: 70,
    durationMinutes: 60,
    includes: { pl: ["60 minut lekcji jeden na jeden"] },
    excludes: { pl: [] },
  },
];

export const activePricingPlans: readonly PricingPlan[] = pricingPlans.filter(
  (plan) => plan.status === "active",
);

export const primaryPricingPlan = activePricingPlans[0] as PricingPlan;

export function getPricingPlan(id: string): PricingPlan | undefined {
  return pricingPlans.find((plan) => plan.id === id);
}

export function getActivePlansForSubject(subject: SubjectSlug): readonly PricingPlan[] {
  return activePricingPlans.filter((plan) => plan.subject === subject);
}

/** „50 zł” — bez miejsc po przecinku, gdy cena jest całkowita. */
export function formatPrice(amount: number): string {
  const value = Number.isInteger(amount) ? String(amount) : amount.toFixed(2).replace(".", ",");
  return `${value} ${currency.symbol}`;
}

/** „50 zł / 60 min” — zwarty zapis do plakietek i nagłówków. */
export function formatPriceWithDuration(plan: PricingPlan): string {
  return `${formatPrice(plan.price)} / ${plan.durationMinutes} min`;
}
