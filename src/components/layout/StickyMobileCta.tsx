"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { primaryPricingPlan, formatPriceWithDuration } from "@/content/pricing";
import { getDictionary } from "@/i18n";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const dict = getDictionary();

/**
 * Przyklejony pasek CTA na telefonach — na małym ekranie przycisk w nagłówku
 * bywa poza zasięgiem kciuka, a to najważniejsza akcja na stronie.
 *
 * Nie pokazujemy go na stronie formularza (użytkownik już tam jest) ani na
 * samej górze strony, gdzie CTA z sekcji hero jest jeszcze widoczne.
 */
export function StickyMobileCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === routes.booking) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white/95 px-4 pt-3 backdrop-blur-md sm:hidden",
        "pb-[max(0.75rem,env(safe-area-inset-bottom))]",
        "motion-safe:transition-transform motion-safe:duration-300",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink-900">
            {formatPriceWithDuration(primaryPricingPlan)}
          </p>
          <p className="truncate text-xs text-ink-500">{dict.common.noCommitment}</p>
        </div>
        <Button href={routes.booking} size="md" tabIndex={visible ? undefined : -1}>
          {dict.common.ctaPrimary}
        </Button>
      </div>
    </div>
  );
}
