import { ArrowRight } from "lucide-react";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";

type VintageCardProps = {
  title: string;
  description: string;
  category?: string;
  href?: string;
};

export function VintageCard({
  title,
  description,
  category,
  href,
}: VintageCardProps) {
  return (
    <article className="group relative flex h-full flex-col border border-line bg-surface/80 p-6 transition-colors duration-300 focus-within:border-line-strong hover:border-line-strong">
      {category && (
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
          {category}
        </p>
      )}

      <h3 className="mt-6 font-display text-xl font-semibold uppercase leading-tight text-foreground">
        {href ? (
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>

      <div className="mt-5 h-px w-16 bg-line-strong" aria-hidden="true" />

      <p className="mt-5 flex-1 text-sm leading-7 text-secondary">
        {description}
      </p>

      {href && (
        <p className="mt-6 inline-flex items-center gap-2 border-t border-line pt-4 text-xs font-bold uppercase tracking-[0.16em] text-foreground" aria-hidden="true">
          Abrir arquivo
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </p>
      )}
    </article>
  );
}
