"use client";

import { blogPosts } from "@/data/blog";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { VintageButton } from "../ui/VintageButton";

export function BlogPreviewSection() {
  return (
    <section id="blog" className="relative overflow-hidden py-28">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b46a]/5 blur-3xl" />

      <Container>
        <Reveal>
          <SectionTitle
            badge="Diário de bordo"
            title="Registros de uma jornada entre tecnologia e exploração."
            description="Um espaço pessoal para escrever sobre desenvolvimento, astronomia, física, projetos, bastidores da Astronomy, livros e ideias."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 xl:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.12}>
              <article className="vintage-card relative overflow-hidden rounded-[2rem] p-6">
                <div className="absolute inset-0 opacity-[0.05]">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                      backgroundSize: "100% 28px",
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d8b46a]">
                      {post.category}
                    </p>

                    <span className="text-xs uppercase tracking-[0.2em] text-[#9f875f]">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="mt-6 text-3xl font-black uppercase leading-tight text-[#f4e7c5]">
                    {post.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-[#f4e7c5]/65">
                    {post.excerpt}
                  </p>

                  <div className="mt-10">
                    <VintageButton href={`/blog/${post.slug}`}>
                      Abrir registro
                    </VintageButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}