import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { PricingCard } from "@/components/sections/PricingCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { activePricingPlans } from "@/content/pricing";
import { getDictionary, t } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { buildBreadcrumbSchema, buildOfferSchema } from "@/lib/schema";

const dict = getDictionary();

export const metadata: Metadata = buildMetadata({
  title: dict.meta.pricing.title,
  description: dict.meta.pricing.description,
  path: routes.pricing,
});

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow={dict.home.pricing.eyebrow}
        title={dict.pricingPage.heading}
        lead={dict.pricingPage.lead}
        breadcrumbs={[{ label: dict.pricingPage.heading }]}
      />

      <Section tone="white">
        <div className="mx-auto grid max-w-md gap-6">
          {activePricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-ink-900">{dict.pricingPage.detailsHeading}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {activePricingPlans[0]
                ? t(activePricingPlans[0].includes).map((item) => (
                    <li key={item} className="flex gap-3 text-sm/relaxed text-ink-600">
                      <Icon name="check" size={18} className="mt-0.5 shrink-0 text-emerald-600" strokeWidth={2.2} />
                      {item}
                    </li>
                  ))
                : null}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink-900">{dict.pricingPage.notIncludedHeading}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {activePricingPlans[0]
                ? t(activePricingPlans[0].excludes).map((item) => (
                    <li key={item} className="flex gap-3 text-sm/relaxed text-ink-500">
                      <Icon name="close" size={18} className="mt-0.5 shrink-0 text-ink-400" />
                      {item}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-panel bg-ink-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-ink-900">{dict.pricingPage.packagesHeading}</h2>
          <p className="mt-3 text-sm/relaxed text-ink-600">{dict.pricingPage.packagesLead}</p>
        </div>
      </Section>

      <CTA />

      <JsonLd data={buildBreadcrumbSchema([{ label: dict.pricingPage.heading }])} />
      {activePricingPlans.map((plan) => (
        <JsonLd key={plan.id} data={buildOfferSchema(plan)} />
      ))}
    </>
  );
}
