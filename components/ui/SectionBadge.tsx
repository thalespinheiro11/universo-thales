type SectionBadgeProps = {
  children: React.ReactNode;
};

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
      <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
      {children}
    </span>
  );
}
