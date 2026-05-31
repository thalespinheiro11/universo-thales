import Link from "next/link";
import { ContactGrid } from "@/components/contact/ContactGrid";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Constellation } from "@/components/ui/Constellation";
import { Container } from "@/components/ui/Container";
import { OrbitalDecoration } from "@/components/ui/OrbitalDecoration";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <OrbitalDecoration className="right-[-120px] top-40 hidden xl:block" />
      <Constellation className="left-10 top-44 hidden xl:block" />

      <section className="relative px-6 pb-24 pt-40">
        <Container>
          <Reveal>
            <Link
              href="/"
              className="text-xs font-black uppercase tracking-[0.25em] text-[#d8b46a] transition hover:text-[#f4e7c5]"
            >
              ← Voltar para início
            </Link>

            <div className="mt-10">
              <SectionBadge>Canal de transmissão</SectionBadge>

              <h1 className="mt-8 max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.06em] text-[#f4e7c5] md:text-7xl">
                Vamos abrir um canal direto de contato.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#f4e7c5]/70">
                Aqui ficam os principais caminhos para acompanhar minhas lives,
                projetos, bastidores da Astronomy ou entrar em contato para
                ideias, conversas e oportunidades.
              </p>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal delay={0.12}>
              <ContactGrid />
            </Reveal>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}