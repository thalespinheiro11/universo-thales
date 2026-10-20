import { FileText } from "lucide-react";
import { getSiteContent } from "@/content/site";
import { SectionEyebrow } from "../ui/SectionEyebrow";

type AvailabilitySectionProps = {
  content: ReturnType<typeof getSiteContent>["availability"];
};

// Os arquivos oficiais ainda não existem; quando forem adicionados, os itens viram links.
export function AvailabilitySection({ content }: AvailabilitySectionProps) {
  return (
    <section
      id="disponibilidade"
      aria-labelledby="availability-title"
      className="relative border-t border-line py-16 sm:py-20"
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
          {content.resumes.map((resume) => (
            <li key={resume.lang}>
              <span
                aria-disabled="true"
                className="flex min-h-14 min-w-56 cursor-not-allowed items-center justify-between gap-6 border border-line px-5 py-3"
              >
                <span>
                  <span lang={resume.lang} className="block text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    {resume.label}
                  </span>
                  <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted">
                    {content.resumesUnavailable}
                  </span>
                </span>
                <FileText size={16} strokeWidth={1.5} className="text-muted" aria-hidden="true" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
