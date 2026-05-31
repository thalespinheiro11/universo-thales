type SectionBadgeProps = {
  children: React.ReactNode;
};

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-[#f4e7c5]/30 bg-[#f4e7c5]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#d8b46a]">
      {children}
    </span>
  );
}