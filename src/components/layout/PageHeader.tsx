import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Container } from "./Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  breadcrumbs?: readonly Crumb[];
  /** Plakietki z kluczowymi informacjami (cena, forma lekcji). */
  meta?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

/**
 * Wspólny nagłówek podstron — jedno `h1` na stronę, zawsze tutaj.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  breadcrumbs,
  meta,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("relative overflow-hidden border-b border-ink-200/70 bg-ink-50", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-brand-200/35 blur-3xl"
      />

      <Container size="wide" className="relative py-12 sm:py-16">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}

        <Reveal className={cn("max-w-3xl", breadcrumbs && "mt-6")}>
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {title}
          </h1>

          {lead ? <p className="mt-5 text-lg/relaxed text-ink-600">{lead}</p> : null}

          {meta ? <div className="mt-6 flex flex-wrap gap-2">{meta}</div> : null}

          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </Reveal>
      </Container>
    </div>
  );
}
