import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { BookingForm } from "@/components/sections/BookingForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { processSteps } from "@/content/steps";
import { site } from "@/content/site";
import { getDictionary, t } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { buildBreadcrumbSchema } from "@/lib/schema";

const dict = getDictionary();

export const metadata: Metadata = buildMetadata({
  title: dict.meta.booking.title,
  description: dict.meta.booking.description,
  path: routes.booking,
});

export default function BookingPage() {
  return (
    <>
      <PageHeader
        title={dict.bookingPage.heading}
        lead={dict.bookingPage.lead}
        breadcrumbs={[{ label: dict.bookingPage.heading }]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="rounded-panel bg-white p-6 shadow-soft ring-1 ring-inset ring-ink-200 sm:p-8">
            <BookingForm />
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <h2 className="text-base font-semibold text-ink-900">{dict.bookingPage.asideHeading}</h2>
              <ol className="mt-4 flex flex-col gap-3">
                {processSteps.slice(1).map((step, index) => (
                  <li key={step.id} className="flex gap-3 text-sm/relaxed text-ink-600">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                      {index + 1}
                    </span>
                    {t(step.title)}
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-xl bg-ink-50 p-5">
              <h2 className="text-base font-semibold text-ink-900">{dict.bookingPage.asideHelpHeading}</h2>
              <ul className="mt-3 flex flex-col gap-2.5 text-sm">
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800"
                  >
                    <Icon name="mail" size={16} />
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.contact.phoneHref}`}
                    className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800"
                  >
                    <Icon name="phone" size={16} />
                    {site.contact.phone}
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <JsonLd data={buildBreadcrumbSchema([{ label: dict.bookingPage.heading }])} />
    </>
  );
}
