type SectionEyebrowProps = {
  index?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionEyebrow({ index, children, className = "" }: SectionEyebrowProps) {
  return (
    <div
      className={`flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted ${className}`}
    >
      {index && (
        <span className="font-mono" aria-hidden="true">
          {`${index} //`}
        </span>
      )}
      <span className="h-px w-12 bg-line-strong" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
