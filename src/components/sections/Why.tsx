import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { benefits } from "@/content/benefits";
import { getDictionary, t } from "@/i18n";
import { homeSections } from "@/lib/routes";

const dict = getDictionary();

export function Why() {
  return (
    <Section id={homeSections.why} tone="muted" labelledBy="why-heading">
      <SectionHeading
        id="why-heading"
        eyebrow={dict.home.why.eyebrow}
        title={dict.home.why.heading}
        lead={dict.home.why.lead}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <Reveal key={benefit.id} delay={index * 60}>
            <Card className="h-full p-6 sm:p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                <Icon name={benefit.icon} size={22} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">{t(benefit.title)}</h3>
              <p className="mt-2 text-sm/relaxed text-ink-500">{t(benefit.body)}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
