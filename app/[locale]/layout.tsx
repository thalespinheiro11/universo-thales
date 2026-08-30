import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Atmosphere } from "@/components/layout/Atmosphere";
import { FloatingContact } from "@/components/ui/FloatingContact";
import { SpaceBackground } from "@/components/ui/SpaceBackground";
import { siteConfig } from "@/config/site";
import { getSiteContent } from "@/content/site";
import { siteData } from "@/data/site";
import { contentLocales, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const content = getSiteContent(locale);
  return {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteData.name} | ${content.metadata.title}`,
    template: `%s | ${siteData.name}`,
  },

  description: content.metadata.description,

  keywords: [
    "Thales Pinheiro",
    "Desenvolvedor",
    "Programação",
    "Astronomia",
    "Física",
    "Technology",
    "Next.js",
    "Portfolio",
    "NoxCare",
    "Astronomy",
    "Twitch",
    "Criador de conteúdo",
    "Desenvolvimento de software",
  ],

  authors: [
    {
      name: siteData.name,
    },
  ],

  creator: siteData.name,

  openGraph: {
    type: "website",
    locale: locale === "pt-br" ? "pt_BR" : "en",
    title: `${siteData.name} | ${content.metadata.title}`,
    description: content.metadata.description,
    siteName: "Universo Thales",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thales Pinheiro - Universo Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteData.name} | ${content.metadata.title}`,
    description: content.metadata.description,
    creator: siteData.handle,
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={contentLocales[locale]} data-scroll-behavior="smooth">
      <body>
        <SpaceBackground />

        <Atmosphere />

        <div className="relative z-10">{children}</div>

        <FloatingContact />
      </body>
    </html>
  );
}
