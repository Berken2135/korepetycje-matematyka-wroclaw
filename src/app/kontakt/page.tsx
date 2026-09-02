import type { Metadata } from "next";
import { BookingForm } from "@/components/sections/BookingForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import { getDictionary, t } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { buildBreadcrumbSchema } from "@/lib/schema";

const dict = getDictionary();

export const metadata: Metadata = buildMetadata({
  title: dict.meta.contact.title,
  description: dict.meta.contact.description,
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title={dict.contactPage.heading}
        lead={dict.contactPage.lead}
        breadcrumbs={[{ label: dict.contactPage.heading }]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          <aside className="flex flex-col gap-8">
            <div>
              <h2 className="text-base font-semibold text-ink-900">{dict.contactPage.detailsHeading}</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
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
                <li className="flex items-start gap-2 text-ink-600">
                  <Icon name="clock" size={16} className="mt-0.5 shrink-0 text-ink-400" />
                  <span>
                    {t(site.contact.availability)}
                    <br />
                    <span className="text-ink-500">
                      Odpowiadamy zwykle w ciągu {site.contact.responseTimeHours} godzin.
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-ink-50 p-5">
              <h2 className="text-base font-semibold text-ink-900">{dict.contactPage.areaHeading}</h2>
              <p className="mt-2 flex items-start gap-2 text-sm/relaxed text-ink-600">
                <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-ink-400" />
                <span>
                  {site.location.city}, {site.location.region} — lekcje online dla uczniów z całej
                  Polski.
                </span>
              </p>
            </div>
          </aside>

          <div>
            <div className="max-w-2xl">
              <h2 className="text-base font-semibold text-ink-900">{dict.contactPage.formHeading}</h2>
              <p className="mt-2 text-sm/relaxed text-ink-500">{dict.contactPage.formLead}</p>
            </div>

            <div className="mt-6 max-w-2xl rounded-panel bg-white p-6 shadow-soft ring-1 ring-inset ring-ink-200 sm:p-8">
              <BookingForm submitLabel={dict.form.submitContact} />
            </div>
          </div>
        </div>
      </Section>

      <JsonLd data={buildBreadcrumbSchema([{ label: dict.contactPage.heading }])} />
    </>
  );
}
