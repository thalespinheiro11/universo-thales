import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { getSiteContent } from "@/content/site";

type HeroSectionProps = {
  content: ReturnType<typeof getSiteContent>["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="hero-starfield relative isolate min-h-[100svh] overflow-visible px-4 pb-12 pt-28 text-foreground sm:px-6 sm:pb-16 sm:pt-32 lg:px-10 lg:pb-20"
    >
      <div className="hero-scenery pointer-events-none absolute inset-x-0 top-0 z-0 h-[calc(100%+8rem)] overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0">
          <div className="hero-orbit absolute -right-[62vw] top-[16rem] h-[125vw] w-[125vw] sm:-right-[42vw] sm:top-[11rem] lg:-right-[17vw] lg:top-[3rem] lg:h-[74vw] lg:w-[74vw]" />
          <div className="hero-orbit absolute -right-[34vw] top-[19rem] h-[78vw] w-[110vw] opacity-55 sm:-right-[22vw] lg:-right-[10vw] lg:top-[10rem] lg:h-[46vw] lg:w-[68vw]" />
          <div className="absolute left-[8%] top-[31%] h-1 w-1 rounded-full bg-foreground shadow-[0_0_0_4px_rgb(243_241_234_/_0.06)]" />
          <div className="absolute left-[47%] top-[18%] h-1.5 w-1.5 rotate-45 border border-foreground" />
          <div className="absolute bottom-[18%] left-[42%] h-2 w-2 rounded-full border border-line-strong" />
        </div>

        <div className="absolute -right-[10vw] top-[7rem] w-[110vw] opacity-35 sm:right-0 sm:top-[6rem] sm:w-[92vw] sm:opacity-45 lg:right-0 lg:top-[5rem] lg:w-[72vw] lg:opacity-72 xl:right-0 xl:w-[68vw] xl:opacity-76">
          <Image
            src="/images/visual/moon-engraving.png?v=3-4-1"
            alt=""
            width={1278}
            height={1230}
            priority
            sizes="(min-width: 1280px) 68vw, (min-width: 1024px) 72vw, (min-width: 640px) 92vw, 110vw"
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-10rem)] max-w-[90rem] flex-col justify-between">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.75fr)]">
          <div className="max-w-4xl py-6 lg:py-12">
            <div className="mb-7 flex items-center gap-4 sm:mb-9">
              <span className="font-mono text-[0.62rem] tracking-[0.22em] text-muted" aria-hidden="true">
                01 // HERO
              </span>
              <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-secondary">
                {content.eyebrow}
              </p>
            </div>

            <h1
              id="hero-title"
              className="max-w-[12ch] font-display text-[clamp(3.2rem,10vw,8.4rem)] font-semibold uppercase leading-[0.82] tracking-[-0.075em] text-foreground"
            >
              {content.title}
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-secondary sm:mt-9 sm:text-base sm:leading-8 lg:max-w-lg">
              {content.description}
            </p>

            <div className="mt-8 sm:mt-10">
              <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted">
                {content.stackLabel}
              </p>
              <ul className="flex max-w-2xl flex-wrap gap-x-3 gap-y-2 text-xs font-medium text-secondary sm:text-sm">
                {content.stack.map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    <span>{item}</span>
                    {index < content.stack.length - 1 && (
                      <span className="text-line-strong" aria-hidden="true">·</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row">
              <LocalizedLink
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-foreground px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-canvas transition-colors hover:bg-secondary"
              >
                {content.projectsCta}
                <ArrowDownRight size={16} aria-hidden="true" />
              </LocalizedLink>

              <span
                aria-disabled="true"
                title={content.resumesUnavailable}
                className="inline-flex min-h-12 cursor-not-allowed items-center justify-center border border-line-strong px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted"
              >
                {content.resumesCta}
                <span className="sr-only"> — {content.resumesUnavailable}</span>
              </span>
            </div>
          </div>

          <div className="relative hidden min-h-[34rem] lg:block" aria-hidden="true">
            <div className="absolute right-[8%] top-[16%] font-mono text-[0.55rem] uppercase tracking-[0.18em] text-muted">
              <span className="block">RA 13h 26m 47s</span>
              <span className="mt-1 block">DEC −47° 28′ 46″</span>
            </div>
            <div className="absolute bottom-[15%] right-[5%] h-16 w-px bg-line" />
            <div className="hero-coordinate-rule absolute bottom-[15%] right-[5%] h-px w-36" />
          </div>
        </div>

        <div className="grid gap-5 pt-5 sm:grid-cols-[1fr_auto] sm:items-end lg:grid-cols-[1fr_auto_1fr]">
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted">
            {content.coordinates}
          </p>

          <div className="hidden items-center gap-5 lg:flex" aria-hidden="true">
            <span className="h-7 w-7 rounded-full border border-line-strong" />
            <span className="h-2 w-2 rotate-45 border border-line-strong" />
            <span className="h-7 w-7 rounded-full border border-line-strong before:mx-auto before:block before:h-full before:w-px before:bg-line" />
          </div>

          <aside
            className="flex max-w-sm items-start gap-3 border border-line-strong bg-surface/88 p-4 shadow-[0_16px_50px_rgb(0_0_0_/_0.42)] sm:min-w-72 lg:mb-2 lg:justify-self-end"
            aria-label={content.nyxRole}
          >
            <span
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line-strong font-mono text-[0.55rem] font-semibold tracking-[0.1em] text-foreground"
              aria-hidden="true"
            >
              NX
            </span>
            <span>
              <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-foreground">
                {content.nyxRole}
              </span>
              <span className="mt-1.5 block text-xs leading-5 text-secondary">
                {content.nyxStatus}
              </span>
            </span>
          </aside>
        </div>
      </div>
    </section>
  );
}
