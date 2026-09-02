import { Section, SectionHeading } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { activePricingPlans } from "@/content/pricing";
import { getDictionary } from "@/i18n";
import { homeSections } from "@/lib/routes";
import { PricingCard } from "./PricingCard";

const dict = getDictionary();

/** Sekcja cennika na stronie głównej — pełny cennik znajduje się na `/cennik`. */
export function Pricing() {
  return (
    <Section id={homeSections.pricing} tone="muted" labelledBy="pricing-heading">
      <SectionHeading
        id="pricing-heading"
        eyebrow={dict.home.pricing.eyebrow}
        title={dict.home.pricing.heading}
        lead={dict.home.pricing.lead}
        align="center"
      />

      <div className="mx-auto mt-12 grid max-w-md gap-6">
        {activePricingPlans.map((plan, index) => (
          <Reveal key={plan.id} delay={index * 70}>
            <PricingCard plan={plan} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
