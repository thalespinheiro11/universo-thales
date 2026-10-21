import { ArrowRight, CodeXml, Cpu, Feather, PenTool } from "lucide-react";
import { LocalizedLink } from "@/components/i18n/LocalizedLink";
import { getSiteContent } from "@/content/site";
import { SectionEyebrow } from "../ui/SectionEyebrow";

type TrajectorySectionProps = {
  content: ReturnType<typeof getSiteContent>["journey"];
};

const stepIcons = [PenTool, Feather, Cpu, CodeXml];

export function TrajectorySection({ content }: TrajectorySectionProps) {
  return (
    <section
      id="trajetoria"
      aria-labelledby="trajectory-title"
      className="relative border-t border-line py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <SectionEyebrow index="04">{content.eyebrow}</SectionEyebrow>
        <h2
          id="trajectory-title"
          className="mt-8 max-w-2xl font-display text-3xl font-semibold uppercase leading-none text-foreground sm:text-4xl"
        >
          {content.title}
        </h2>

        <div className="mt-12">
          <ol className="grid gap-px border border-line bg-line md:grid-cols-2 xl:grid-cols-4">
            {content.steps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              return (
                <li key={step.title} className="relative flex flex-col gap-5 bg-canvas p-6 md:flex-row md:gap-4 xl:flex-col xl:gap-5">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line-strong text-foreground"
                    aria-hidden="true"
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[0.6rem] tracking-[0.2em] text-muted" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block font-display text-lg font-semibold uppercase tracking-[0.04em] text-foreground [overflow-wrap:anywhere]">
                      {step.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-secondary">
                      {step.description}
                    </span>
                  </span>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 flex flex-col gap-6 border-l border-line-strong pl-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <p className="max-w-xl text-base leading-7 text-secondary">{content.summary}</p>
            <LocalizedLink
              href="/about"
              className="inline-flex w-fit shrink-0 min-h-11 items-center gap-3 border-b border-foreground pb-2 text-xs font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-secondary hover:text-secondary"
            >
              {content.cta}
              <ArrowRight size={14} aria-hidden="true" />
            </LocalizedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
