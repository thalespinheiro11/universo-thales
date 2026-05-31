type SectionBadgeProps = {
  children: React.ReactNode;
};

export function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <span className="cartoon-badge">
      {children}
    </span>
  );
}