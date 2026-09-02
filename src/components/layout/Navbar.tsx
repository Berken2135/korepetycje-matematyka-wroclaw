"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/content/navigation";
import { getDictionary, t } from "@/i18n";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const dict = getDictionary();

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Zamykamy menu po zmianie trasy - inaczej zostaje otwarte nad nowa strona.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-soft ring-1 ring-ink-900/5" : "ring-1 ring-transparent",
      )}
    >
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label={dict.common.menuLabel} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                        active
                          ? "text-brand-700"
                          : "text-ink-600 hover:bg-ink-100 hover:text-ink-900",
                      )}
                    >
                      {t(item.label)}
                      {active ? (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-600"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href={routes.booking} size="sm" className="hidden sm:inline-flex">
              {dict.common.ctaPrimary}
            </Button>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? dict.common.closeMenu : dict.common.openMenu}
              className="grid size-11 place-items-center rounded-full text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </Container>

      {/* Panel mobilny. `hidden` na desktopie, żeby nie dublować nawigacji dla
          czytników ekranu. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-ink-200/70 bg-white lg:hidden"
      >
        <Container size="wide">
          <nav aria-label={dict.common.menuLabel} className="py-4">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-brand-50 text-brand-700"
                          : "text-ink-700 hover:bg-ink-100 hover:text-ink-900",
                      )}
                    >
                      {t(item.label)}
                      <Icon name="chevron-right" size={18} className="text-ink-400" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 border-t border-ink-200/70 pt-4">
              <Button href={routes.booking} size="lg" fullWidth withArrow>
                {dict.common.ctaPrimary}
              </Button>
              <p className="mt-3 text-center text-xs text-ink-500">
                {dict.common.responseTime} · {dict.common.noCommitment}
              </p>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
