import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getDictionary } from "@/i18n";
import { routes } from "@/lib/routes";

const dict = getDictionary();

type CTAProps = {
  id?: string;
  heading?: string;
  lead?: string;
};

/** Ostatnie wezwanie do działania — na dole strony głównej i pozostałych podstron. */
export function CTA({
  id,
  heading = dict.home.finalCta.heading,
  lead = dict.home.finalCta.lead,
}: CTAProps) {
  return (
    <Section id={id} tone="brand" size="lg" containerSize="narrow" className="text-center">
      <Reveal>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg/relaxed text-brand-100">{lead}</p>

        <div className="mt-8">
          <Button href={routes.booking} size="lg" variant="inverse" withArrow>
            {dict.common.ctaPrimary}
          </Button>
        </div>

        <p className="mt-5 text-sm text-brand-200">
          {dict.common.responseTime} · {dict.common.noCommitment}
        </p>
      </Reveal>
    </Section>
  );
}
