import { Section, SectionHeading } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { primaryTutor } from "@/content/tutors";
import { getDictionary } from "@/i18n";
import { homeSections, routes } from "@/lib/routes";
import { TutorCard } from "./TutorCard";

const dict = getDictionary();

/** Teaser korepetytora na stronie głównej — pełny profil jest pod `/korepetytorzy/[slug]`. */
export function TutorIntro() {
  return (
    <Section id={homeSections.tutor} tone="white" labelledBy="tutor-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
        <SectionHeading
          id="tutor-heading"
          eyebrow={dict.home.tutor.eyebrow}
          title={dict.home.tutor.heading}
          lead={dict.home.tutor.lead}
        />

        <Reveal delay={100}>
          <TutorCard tutor={primaryTutor} />
          <div className="mt-5">
            <Button href={routes.tutor(primaryTutor.slug)} variant="secondary" withArrow>
              {dict.common.ctaTutor}
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
