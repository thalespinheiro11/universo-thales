import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Constellation } from "@/components/ui/Constellation";
import { Container } from "@/components/ui/Container";
import { OrbitalDecoration } from "@/components/ui/OrbitalDecoration";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { VintageButton } from "@/components/ui/VintageButton";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const postNumber = blogPosts.findIndex((item) => item.slug === slug) + 1;

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <OrbitalDecoration className="right-[-120px] top-40 hidden xl:block" />
      <Constellation className="left-10 top-44 hidden xl:block" />

      <article className="relative px-6 pb-24 pt-40">
        <Container>
          <Reveal>
            <Link
              href="/blog"
              className="text-xs font-black uppercase tracking-[0.25em] text-[#d8b46a] transition hover:text-[#f4e7c5]"
            >
              ← Voltar para o diário
            </Link>

            <div className="mt-10 max-w-5xl">
              <SectionBadge>
                Registro {String(postNumber).padStart(3, "0")}
              </SectionBadge>

              <h1 className="mt-8 text-5xl font-black uppercase leading-none tracking-[-0.06em] text-[#f4e7c5] md:text-7xl">
                {post.title}
              </h1>

              <div className="mt-8 flex flex-wrap gap-4 text-xs font-black uppercase tracking-[0.25em] text-[#9f875f]">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.75fr_0.25fr] lg:items-start">
            <Reveal delay={0.12}>
              <div className="vintage-card hand-drawn-border relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
                <div className="absolute inset-0 opacity-[0.04]">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                      backgroundSize: "100% 34px",
                    }}
                  />
                </div>

                <div className="relative z-10 space-y-8">
                  {post.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-xl leading-10 text-[#f4e7c5]/75"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <aside className="vintage-card sticky top-32 rounded-[2rem] p-6">
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                  Arquivo
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                      Categoria
                    </p>
                    <p className="mt-2 text-lg font-black uppercase text-[#f4e7c5]">
                      {post.category}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                      Data
                    </p>
                    <p className="mt-2 text-lg font-black uppercase text-[#f4e7c5]">
                      {post.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[#9f875f]">
                      Leitura
                    </p>
                    <p className="mt-2 text-lg font-black uppercase text-[#f4e7c5]">
                      {post.readTime}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
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