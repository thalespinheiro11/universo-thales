import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VintageButton } from "@/components/ui/VintageButton";
import { getPagesContent } from "@/content/pages";
import { isLocale } from "@/lib/i18n";
import { createLocalizedMetadata } from "@/lib/seo";

export const generateMetadata = createLocalizedMetadata("/about");

type AboutPageProps = { params: Promise<{ locale: string }> };

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const pages = getPagesContent(locale);
  const content = pages.about;

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

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8" aria-labelledby="about-who-title">
                <h2 id="about-who-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {content.whoTitle}
                </h2>

                <div className="mt-6 space-y-6 text-base leading-8 text-secondary">
                  {content.whoParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.12}>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {content.buildingLabel}
                </p>

                <h2 className="mt-6 font-display text-2xl font-semibold uppercase leading-tight text-foreground sm:text-3xl">
                  {content.buildingTitle}
                </h2>

                <p className="mt-6 text-base leading-8 text-secondary">
                  {content.buildingText}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <VintageButton href="/projects">
                    {content.projectsCta}
                  </VintageButton>

                  <VintageButton href="/blog" variant="secondary">
                    {content.blogCta}
                  </VintageButton>
                </div>
              </section>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8" aria-labelledby="about-values-title">
                <h2 id="about-values-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {content.valuesTitle}
                </h2>

                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {content.values.map((value, index) => (
                    <li
                      key={value}
                      className="flex items-center gap-4 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground"
                    >
                      <span className="font-mono text-[0.62rem] tracking-[0.16em] text-muted" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {value}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.12}>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8" aria-labelledby="about-interests-title">
                <h2 id="about-interests-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {content.interestsTitle}
                </h2>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {content.interests.map((interest) => (
                    <li
                      key={interest}
                      className="border border-line px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-secondary"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
