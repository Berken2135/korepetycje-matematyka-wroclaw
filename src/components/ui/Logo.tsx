import Link from "next/link";
import { site } from "@/content/site";
import { t } from "@/i18n/config";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** `light` — do użycia na ciemnym tle (stopka, sekcje `dark`). */
  tone?: "dark" | "light";
  /** Renderuje samą grafikę bez linku (np. w obrazku Open Graph). */
  asLink?: boolean;
  className?: string;
};

/**
 * Znak marki: kwadrat z zaokrąglonymi narożnikami i literą „S”
 * zbudowaną z dwóch łuków — czysty SVG, więc skaluje się bezstratnie.
 * Podmiana logo = podmiana tego jednego komponentu.
 */
function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-[0.7rem] bg-brand-600 text-white shadow-glow",
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
        <path
          d="M16.5 7.2C15.4 6 13.9 5.4 12 5.4c-2.3 0-3.9 1-3.9 2.7 0 1.6 1.3 2.3 4 2.9 3.1.7 4.6 1.8 4.6 4.1 0 2.5-2.2 4.1-5.2 4.1-2.2 0-4-.7-5.2-2"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function Logo({ tone = "dark", asLink = true, className }: LogoProps) {
  const inner = (
    <>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            tone === "light" ? "text-white" : "text-ink-900",
          )}
        >
          {site.name}
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6875rem] font-medium",
            tone === "light" ? "text-ink-400" : "text-ink-500",
          )}
        >
          {t(site.tagline)}
        </span>
      </span>
    </>
  );

  if (!asLink) {
    return <span className={cn("inline-flex items-center gap-2.5", className)}>{inner}</span>;
  }

  return (
    <Link
      href={routes.home}
      className={cn("inline-flex items-center gap-2.5 rounded-lg", className)}
      aria-label={`${site.name} — ${t(site.tagline)}`}
    >
      {inner}
    </Link>
  );
}
