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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      <HeroSection />

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