import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  as?: ElementType;
  tone?: "white" | "muted" | "dark";
  /** Podnosi kartę na hover — tylko dla kart, które są klikalne. */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

const tones = {
  white: "bg-white ring-ink-200/80",
  muted: "bg-ink-50 ring-ink-200/70",
  dark: "bg-ink-900 text-ink-300 ring-white/10",
} as const;

export function Card({
  as: Tag = "div",
  tone = "white",
  interactive = false,
  className,
  children,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-card shadow-soft ring-1 ring-inset",
        tones[tone],
        interactive &&
          "motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 hover:shadow-lift motion-safe:hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
