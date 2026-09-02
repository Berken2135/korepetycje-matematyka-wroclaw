import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { cn } from "@/lib/utils";

type BadgeTone = "brand" | "neutral" | "accent" | "success" | "outline" | "inverse";

const tones: Record<BadgeTone, string> = {
  brand: "bg-brand-50 text-brand-700 ring-brand-100",
  neutral: "bg-ink-100 text-ink-700 ring-ink-200",
  accent: "bg-accent-100 text-accent-600 ring-accent-200",
  success: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  outline: "bg-white/70 text-ink-700 ring-ink-200",
  inverse: "bg-white/10 text-white ring-white/20",
};

type BadgeProps = {
  tone?: BadgeTone;
  icon?: IconName;
  className?: string;
  children: ReactNode;
};

export function Badge({ tone = "brand", icon, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
    </span>
  );
}
