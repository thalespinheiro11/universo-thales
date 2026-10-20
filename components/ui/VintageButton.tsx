import { LocalizedLink as Link } from "@/components/i18n/LocalizedLink";

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
      ? "bg-foreground text-canvas hover:bg-secondary"
      : "border border-line-strong text-foreground hover:bg-foreground hover:text-canvas";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 w-full items-center justify-center gap-3 px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.16em] transition-colors sm:w-auto ${variantClasses}`}
    >
      {children}
    </Link>
  );
}
