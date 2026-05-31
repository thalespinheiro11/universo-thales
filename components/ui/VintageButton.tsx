import Link from "next/link";

type VintageButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function VintageButton({
  href,
  children,
  variant = "primary",
}: VintageButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-[#f4e7c5] text-[#080706] hover:bg-[#d8b46a]"
      : "bg-transparent text-[#f4e7c5] hover:bg-[#f4e7c5] hover:text-[#080706]";

  return (
    <Link
      href={href}
      className={`inline-flex w-full items-center justify-center rounded-full border-2 border-[#f4e7c5] px-5 py-3 text-center text-xs font-black uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgba(216,180,106,0.45)] sm:w-auto sm:px-6 sm:text-sm sm:tracking-[0.22em] ${variantClasses}`}
    >
      {children}
    </Link>
  );
}