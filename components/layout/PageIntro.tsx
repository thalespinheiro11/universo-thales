import { ArrowLeft } from "lucide-react";
import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";
import { SectionBadge } from "../ui/SectionBadge";

type PageIntroProps = {
  badge: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  back?: { href: string; label: string };
  children?: React.ReactNode;
};

export function PageIntro({ badge, title, description, back, children }: PageIntroProps) {
  return (
    <header className="max-w-5xl">
      {back && (
        <Link
          href={back.href}
          className="mb-10 inline-flex min-h-11 items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          {back.label}
        </Link>
      )}

      <div>
        <SectionBadge>{badge}</SectionBadge>
      </div>

      <h1 className="mt-8 font-display text-[clamp(2.4rem,6vw,4.75rem)] font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-foreground">
        {title}
      </h1>

      {description && (
        <p className="mt-8 max-w-3xl text-base leading-8 text-secondary sm:text-lg">
          {description}
        </p>
      )}

      {children}
    </header>
  );
}

type StatStripProps = {
  items: { label: string; value: React.ReactNode }[];
};

export function StatStrip({ items }: StatStripProps) {
  return (
    <dl className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="bg-canvas p-6">
          <dt className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            {item.label}
          </dt>
          <dd className="mt-3 font-display text-2xl font-semibold uppercase text-foreground">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
