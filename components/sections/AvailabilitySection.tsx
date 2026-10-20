import { Download, Eye } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getSiteContent } from "@/content/site";
import { SectionEyebrow } from "../ui/SectionEyebrow";

type AvailabilitySectionProps = {
  content: ReturnType<typeof getSiteContent>["availability"];
};

const actionClassName =
  "flex min-h-12 flex-1 items-center justify-center gap-2 px-4 py-3 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-secondary transition-colors hover:bg-foreground hover:text-canvas";

// Os PDFs são atualizados com `npm run resumes`; os caminhos ficam em config/site.ts.
export function AvailabilitySection({ content }: AvailabilitySectionProps) {
  return (
    <section
      id="disponibilidade"
      aria-labelledby="availability-title"
      className="relative scroll-mt-24 border-t border-line py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-10">
        <div>
          <SectionEyebrow index="06">{content.eyebrow}</SectionEyebrow>
          <h2
            id="availability-title"
            className="mt-8 font-display text-2xl font-semibold uppercase leading-tight text-foreground sm:text-3xl"
          >
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-secondary">{content.description}</p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {content.resumes.map((resume) => {
            const href = siteConfig.documents.resumes[resume.lang];
            return (
              <li key={resume.lang} className="min-w-60 border border-line-strong">
                <p className="border-b border-line px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  {resume.label}
                </p>
                <div className="flex divide-x divide-line">
                  <a href={href} target="_blank" rel="noreferrer" hrefLang={resume.lang} className={actionClassName}>
                    <Eye size={14} strokeWidth={1.5} aria-hidden="true" />
                    {content.view}
                    <span className="sr-only">
                      {" "}{resume.label} ({content.newTab})
                    </span>
                  </a>
                  <a href={href} download={resume.fileName} hrefLang={resume.lang} className={actionClassName}>
                    <Download size={14} strokeWidth={1.5} aria-hidden="true" />
                    {content.download}
                    <span className="sr-only"> {resume.label}</span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
