import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/content/navigation";
import { formatPriceWithDuration, primaryPricingPlan } from "@/content/pricing";
import { site } from "@/content/site";
import { getDictionary, t } from "@/i18n";
import { cn } from "@/lib/utils";

const dict = getDictionary();

const linkClass =
  "rounded text-sm text-ink-400 transition-colors hover:text-white focus-visible:text-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-300">
      <Container size="wide">
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-sm/relaxed text-ink-400">{dict.footer.tagline}</p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-inset ring-white/10">
              <Icon name="monitor" size={14} />
              {formatPriceWithDuration(primaryPricingPlan)}
            </p>

            {site.socials.length > 0 ? (
              <ul className="mt-6 flex gap-4">
                {site.socials.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      className={linkClass}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav aria-labelledby="footer-nav-heading">
            <h2
              id="footer-nav-heading"
              className="text-xs font-semibold tracking-[0.14em] text-white uppercase"
            >
              {dict.footer.navHeading}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.14em] text-white uppercase">
              {dict.footer.contactHeading}
            </h2>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className={cn(linkClass, "inline-flex items-center gap-2")}
                >
                  <Icon name="mail" size={16} className="text-ink-500" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className={cn(linkClass, "inline-flex items-center gap-2")}
                >
                  <Icon name="phone" size={16} className="text-ink-500" />
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-400">
                <Icon name="map-pin" size={16} className="mt-0.5 shrink-0 text-ink-500" />
                <span>
                  {site.location.city}, {site.location.region}
                  <br />
                  <span className="text-ink-500">{t(site.contact.availability)}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtNote}</p>
        </div>
      </Container>
    </footer>
  );
}
