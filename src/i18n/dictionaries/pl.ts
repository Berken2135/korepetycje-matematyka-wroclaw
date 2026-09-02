/**
 * Polski slownik interfejsu.
 *
 * ZAKRES: teksty interfejsu (nawigacja, przyciski, naglowki sekcji, formularz,
 * komunikaty bledow, metadane SEO).
 *
 * NIE TUTAJ: dane biznesowe (ceny, korepetytorzy, przedmioty, FAQ, opinie).
 * Te znajduja sie w `src/content/*` i maja wlasne pola `LocalizedText`.
 */
export const pl = {
  meta: {
    titleTemplate: "%s | Studeo",
    home: {
      title: "Korepetycje z matematyki online — Wrocław | Studeo",
      description:
        "Korepetycje z matematyki we Wrocławiu i online. Indywidualne lekcje 1:1, 60 minut za 50 zł. Szkoła podstawowa, liceum, matura. Umów pierwszą lekcję bez zobowiązań.",
    },
    tutor: {
      titleSuffix: "Korepetytor matematyki",
      descriptionFallback:
        "Profil korepetytora matematyki. Doświadczenie, zakres materiału, poziomy nauczania i cena lekcji online.",
    },
    pricing: {
      title: "Cennik korepetycji z matematyki",
      description:
        "Przejrzysty cennik korepetycji z matematyki online: 50 zł za lekcję 60 minut. Bez ukrytych kosztów, bez abonamentu, bez opłaty wstępnej.",
    },
    booking: {
      title: "Umów pierwszą lekcję matematyki",
      description:
        "Wypełnij krótki formularz, aby umówić korepetycje z matematyki online. Odpowiadamy w ciągu 24 godzin. Zgłoszenie nie jest zobowiązaniem.",
    },
    faq: {
      title: "Najczęstsze pytania o korepetycje z matematyki",
      description:
        "Odpowiedzi na pytania o korepetycje z matematyki online: czas trwania lekcji, zajęcia stacjonarne we Wrocławiu, odwoływanie lekcji, płatności i pierwsza lekcja.",
    },
    about: {
      title: "O nas",
      description:
        "Studeo to platforma korepetycji z Wrocławia. Łączymy uczniów z jednym, sprawdzonym korepetytorem matematyki — bez pośredników i bez przypadkowych zmian nauczyciela.",
    },
    contact: {
      title: "Kontakt",
      description:
        "Skontaktuj się z Studeo — korepetycje z matematyki online, Wrocław. E-mail, telefon i formularz kontaktowy. Odpowiadamy w ciągu 24 godzin.",
    },
    notFound: {
      title: "Nie znaleziono strony",
      description: "Strona, której szukasz, nie istnieje lub została przeniesiona.",
    },
  },

  common: {
    skipToContent: "Przejdź do treści",
    ctaPrimary: "Umów pierwszą lekcję",
    ctaSecondary: "Zobacz ofertę",
    ctaTutor: "Poznaj korepetytora",
    ctaPricing: "Zobacz cennik",
    ctaContact: "Napisz do nas",
    ctaFaq: "Wszystkie pytania",
    backHome: "Wróć na stronę główną",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    menuLabel: "Menu główne",
    breadcrumbLabel: "Ścieżka nawigacji",
    home: "Start",
    perLesson: "za lekcję",
    minutesShort: "min",
    onlineBadge: "Lekcje online",
    required: "pole wymagane",
    optional: "opcjonalnie",
    email: "E-mail",
    phone: "Telefon",
    responseTime: "Odpowiadamy w ciągu 24 godzin",
    noCommitment: "Zgłoszenie nie jest zobowiązaniem",
  },

  home: {
    hero: {
      eyebrow: "Korepetycje z matematyki • Wrocław",
      headline: "Korepetycje z matematyki, które faktycznie podnoszą oceny",
      headlineAccent: "faktycznie podnoszą oceny",
      lead: "Indywidualne lekcje online jeden na jeden z korepetytorem z Wrocławia. Bez dojazdów, bez grup, bez przypadkowego materiału — plan układamy pod Twój sprawdzian, egzamin lub zaległości.",
      socialProof: "Uczniowie szkół podstawowych, liceów i techników — od nadrabiania zaległości po maturę rozszerzoną.",
    },
    tutor: {
      eyebrow: "Korepetytor",
      heading: "Jeden korepetytor, którego naprawdę poznasz",
      lead: "Nie jesteśmy giełdą ogłoszeń. Za wszystkie lekcje matematyki odpowiada jedna osoba — ta sama na pierwszej i na trzydziestej lekcji.",
    },
    why: {
      eyebrow: "Dlaczego my",
      heading: "Dlaczego uczniowie zostają na dłużej",
      lead: "Cztery rzeczy, które odróżniają regularne korepetycje od doraźnego ratowania sytuacji przed sprawdzianem.",
    },
    how: {
      eyebrow: "Jak to działa",
      heading: "Od zgłoszenia do pierwszej lekcji w cztery kroki",
      lead: "Bez rejestracji, bez zakładania konta i bez płatności z góry.",
    },
    pricing: {
      eyebrow: "Cennik",
      heading: "Jedna cena, bez gwiazdek",
      lead: "Płacisz za odbytą lekcję. Bez abonamentu, opłaty wstępnej i kosztów materiałów.",
    },
    testimonials: {
      eyebrow: "Opinie",
      heading: "Co mówią uczniowie i rodzice",
      lead: "Opinie zbierane po co najmniej pięciu odbytych lekcjach.",
    },
    faq: {
      eyebrow: "FAQ",
      heading: "Pytania, które słyszymy najczęściej",
      lead: "Jeśli czegoś tu brakuje — napisz, odpowiemy tego samego dnia.",
    },
    finalCta: {
      heading: "Zacznij od jednej lekcji",
      lead: "Wypełnienie formularza zajmuje minutę. Odpisujemy w ciągu 24 godzin z propozycją terminu — decyzję podejmujesz później.",
    },
  },

  tutorPage: {
    aboutHeading: "O mnie",
    educationHeading: "Wykształcenie i doświadczenie",
    expertiseHeading: "Zakres materiału",
    levelsHeading: "Poziomy nauczania",
    formatHeading: "Jak wyglądają lekcje",
    languagesHeading: "Języki lekcji",
    priceHeading: "Cena lekcji",
    ctaHeading: "Umów lekcję z tym korepetytorem",
    ctaLead: "Napisz, z czym potrzebujesz pomocy. Wspólnie ustalimy plan na pierwszą lekcję.",
  },

  pricingPage: {
    heading: "Cennik korepetycji z matematyki",
    lead: "Jedna stawka, jeden czas trwania, zero ukrytych kosztów. Płatność następuje po odbytej lekcji.",
    detailsHeading: "Co dokładnie obejmuje cena",
    notIncludedHeading: "Za co NIE płacisz",
    packagesHeading: "Pakiety i inne przedmioty",
    packagesLead:
      "Na razie oferujemy jedną, prostą stawkę za lekcję matematyki. Pakiety lekcji oraz kolejne przedmioty pojawią się, gdy zgłosi się więcej uczniów — obecni uczniowie zachowają swoją stawkę.",
  },

  bookingPage: {
    heading: "Umów pierwszą lekcję matematyki",
    lead: "Wypełnij formularz — odpiszemy w ciągu 24 godzin z propozycją terminu. To zgłoszenie, nie rezerwacja: nic nie płacisz i do niczego się nie zobowiązujesz.",
    asideHeading: "Co się stanie po wysłaniu",
    asideHelpHeading: "Wolisz napisać bezpośrednio?",
  },

  faqPage: {
    heading: "Najczęstsze pytania",
    lead: "Wszystko, o co pytają uczniowie i rodzice przed pierwszą lekcją.",
    stillHaveQuestions: "Nie znalazłeś odpowiedzi?",
    stillHaveQuestionsLead:
      "Napisz do nas — odpowiadamy na konkretne pytania o materiał, terminy i sposób prowadzenia lekcji.",
  },

  aboutPage: {
    heading: "O Studeo",
    lead: "Jesteśmy małą platformą korepetycji z Wrocławia. Zaczynamy od jednego przedmiotu i jednego korepetytora — celowo.",
    missionHeading: "Nasza misja",
    principlesHeading: "Zasady, których się trzymamy",
    futureHeading: "Co dalej",
  },

  contactPage: {
    heading: "Kontakt",
    lead: "Masz pytanie przed umówieniem lekcji? Napisz lub zadzwoń. Odpowiadamy w ciągu 24 godzin w dni robocze.",
    detailsHeading: "Dane kontaktowe",
    formHeading: "Formularz kontaktowy",
    formLead:
      "Ten sam formularz służy do umawiania lekcji i do zwykłych pytań — jeśli pytasz o coś innego niż termin, po prostu napisz to w wiadomości.",
    areaHeading: "Obszar działania",
  },

  form: {
    legendContact: "Dane kontaktowe",
    legendLesson: "Szczegóły lekcji",
    legendMessage: "Wiadomość",
    labels: {
      name: "Imię i nazwisko",
      email: "Adres e-mail",
      phone: "Numer telefonu",
      level: "Poziom / klasa ucznia",
      format: "Preferowana forma lekcji",
      days: "Preferowane dni",
      time: "Preferowane godziny",
      message: "Wiadomość",
      consent: "Zgoda na kontakt",
    },
    placeholders: {
      name: "np. Anna Nowak",
      email: "np. anna.nowak@example.com",
      phone: "np. 600 100 200",
      level: "Wybierz poziom",
      time: "Wybierz przedział godzin",
      message: "Z czym potrzebujesz pomocy? Np. „Sprawdzian z funkcji kwadratowej za dwa tygodnie, klasa 2 liceum”.",
    },
    hints: {
      name: "Jeśli zgłaszasz dziecko, podaj swoje imię — imię ucznia dopiszesz w wiadomości.",
      email: "Na ten adres wyślemy propozycję terminu.",
      phone: "Podaj, jeśli wolisz kontakt telefoniczny.",
      level: "Nie musisz trafić idealnie — ustalimy to na pierwszej lekcji.",
      days: "Zaznacz wszystkie dni, które Ci pasują. Im więcej, tym łatwiej znaleźć termin.",
      message: "Im więcej szczegółów, tym lepiej przygotujemy pierwszą lekcję.",
      formatUnavailable: "chwilowo niedostępne",
    },
    errors: {
      summaryTitle: "Popraw poniższe pola, aby wysłać zgłoszenie",
      name: "Podaj imię (minimum 2 znaki).",
      nameTooLong: "Imię i nazwisko może mieć maksymalnie 80 znaków.",
      email: "Podaj poprawny adres e-mail, np. anna@example.com.",
      phone: "Podaj poprawny numer telefonu (minimum 9 cyfr) lub zostaw pole puste.",
      level: "Wybierz poziom nauki ucznia.",
      format: "Wybierz formę lekcji.",
      formatUnavailable: "Ta forma lekcji nie jest obecnie dostępna.",
      days: "Zaznacz co najmniej jeden preferowany dzień.",
      time: "Wybierz preferowany przedział godzin.",
      messageTooLong: "Wiadomość może mieć maksymalnie 1500 znaków.",
      consent: "Bez tej zgody nie możemy odpowiedzieć na zgłoszenie.",
      generic: "Nie udało się wysłać zgłoszenia. Spróbuj ponownie za chwilę.",
      network: "Brak połączenia z serwerem. Sprawdź internet i spróbuj ponownie.",
      rateLimited: "Wysłano zbyt wiele zgłoszeń z tego urządzenia. Spróbuj ponownie za kilka minut.",
    },
    consentLabel:
      "Zgadzam się na kontakt w sprawie tego zgłoszenia i na przetwarzanie podanych danych w tym celu.",
    consentDetails:
      "Dane wykorzystujemy wyłącznie do odpowiedzi na to zgłoszenie i ustalenia terminu lekcji. Nie przekazujemy ich innym firmom i nie wysyłamy newsletterów. Możesz w każdej chwili poprosić o ich usunięcie.",
    charactersLeft: "znaków pozostało",
    submit: "Wyślij zgłoszenie",
    submitting: "Wysyłanie…",
    submitContact: "Wyślij wiadomość",
    success: {
      title: "Zgłoszenie wysłane",
      lead: "Dziękujemy! Odpowiemy na podany adres e-mail w ciągu 24 godzin w dni robocze.",
      nextStepsHeading: "Co dalej",
      nextSteps: [
        "Sprawdzimy, które z zaznaczonych terminów są wolne.",
        "Otrzymasz e-mail z propozycją terminu pierwszej lekcji.",
        "Po potwierdzeniu wyślemy link do spotkania online.",
      ],
      spamNote: "Jeśli w ciągu 24 godzin nie dostaniesz odpowiedzi, sprawdź folder spam lub napisz bezpośrednio na",
      again: "Wyślij kolejne zgłoszenie",
    },
  },

  footer: {
    tagline: "Korepetycje z matematyki online. Wrocław i cała Polska.",
    navHeading: "Serwis",
    contactHeading: "Kontakt",
    legalHeading: "Informacje",
    rights: "Wszelkie prawa zastrzeżone.",
    builtNote: "Strona nie zbiera plików cookie do celów marketingowych.",
  },

  notFound: {
    heading: "Nie znaleźliśmy tej strony",
    lead: "Adres jest nieprawidłowy lub strona została przeniesiona. Poniżej najczęściej odwiedzane miejsca.",
  },
} as const;
