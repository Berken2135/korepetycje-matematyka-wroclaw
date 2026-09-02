import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { buildBreadcrumbSchema } from "@/lib/schema";

const dict = getDictionary();

export const metadata: Metadata = buildMetadata({
  title: dict.meta.about.title,
  description: dict.meta.about.description,
  path: routes.about,
});

const principles = [
  {
    icon: "shield" as const,
    title: "Szczerość zamiast marketingu",
    body: "Nie publikujemy wymyślonych opinii ani liczb, których nie potrafimy potwierdzić. Jeśli czegoś nie robimy — na przykład lekcji stacjonarnych — mówimy to wprost zamiast obiecywać ofertę, której nie ma.",
  },
  {
    icon: "target" as const,
    title: "Jeden przedmiot, zanim dodamy kolejne",
    body: "Zaczynamy wyłącznie od matematyki i jednego korepetytora, żeby dopracować jakość, zanim skalujemy ofertę. To świadoma decyzja, nie ograniczenie techniczne.",
  },
  {
    icon: "wallet" as const,
    title: "Płacisz za lekcje, które się odbyły",
    body: "Bez abonamentu, opłaty wstępnej i pakietów, które trzeba wykupić z góry. Rozliczenie następuje po odbytych lekcjach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={dict.aboutPage.heading}
        lead={dict.aboutPage.lead}
        breadcrumbs={[{ label: dict.aboutPage.heading }]}
      />

      <Section tone="white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-ink-900">{dict.aboutPage.missionHeading}</h2>
          <p className="mt-4 text-base/relaxed text-ink-600">
            Misją {site.name} jest połączenie uczniów z jednym, sprawdzonym korepetytorem matematyki
            — bez pośredników, bez przypadkowej zamiany nauczyciela i bez przepłacania za dostęp do
            platformy z setkami przypadkowych ogłoszeń. Uczysz się z tą samą osobą od pierwszej do
            trzydziestej lekcji.
          </p>
        </div>
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-ink-900">{dict.aboutPage.principlesHeading}</h2>
          <div className="mt-8 flex flex-col gap-6">
            {principles.map((principle) => (
              <div key={principle.title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                  <Icon name={principle.icon} size={20} />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">{principle.title}</p>
                  <p className="mt-1.5 text-sm/relaxed text-ink-600">{principle.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-ink-900">{dict.aboutPage.futureHeading}</h2>
          <p className="mt-4 text-base/relaxed text-ink-600">
            Platforma jest od początku zbudowana pod model{" "}
            <span className="font-medium text-ink-800">przedmiot → korepetytor → cena</span> — tak,
            by kolejne przedmioty i korepetytorzy mogli dołączać bez przebudowy serwisu. Gdy to
            nastąpi, każdy nowy korepetytor pojawi się na tej stronie z takim samym poziomem
            szczegółu jak obecna oferta: imieniem, zakresem materiału i przejrzystą ceną.
          </p>
        </div>
      </Section>

      <CTA />

      <JsonLd data={buildBreadcrumbSchema([{ label: dict.aboutPage.heading }])} />
    </>
  );
}
