import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { FaqAccordion } from "@/components/sections/FAQ";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { faqCategories, faqItems, getFaqItemsByCategory } from "@/content/faq";
import { site } from "@/content/site";
import { getDictionary, t } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";

const dict = getDictionary();

export const metadata: Metadata = buildMetadata({
  title: dict.meta.faq.title,
  description: dict.meta.faq.description,
  path: routes.faq,
});

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title={dict.faqPage.heading}
        lead={dict.faqPage.lead}
        breadcrumbs={[{ label: dict.faqPage.heading }]}
      />

      <Section tone="white">
        <div className="mx-auto flex max-w-3xl flex-col gap-14">
          {faqCategories.map((category) => {
            const items = getFaqItemsByCategory(category.slug);
            if (items.length === 0) return null;

            return (
              <div key={category.slug}>
                <h2 className="text-xl font-bold text-ink-900">{t(category.label)}</h2>
                <div className="mt-5">
                  <FaqAccordion items={items} />
                </div>
              </div>
            );
          })}

          <div className="rounded-panel bg-ink-50 p-6 text-center sm:p-8">
            <h2 className="text-lg font-semibold text-ink-900">{dict.faqPage.stillHaveQuestions}</h2>
            <p className="mx-auto mt-2 max-w-md text-sm/relaxed text-ink-600">
              {dict.faqPage.stillHaveQuestionsLead}
            </p>
            <div className="mt-5">
              <Button href={`mailto:${site.contact.email}`} variant="secondary">
                {dict.common.ctaContact}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CTA />

      <JsonLd data={buildBreadcrumbSchema([{ label: dict.faqPage.heading }])} />
      <JsonLd data={buildFaqSchema(faqItems)} />
    </>
  );
}
