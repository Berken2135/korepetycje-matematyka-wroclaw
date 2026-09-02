import { Section, SectionHeading } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/content/steps";
import { getDictionary, t } from "@/i18n";
import { homeSections } from "@/lib/routes";

const dict = getDictionary();

export function How() {
  return (
    <Section id={homeSections.how} tone="white" labelledBy="how-heading">
      <SectionHeading
        id="how-heading"
        eyebrow={dict.home.how.eyebrow}
        title={dict.home.how.heading}
        lead={dict.home.how.lead}
      />

      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {processSteps.map((step, index) => (
          <Reveal key={step.id} as="li" delay={index * 70}>
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <Icon name={step.icon} size={22} className="text-brand-600" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink-900">{t(step.title)}</h3>
            <p className="mt-2 text-sm/relaxed text-ink-500">{t(step.body)}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
