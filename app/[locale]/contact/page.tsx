import { notFound } from "next/navigation";
import { ContactGrid } from "@/components/contact/ContactGrid";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getPagesContent } from "@/content/pages";
import { isLocale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";

export const generateMetadata = createLocalizedMetadata("/contact");

type ContactPageProps = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const pages = getPagesContent(locale);
  const content = pages.contact;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <section className="relative pb-24 pt-40">
        <Container>
          <Reveal>
            <PageIntro
              back={{ href: "/", label: pages.common.backHome }}
              badge={content.badge}
              title={content.title}
              description={content.description}
            />
          </Reveal>

          <div className="mt-16">
            <Reveal delay={0.12}>
              <ContactGrid channels={content.channels} />
            </Reveal>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
