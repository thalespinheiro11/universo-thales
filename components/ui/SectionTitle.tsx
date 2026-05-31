import { SectionBadge } from "./SectionBadge";

type SectionTitleProps = {
  badge: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <SectionBadge>{badge}</SectionBadge>

      <h2 className="mt-6 text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-[#f4e7c5] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-[#f4e7c5]/65 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}