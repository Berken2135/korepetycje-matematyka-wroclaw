import type { IconName } from "@/components/ui/Icon";
import type { LocalizedText } from "@/i18n/config";

/** Sekcja „Dlaczego my” — argumenty sprzedażowe. */
export type Benefit = {
  id: string;
  icon: IconName;
  title: LocalizedText;
  body: LocalizedText;
};

export const benefits: readonly Benefit[] = [
  {
    id: "diagnoza",
    icon: "target",
    title: { pl: "Zaczynamy od diagnozy, nie od podręcznika" },
    body: {
      pl: "Pierwsza lekcja służy znalezieniu konkretnej luki — często sprzed dwóch lub trzech lat. Dopiero potem układamy plan, żeby nie tłumaczyć drugi raz tego, co uczeń już umie.",
    },
  },
  {
    id: "jeden-na-jeden",
    icon: "users",
    title: { pl: "Zawsze jeden na jeden" },
    body: {
      pl: "Żadnych grup i żadnych „dwóch uczniów w cenie jednego”. Całe 60 minut jest przeznaczone na jednego ucznia, jego tempo i jego pytania.",
    },
  },
  {
    id: "bez-dojazdow",
    icon: "monitor",
    title: { pl: "Online, więc bez dojazdów" },
    body: {
      pl: "Lekcje prowadzimy przez wideorozmowę z tablicą współdzieloną. Nie tracisz godziny na dojazd przez Wrocław, a notatki z tablicy zostają u Ciebie w PDF.",
    },
  },
  {
    id: "przejrzysta-cena",
    icon: "wallet",
    title: { pl: "Jedna cena, bez gwiazdek" },
    body: {
      pl: "50 zł za 60 minut. Bez opłaty wstępnej, bez abonamentu, bez dopłat za materiały. Płacisz za lekcje, które faktycznie się odbyły.",
    },
  },
  {
    id: "postep-widoczny",
    icon: "trending-up",
    title: { pl: "Postęp, który widać na papierze" },
    body: {
      pl: "Po każdej lekcji dostajesz notatki i zestaw zadań. Rodzic może dostać krótkie podsumowanie: co zrobiliśmy, co jeszcze wymaga pracy.",
    },
  },
  {
    id: "jeden-korepetytor",
    icon: "shield",
    title: { pl: "Ten sam korepetytor za każdym razem" },
    body: {
      pl: "Nie jesteśmy giełdą ogłoszeń, w której nauczyciel zmienia się co miesiąc. Ta sama osoba prowadzi pierwszą i trzydziestą lekcję.",
    },
  },
];
