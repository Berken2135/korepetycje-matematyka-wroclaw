import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold text-center " +
  "transition-[transform,background-color,border-color,box-shadow,color] duration-200 " +
  "motion-safe:active:translate-y-px disabled:pointer-events-none disabled:opacity-60 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-600 text-white shadow-glow hover:bg-brand-700 focus-visible:outline-brand-700",
  secondary:
    "bg-white text-ink-900 ring-1 ring-ink-200 shadow-soft hover:bg-ink-50 hover:ring-ink-300 focus-visible:outline-brand-600",
  ghost: "text-ink-700 hover:bg-ink-100 hover:text-ink-900 focus-visible:outline-brand-600",
  inverse: "bg-white text-brand-700 shadow-lift hover:bg-brand-50 focus-visible:outline-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base sm:text-[1.0625rem]",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Dokłada strzałkę po prawej — dla akcji prowadzących dalej. */
  withArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | "href"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Jeden komponent na wszystkie akcje.
 * `href` → renderuje link (`next/link` dla tras wewnętrznych, `<a>` dla
 * `mailto:`, `tel:` i adresów zewnętrznych). Bez `href` → `<button>`.
 */
export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  const content = (
    <>
      <span>{children}</span>
      {withArrow ? (
        <Icon
          name="arrow-right"
          size={18}
          className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover/btn:translate-x-0.5"
        />
      ) : null}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest;
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  const { href: _ignored, ...buttonProps } = rest;
  void _ignored;

  return (
    <button className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
