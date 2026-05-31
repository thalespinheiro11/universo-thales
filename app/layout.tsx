import type { Metadata } from "next";
import { Atmosphere } from "@/components/layout/Atmosphere";
import { SpaceBackground } from "@/components/ui/SpaceBackground";
import { siteData } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thalespinheiro.com.br"),

  title: {
    default: `${siteData.name} | Universo Pessoal Digital`,
    template: `%s | ${siteData.name}`,
  },

  description: siteData.description,

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
  locale: "pt_BR",
  url: "https://thalespinheiro.com.br",
  title: `${siteData.name} | Universo Pessoal Digital`,
  description: siteData.description,
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

  title: `${siteData.name} | Universo Pessoal Digital`,

  description: siteData.description,

  creator: siteData.handle,

  images: ["/images/og-image.jpg"],
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <SpaceBackground />

        <Atmosphere />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}