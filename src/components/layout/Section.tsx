import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  /** Tło sekcji — naprzemienne tła budują rytm strony. */
  tone?: "white" | "muted" | "dark" | "brand";
  size?: "sm" | "md" | "lg";
  containerSize?: "narrow" | "default" | "wide";
  className?: string;
  /** `aria-labelledby` — id nagłówka sekcji. */
  labelledBy?: string;
  children: ReactNode;
};

const tones = {
  white: "bg-white",
  muted: "bg-ink-50",
  dark: "bg-ink-950 text-ink-200",
  brand: "bg-brand-700 text-brand-50",
} as const;

const paddings = {
  sm: "py-14 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-24 lg:py-32",
} as const;

export function Section({
  id,
  tone = "white",
  size = "md",
  containerSize = "default",
  className,
  labelledBy,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(tones[tone], paddings[size], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  /** Poziom nagłówka — pilnuje poprawnej hierarchii na stronie. */
  as?: "h2" | "h3";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  as: Heading = "h2",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.14em] uppercase",
            isLight ? "text-brand-200" : "text-brand-600",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <Heading
        id={id}
        className={cn(
          "text-3xl font-bold sm:text-4xl",
          Heading === "h3" && "text-2xl sm:text-3xl",
          isLight && "text-white",
        )}
      >
        {title}
      </Heading>

      {lead ? (
        <p className={cn("mt-4 text-lg/relaxed", isLight ? "text-brand-100" : "text-ink-500")}>
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
