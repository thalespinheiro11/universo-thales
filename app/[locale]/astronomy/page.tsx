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

export const generateMetadata = createLocalizedMetadata("/astronomy");

type AstronomyPageProps = { params: Promise<{ locale: string }> };

export default async function AstronomyPage({ params }: AstronomyPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const pages = getPagesContent(locale);
  const content = pages.astronomy;

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

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {content.whatLabel}
                </p>
                <h2 className="mt-6 font-display text-2xl font-semibold uppercase leading-tight text-foreground sm:text-3xl">
                  {content.whatTitle}
                </h2>
                <p className="mt-6 text-base leading-8 text-secondary">
                  {content.whatText}
                </p>
              </section>
            </Reveal>

            <Reveal delay={0.12}>
              <section className="h-full border border-line bg-surface/80 p-6 sm:p-8" aria-labelledby="related-projects-title">
                <h2 id="related-projects-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {content.relatedTitle}
                </h2>
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {content.related.map((project, index) => (
                    <li key={project} className="flex items-center gap-4 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                      <span className="font-mono text-[0.62rem] tracking-[0.16em] text-muted" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {project}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <section className="mt-16 flex flex-col gap-8 border-t border-line pt-12 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {content.siteLabel}
                </p>
                <h2 className="mt-6 font-display text-2xl font-semibold uppercase text-foreground sm:text-3xl">
                  {content.siteTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-secondary">
                  {content.siteText}
                </p>
              </div>
              <VintageButton href="https://astronomytech.com.br">
                {content.siteCta}
              </VintageButton>
            </section>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
