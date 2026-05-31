import Link from "next/link";

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
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="vintage-card hand-drawn-border block rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#d8b46a]/40"
    >
      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
        {label}
      </p>

      <h3 className="mt-4 text-2xl font-black uppercase text-[#f4e7c5]">
        {value}
      </h3>

      <p className="mt-4 text-sm leading-7 text-[#f4e7c5]/60">
        {description}
      </p>
    </Link>
  );
}