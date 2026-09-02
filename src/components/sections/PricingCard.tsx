import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { formatPrice, type PricingPlan } from "@/content/pricing";
import { getDictionary, t } from "@/i18n";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const dict = getDictionary();

type PricingCardProps = {
  plan: PricingPlan;
  className?: string;
};

export function PricingCard({ plan, className }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex h-full flex-col p-6 sm:p-8",
        plan.featured && "ring-2 ring-brand-500",
        className,
      )}
    >
      {plan.featured ? (
        <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-glow">
          Najpopularniejsze
        </span>
      ) : null}

      <p className="text-sm font-semibold text-ink-500">{t(plan.name)}</p>

      <p className="mt-3 flex items-baseline gap-1.5">
        <span className="font-display text-4xl font-bold text-ink-900">
          {formatPrice(plan.price)}
        </span>
      </p>
      <p className="mt-1 text-sm text-ink-500">za {plan.durationMinutes} minut lekcji</p>

      <p className="mt-4 text-sm/relaxed text-ink-600">{t(plan.description)}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {t(plan.includes).map((item) => (
          <li key={item} className="flex gap-3 text-sm/relaxed text-ink-600">
            <Icon name="check" size={18} className="mt-0.5 shrink-0 text-emerald-600" strokeWidth={2.2} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button href={routes.booking} size="lg" fullWidth withArrow className="mt-7">
        {dict.common.ctaPrimary}
      </Button>

      {plan.note ? <p className="mt-3 text-center text-xs text-ink-500">{t(plan.note)}</p> : null}
    </Card>
  );
}
