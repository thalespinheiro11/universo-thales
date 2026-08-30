import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogPreviewSection } from "@/components/sections/BlogPreviewSection";
import { FeaturedProjectSection } from "@/components/sections/FeaturedProjectSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { LiveSection } from "@/components/sections/LiveSection";
import { MediaSection } from "@/components/sections/MediaSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { SpaceLabSection } from "@/components/sections/SpaceLabSection";
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

      <LiveSection />

      <FeaturedProjectSection />

      <ProjectsSection />

      <AboutSection />

      <JourneySection />

      <SpaceLabSection />

      <MediaSection />

      <BlogPreviewSection />

      <SocialSection />

      <Footer />
    </main>
  );
}
