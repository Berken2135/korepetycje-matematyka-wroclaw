import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/sections/CTA";
import { PricingCard } from "@/components/sections/PricingCard";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { getLessonFormat } from "@/content/formats";
import { getStudentLevel } from "@/content/levels";
import { formatPriceWithDuration, getPricingPlan } from "@/content/pricing";
import { activeTutors, getInitials, getTutor } from "@/content/tutors";
import { getDictionary, t } from "@/i18n";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";
import { buildBreadcrumbSchema, buildOfferSchema, buildPersonSchema } from "@/lib/schema";
import { joinWithConjunction } from "@/lib/utils";

const dict = getDictionary();

type TutorPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return activeTutors.map((tutor) => ({ slug: tutor.slug }));
}

export async function generateMetadata({ params }: TutorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tutor = getTutor(slug);
  if (!tutor) return {};

  return buildMetadata({
    title: `${tutor.name} — ${dict.meta.tutor.titleSuffix}`,
    description: t(tutor.summary) || dict.meta.tutor.descriptionFallback,
    path: routes.tutor(tutor.slug),
  });
}

export default async function TutorPage({ params }: TutorPageProps) {
  const { slug } = await params;
  const tutor = getTutor(slug);
  if (!tutor) notFound();

  const plan = getPricingPlan(tutor.pricingPlanId);
  const credentials = [...tutor.education, ...tutor.experience];

  return (
    <>
      <PageHeader
        eyebrow={t(tutor.headline)}
        title={tutor.name}
        lead={t(tutor.summary)}
        breadcrumbs={[{ label: tutor.name }]}
        meta={
          <>
            {plan ? <Badge icon="wallet">{formatPriceWithDuration(plan)}</Badge> : null}
            <Badge icon="monitor">Lekcje online, jeden na jeden</Badge>
          </>
        }
        actions={
          <Button href={routes.booking} size="lg" withArrow>
            {dict.common.ctaPrimary}
          </Button>
        }
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="flex flex-col gap-14">
            <div className="flex items-start gap-5">
              <div
                aria-hidden="true"
                className="grid size-16 shrink-0 place-items-center rounded-2xl bg-brand-50 text-lg font-bold text-brand-700 ring-1 ring-inset ring-brand-100"
              >
                {getInitials(tutor.name)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-ink-900">{dict.tutorPage.aboutHeading}</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {t(tutor.bio).map((paragraph) => (
                    <p key={paragraph} className="text-base/relaxed text-ink-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-900">{dict.tutorPage.educationHeading}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {credentials.map((entry) => (
                  <li key={`${entry.title.pl}-${entry.period}`} className="flex gap-4 rounded-xl bg-ink-50 p-4">
                    <Icon name="graduation-cap" size={20} className="mt-0.5 shrink-0 text-brand-600" />
                    <div>
                      <p className="font-semibold text-ink-900">{t(entry.title)}</p>
                      <p className="text-sm text-ink-500">
                        {t(entry.organisation)} · {entry.period}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-900">{dict.tutorPage.expertiseHeading}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {t(tutor.expertise).map((item) => (
                  <li key={item} className="flex gap-3 text-sm/relaxed text-ink-600">
                    <Icon name="check" size={18} className="mt-0.5 shrink-0 text-emerald-600" strokeWidth={2.2} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-900">{dict.tutorPage.levelsHeading}</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tutor.levels.map((slug) => {
                  const level = getStudentLevel(slug);
                  if (!level) return null;
                  return (
                    <div key={slug} className="rounded-xl bg-ink-50 p-4">
                      <p className="font-semibold text-ink-900">{t(level.label)}</p>
                      {level.note ? <p className="mt-1 text-sm text-ink-500">{t(level.note)}</p> : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-ink-900">{dict.tutorPage.formatHeading}</h2>
              <div className="mt-5 flex flex-col gap-3">
                {tutor.formats.map((slug) => {
                  const format = getLessonFormat(slug);
                  if (!format) return null;
                  return (
                    <div key={slug} className="flex items-start gap-3 rounded-xl bg-ink-50 p-4">
                      <Icon name={format.icon} size={20} className="mt-0.5 shrink-0 text-brand-600" />
                      <div>
                        <p className="font-semibold text-ink-900">{t(format.label)}</p>
                        <p className="mt-1 text-sm text-ink-500">{t(format.description)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 text-sm font-medium text-ink-700">
                {dict.tutorPage.languagesHeading}: {joinWithConjunction(t(tutor.languages))}
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <h2 className="sr-only">{dict.tutorPage.priceHeading}</h2>
            {plan ? <PricingCard plan={plan} /> : null}
          </aside>
        </div>
      </Section>

      <CTA heading={dict.tutorPage.ctaHeading} lead={dict.tutorPage.ctaLead} />

      <JsonLd data={buildBreadcrumbSchema([{ label: tutor.name }])} />
      <JsonLd data={buildPersonSchema(tutor)} />
      {plan ? <JsonLd data={buildOfferSchema(plan)} /> : null}
    </>
  );
}
