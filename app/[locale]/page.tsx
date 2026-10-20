import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AvailabilitySection } from "@/components/sections/AvailabilitySection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { RecordsSection } from "@/components/sections/RecordsSection";
import { TrajectorySection } from "@/components/sections/TrajectorySection";
import { createLocalizedMetadata } from "@/lib/seo";
import { getSiteContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export const generateMetadata = createLocalizedMetadata("/");

type HomeProps = { params: Promise<{ locale: string }> };

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getSiteContent(locale);

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      <HeroSection content={content.hero} />

      <PositioningSection content={content.positioning} />

      <FeaturedProjectSection locale={locale} />

      <TrajectorySection content={content.journey} />

      <RecordsSection locale={locale} content={content.records} />

      <AvailabilitySection content={content.availability} />

      <Footer />
    </main>
  );
}
