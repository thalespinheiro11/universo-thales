import { CodeXml, Compass, Target } from "lucide-react";
import { getSiteContent } from "@/content/site";
import { SectionEyebrow } from "../ui/SectionEyebrow";

type PositioningSectionProps = {
  content: ReturnType<typeof getSiteContent>["positioning"];
};

const pillarIcons = [Compass, CodeXml, Target];

export function PositioningSection({ content }: PositioningSectionProps) {
  return (
    <section
      id="posicionamento"
      aria-labelledby="positioning-title"
      className="relative border-y border-line bg-canvas"
    >
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-14 lg:px-10 lg:py-16">
        <div className="hidden h-24 w-24 place-items-center rounded-full border border-line lg:grid" aria-hidden="true">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-line-strong">
            <span className="h-2 w-2 rotate-45 border border-foreground" />
          </span>
        </div>

        <div>
          <SectionEyebrow index="02">
            <span id="positioning-title">{content.eyebrow}</span>
          </SectionEyebrow>
          <p className="mt-6 max-w-xl text-lg leading-8 text-foreground sm:text-xl sm:leading-9">
            {content.statement}
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-4 sm:gap-8">
          {content.pillars.map((pillar, index) => {
            const Icon = pillarIcons[index % pillarIcons.length];
            return (
              <li key={pillar.title} className="flex flex-col items-center gap-3 text-center">
                <span
                  className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-foreground"
                  aria-hidden="true"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <span className="max-w-[9rem] font-mono text-[0.62rem] uppercase leading-4 tracking-[0.16em] text-secondary">
                  {pillar.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
