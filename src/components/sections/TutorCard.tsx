import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { formatPriceWithDuration, getPricingPlan } from "@/content/pricing";
import { getInitials, type Tutor } from "@/content/tutors";
import { getDictionary, t } from "@/i18n";
import { routes } from "@/lib/routes";

const dict = getDictionary();

type TutorCardProps = {
  tutor: Tutor;
};

export function TutorCard({ tutor }: TutorCardProps) {
  const plan = getPricingPlan(tutor.pricingPlanId);

  return (
    <Card interactive className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7">
      <div
        aria-hidden="true"
        className="grid size-16 shrink-0 place-items-center rounded-2xl bg-brand-50 text-lg font-bold text-brand-700 ring-1 ring-inset ring-brand-100"
      >
        {getInitials(tutor.name)}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-lg font-semibold text-ink-900">{tutor.name}</p>
        <p className="text-sm font-medium text-brand-600">{t(tutor.headline)}</p>
        <p className="mt-2 text-sm/relaxed text-ink-500">{t(tutor.summary)}</p>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {plan ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900">
              <Icon name="wallet" size={16} className="text-brand-600" />
              {formatPriceWithDuration(plan)}
            </span>
          ) : null}

          <Link
            href={routes.tutor(tutor.slug)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {dict.common.ctaTutor}
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </div>
    </Card>
  );
}
