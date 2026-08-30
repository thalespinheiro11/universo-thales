"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";
import { getLocaleFromPathname, localizedPath } from "@/lib/i18n";

type LocalizedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

function shouldLocalize(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const localizedHref =
    typeof href === "string" && shouldLocalize(href)
      ? localizedPath(locale, href)
      : href;

  return <Link href={localizedHref} {...props} />;
}
