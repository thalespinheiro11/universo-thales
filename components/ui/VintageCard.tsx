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
    <article className="cartoon-ink group h-full overflow-hidden rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-2">
      <div className="relative z-10">
        {category && (
          <p className="cartoon-badge">
            {category}
          </p>
        )}

        <h3 className="cartoon-title mt-6 text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-[#f4e7c5]">
          {title}
        </h3>

        <div className="vintage-rule mt-5" />

        <p className="mt-5 text-sm leading-7 text-[#f4e7c5]/65">
          {description}
        </p>

        {href && (
          <p className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-[#d8b46a]">
            Abrir arquivo →
          </p>
        )}
      </div>
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