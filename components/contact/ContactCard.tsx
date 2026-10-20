import { ArrowUpRight } from "lucide-react";

type ContactCardProps = {
  label: string;
  value: string;
  href: string;
  description: string;
};

export function ContactCard({
  label,
  value,
  href,
  description,
}: ContactCardProps) {
  const external = !href.startsWith("mailto:");

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex h-full flex-col border border-line bg-surface/80 p-6 transition-colors duration-300 hover:border-line-strong sm:p-8"
    >
      <span className="flex items-center justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
        {label}
        <ArrowUpRight size={16} className="transition-colors group-hover:text-foreground" aria-hidden="true" />
      </span>

      <span className="mt-6 font-display text-2xl font-semibold uppercase text-foreground">
        {value}
      </span>

      <span className="mt-4 text-sm leading-7 text-secondary">
        {description}
      </span>
    </a>
  );
}
