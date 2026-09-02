import { site } from "./site";
import type { IconName } from "@/components/ui/Icon";
import type { LocalizedText } from "@/i18n/config";

/** Sekcja „Jak to działa”. */
export type ProcessStep = {
  id: string;
  icon: IconName;
  title: LocalizedText;
  body: LocalizedText;
};

export const processSteps: readonly ProcessStep[] = [
  {
    id: "zgloszenie",
    icon: "edit",
    title: { pl: "Wypełniasz formularz" },
    body: {
      pl: "Minuta pracy: poziom ucznia, pasujące dni i krótka informacja, z czym potrzebujesz pomocy. Bez rejestracji i bez zakładania konta.",
    },
  },
  {
    id: "kontakt",
    icon: "chat",
    title: { pl: "Odpowiadamy i ustalamy termin" },
    body: {
      pl: `Odpisujemy w ciągu ${site.contact.responseTimeHours} godzin z propozycją terminu. Jeśli chcesz, wcześniej rozmawiamy krótko o oczekiwaniach.`,
    },
  },
  {
    id: "pierwsza-lekcja",
    icon: "monitor",
    title: { pl: "Pierwsza lekcja: diagnoza" },
    body: {
      pl: "60 minut online. Sprawdzamy, gdzie naprawdę jest problem, i wychodzisz z konkretnym planem na najbliższe tygodnie.",
    },
  },
  {
    id: "regularna-nauka",
    icon: "calendar",
    title: { pl: "Uczysz się regularnie" },
    body: {
      pl: "Zwykle raz w tygodniu, w stałym terminie. Bez umowy — możesz zmienić częstotliwość albo przerwać w dowolnym momencie.",
    },
  },
];
