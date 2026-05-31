import { blogPosts } from "@/data/blog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Constellation } from "@/components/ui/Constellation";
import { Container } from "@/components/ui/Container";
import { OrbitalDecoration } from "@/components/ui/OrbitalDecoration";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { VintageCard } from "@/components/ui/VintageCard";

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <OrbitalDecoration className="right-[-120px] top-40 hidden xl:block" />
      <Constellation className="left-10 top-44 hidden xl:block" />

      <section className="relative px-6 pb-24 pt-40">
        <Container>
          <Reveal>
            <SectionBadge>Diário de bordo</SectionBadge>

            <h1 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.06em] text-[#f4e7c5] md:text-7xl">
              Registros pessoais de tecnologia, ciência e criação.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#f4e7c5]/70">
              Um espaço para escrever sobre desenvolvimento, astronomia, física,
              produtividade, livros, bastidores da Astronomy, lives e construção
              da minha jornada.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-4 rounded-[2rem] border border-[#f4e7c5]/10 bg-[#f4e7c5]/5 p-6 md:grid-cols-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#9f875f]">
                  Registros
                </p>
                <p className="mt-2 text-3xl font-black text-[#f4e7c5]">
                  {blogPosts.length}
                </p>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#9f875f]">
                  Formato
                </p>
                <p className="mt-2 text-3xl font-black text-[#f4e7c5]">
                  Diário
                </p>
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#9f875f]">
                  Arquivo
                </p>
                <p className="mt-2 text-3xl font-black text-[#f4e7c5]">
                  Pessoal
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.08}>
                <VintageCard
                  title={post.title}
                  category={`${post.category} • ${post.date}`}
                  description={post.excerpt}
                  href={`/blog/${post.slug}`}
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