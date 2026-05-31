import Link from "next/link";

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
  const content = (
    <article className="vintage-card h-full rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      {category && (
        <p className="text-xs uppercase tracking-[0.28em] text-[#d8b46a]">
          {category}
        </p>
      )}

      <h3 className="mt-4 text-2xl font-black uppercase text-[#f4e7c5]">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[#f4e7c5]/60">
        {description}
      </p>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}