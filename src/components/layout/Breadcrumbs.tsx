import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { getDictionary } from "@/i18n";
import { routes } from "@/lib/routes";

const dict = getDictionary();

export type Crumb = {
  label: string;
  /** Brak `href` = element bieżący. */
  href?: string;
};

/**
 * Okruszki wspierają orientację i pozwalają Google pokazać ścieżkę
 * w wynikach. Dane strukturalne `BreadcrumbList` dodajemy na poziomie strony
 * (`buildBreadcrumbSchema`), żeby nie duplikować JSON-LD w komponencie.
 */
export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  return (
    <nav aria-label={dict.common.breadcrumbLabel}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-500">
        <li className="flex items-center gap-1.5">
          <Link href={routes.home} className="rounded transition-colors hover:text-brand-700">
            {dict.common.home}
          </Link>
          <Icon name="chevron-right" size={14} className="text-ink-300" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="rounded transition-colors hover:text-brand-700">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-ink-700">
                  {item.label}
                </span>
              )}
              {!isLast ? <Icon name="chevron-right" size={14} className="text-ink-300" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
