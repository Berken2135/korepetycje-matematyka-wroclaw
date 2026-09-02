import { Section, SectionHeading } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { visibleTestimonials } from "@/content/testimonials";
import { getDictionary, t } from "@/i18n";
import { homeSections } from "@/lib/routes";

const dict = getDictionary();

export function Testimonials() {
  if (visibleTestimonials.length === 0) return null;

  return (
    <Section id={homeSections.testimonials} tone="muted" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow={dict.home.testimonials.eyebrow}
        title={dict.home.testimonials.heading}
        lead={dict.home.testimonials.lead}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleTestimonials.map((item, index) => (
          <Reveal key={item.id} delay={index * 70}>
            <Card className="flex h-full flex-col p-6 sm:p-7">
              {item.rating ? (
                <div className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Icon
                      key={starIndex}
                      name="star"
                      size={16}
                      fill="currentColor"
                      strokeWidth={0}
                      className="text-accent-500"
                    />
                  ))}
                </div>
              ) : null}

              <p className="mt-4 flex-1 text-sm/relaxed text-ink-600">&ldquo;{t(item.quote)}&rdquo;</p>

              <footer className="mt-5 border-t border-ink-200/70 pt-4">
                <p className="text-sm font-semibold text-ink-900">{t(item.author)}</p>
                <p className="text-xs text-ink-500">{t(item.context)}</p>
              </footer>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
