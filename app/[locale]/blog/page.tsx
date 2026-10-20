import { notFound } from "next/navigation";
import { getBlogPosts, getBlogPostTranslation } from "@/content/blog";
import { getPagesContent } from "@/content/pages";
import { isLocale } from "@/lib/i18n";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageIntro, StatStrip } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VintageCard } from "@/components/ui/VintageCard";
import { createLocalizedMetadata } from "@/lib/seo";

type BlogPageProps = { params: Promise<{ locale: string }> };

export const generateMetadata = createLocalizedMetadata("/blog");

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const blogPosts = getBlogPosts(locale);
  const pages = getPagesContent(locale);
  const content = pages.blog;
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <section className="relative pb-24 pt-40">
        <Container>
          <Reveal>
            <PageIntro
              badge={content.badge}
              title={content.title}
              description={content.description}
            />
          </Reveal>

          <Reveal delay={0.15}>
            <StatStrip
              items={[
                { label: content.totalLabel, value: blogPosts.length },
                { label: content.formatLabel, value: content.formatValue },
                { label: content.archiveLabel, value: content.archiveValue },
              ]}
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.08}>
                <VintageCard
                  title={post.title}
                  category={`${post.category} • ${post.date}`}
                  description={post.excerpt}
                  href={`/blog/${post.slug}`}
                  actionLabel={pages.common.openFile}
                  lang={getBlogPostTranslation(post.slug, locale) ? undefined : "pt-BR"}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
