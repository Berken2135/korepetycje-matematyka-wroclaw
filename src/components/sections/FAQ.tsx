"use client";

import Link from "next/link";
import { useState } from "react";
import { Section, SectionHeading } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { featuredFaqItems, type FaqItem } from "@/content/faq";
import { getDictionary, t } from "@/i18n";
import { homeSections, routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const dict = getDictionary();

type FaqAccordionProps = {
  items: readonly FaqItem[];
};

/** Lista pytań rozwijanych pojedynczo — reużywana na stronie głównej i `/faq`. */
export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-ink-200/70 rounded-card bg-white ring-1 ring-inset ring-ink-200/70">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink-900 transition-colors hover:text-brand-700 sm:px-6 sm:py-5"
              >
                {t(item.question)}
                <Icon
                  name="chevron-down"
                  size={20}
                  className={cn(
                    "shrink-0 text-ink-400 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <div className="flex flex-col gap-3 px-5 pb-5 sm:px-6 sm:pb-6">
                {t(item.answer).map((paragraph) => (
                  <p key={paragraph} className="text-sm/relaxed text-ink-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Sekcja FAQ na stronie głównej — tylko pytania oznaczone `featured`. */
export function FAQ() {
  return (
    <Section id={homeSections.faq} tone="white" labelledBy="faq-heading">
      <SectionHeading
        id="faq-heading"
        eyebrow={dict.home.faq.eyebrow}
        title={dict.home.faq.heading}
        lead={dict.home.faq.lead}
      />

      <div className="mt-10 max-w-3xl">
        <FaqAccordion items={featuredFaqItems} />

        <Link
          href={routes.faq}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          {dict.common.ctaFaq}
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </Section>
  );
}
