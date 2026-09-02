import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { primaryTutor } from "@/content/tutors";
import { getDictionary } from "@/i18n";
import { routes } from "@/lib/routes";

const dict = getDictionary();

export const metadata: Metadata = {
  title: dict.meta.notFound.title,
  description: dict.meta.notFound.description,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section size="lg" containerSize="narrow" className="text-center">
      <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
        <Icon name="alert" size={28} />
      </span>

      <h1 className="mt-6 text-3xl font-bold sm:text-4xl">{dict.notFound.heading}</h1>
      <p className="mt-4 text-lg/relaxed text-ink-500">{dict.notFound.lead}</p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Button href={routes.home} size="lg" withArrow>
          {dict.common.backHome}
        </Button>
        <Button href={routes.tutor(primaryTutor.slug)} size="lg" variant="secondary">
          {dict.common.ctaTutor}
        </Button>
        <Button href={routes.faq} size="lg" variant="ghost">
          {dict.common.ctaFaq}
        </Button>
      </div>
    </Section>
  );
}
