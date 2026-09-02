import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { availableLessonFormats } from "@/content/formats";
import { formatPrice, primaryPricingPlan } from "@/content/pricing";
import { site } from "@/content/site";
import { primaryTutor } from "@/content/tutors";
import { getDictionary, t } from "@/i18n";
import { homeSections, routes } from "@/lib/routes";

const dict = getDictionary();

/** Plakietki zaufania — cena i forma lekcji widoczne bez przewijania. */
const trustChips = [
  {
    icon: "wallet" as const,
    label: `${formatPrice(primaryPricingPlan.price)} / ${primaryPricingPlan.durationMinutes} min`,
  },
  {
    icon: availableLessonFormats[0]?.icon ?? ("monitor" as const),
    label: "Lekcje online 1:1",
  },
  { icon: "map-pin" as const, label: `${site.location.city} i cała Polska` },
  { icon: "shield" as const, label: "Bez umowy i abonamentu" },
];

export function Hero() {
  const headline = dict.home.hero.headline;
  const accent = dict.home.hero.headlineAccent;
  const [beforeAccent] = headline.split(accent);

  return (
    <section className="relative overflow-hidden bg-white" aria-labelledby="hero-heading">
      {/* Dekoracje tła — czysty CSS, żadnych obrazków do pobrania. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute top-24 -right-24 size-80 rounded-full bg-accent-100/60 blur-3xl" />
      </div>

      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
                <span className="relative grid size-2 place-items-center">
                  <span className="absolute size-2 rounded-full bg-brand-500/40 motion-safe:animate-ping" />
                  <span className="size-1.5 rounded-full bg-brand-600" />
                </span>
                {dict.home.hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1
                id="hero-heading"
                className="mt-6 text-4xl font-bold sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
              >
                {beforeAccent}
                <span className="text-highlight">{accent}</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg/relaxed text-ink-600">{dict.home.hero.lead}</p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={routes.booking} size="lg" withArrow>
                  {dict.common.ctaPrimary}
                </Button>
                <Button href={`#${homeSections.pricing}`} size="lg" variant="secondary">
                  {dict.common.ctaSecondary}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2.5">
                {trustChips.map((chip) => (
                  <li
                    key={chip.label}
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink-600"
                  >
                    <Icon name={chip.icon} size={17} className="text-brand-600" />
                    {chip.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Panel z konkretem: co dokładnie dostajesz za 50 zł. */}
          <Reveal delay={200} className="lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-panel bg-linear-to-br from-brand-200/50 via-white/0 to-accent-200/40 blur-xl"
              />

              <div className="relative rounded-panel bg-white p-6 shadow-lift ring-1 ring-ink-900/5 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                      {t(primaryPricingPlan.name)}
                    </p>
                    <p className="mt-2 flex items-baseline gap-1.5">
                      <span className="font-display text-5xl font-bold text-ink-900">
                        {primaryPricingPlan.price}
                      </span>
                      <span className="text-lg font-semibold text-ink-500">zł</span>
                    </p>
                    <p className="mt-1 text-sm text-ink-500">
                      za {primaryPricingPlan.durationMinutes} minut lekcji
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-100">
                    <Icon name="monitor" size={14} />
                    Online
                  </span>
                </div>

                <ul className="mt-7 flex flex-col gap-3">
                  {t(primaryPricingPlan.includes)
                    .slice(0, 4)
                    .map((item) => (
                      <li key={item} className="flex gap-3 text-sm/relaxed text-ink-600">
                        <Icon
                          name="check"
                          size={18}
                          className="mt-0.5 shrink-0 text-emerald-600"
                          strokeWidth={2.2}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                </ul>

                <div className="mt-7 border-t border-ink-200/80 pt-5">
                  <Button href={routes.booking} fullWidth size="md">
                    {dict.common.ctaPrimary}
                  </Button>
                  <p className="mt-3 text-center text-xs text-ink-500">
                    {dict.common.responseTime} · {dict.common.noCommitment}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-ink-500">
                Lekcje prowadzi{" "}
                <Link
                  href={routes.tutor(primaryTutor.slug)}
                  className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-500"
                >
                  {primaryTutor.name}
                </Link>
                , {t(primaryTutor.headline).toLowerCase()}
              </p>
            </div>
          </Reveal>
        </div>

        <p className="border-t border-ink-200/70 py-6 text-center text-sm text-ink-500">
          {dict.home.hero.socialProof}
        </p>
      </Container>
    </section>
  );
}
