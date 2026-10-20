import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import {
  getBlogPostLocales,
  getBlogPosts,
  getBlogPostTranslation,
} from "@/content/blog";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { localizedLanguages, localizedUrl } from "@/lib/seo";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VintageButton } from "@/components/ui/VintageButton";

type BlogPostPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const localizedPosts = getBlogPosts(locale);
  const post = localizedPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const postNumber = localizedPosts.findIndex((item) => item.slug === slug) + 1;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <article className="relative pb-24 pt-40">
        <Container>
          <Reveal>
            <PageIntro
              back={{ href: "/blog", label: "Voltar para o diário" }}
              badge={`Registro ${String(postNumber).padStart(3, "0")}`}
              title={post.title}
            >
              <p className="mt-8 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                <span>{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </p>
            </PageIntro>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start xl:gap-16">
            <Reveal delay={0.12}>
              <div className="max-w-3xl space-y-7 border-t border-line pt-10">
                {post.content.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-9 text-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <aside className="border border-line bg-surface/80 p-6 lg:sticky lg:top-32" aria-labelledby="post-file-title">
                <p id="post-file-title" className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  Arquivo
                </p>

                <dl className="mt-6 divide-y divide-line border-y border-line">
                  {[
                    { label: "Categoria", value: post.category },
                    { label: "Data", value: post.date },
                    { label: "Leitura", value: post.readTime },
                  ].map((item) => (
                    <div key={item.label} className="py-4">
                      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6">
                  <VintageButton href="/blog" variant="secondary">
                    Ver registros
                  </VintageButton>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </article>

      <Footer />
    </main>
  );
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const post = getBlogPosts(locale).find((item) => item.slug === slug);
  if (!post) return {};

  const hasTranslation = Boolean(getBlogPostTranslation(slug, locale));
  const canonicalLocale = hasTranslation ? locale : defaultLocale;
  const path = `/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: localizedUrl(canonicalLocale, path),
      languages: localizedLanguages(path, getBlogPostLocales(slug)),
    },
    robots: { index: hasTranslation, follow: true },
  };
}
