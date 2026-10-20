import { ContactGrid } from "@/components/contact/ContactGrid";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { createLocalizedMetadata } from "@/lib/seo";

export const generateMetadata = createLocalizedMetadata("/contact");

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Header />

      <section className="relative pb-24 pt-40">
        <Container>
          <Reveal>
            <PageIntro
              back={{ href: "/", label: "Voltar para início" }}
              badge="Canal de transmissão"
              title="Vamos abrir um canal direto de contato."
              description="Aqui ficam os principais caminhos para acompanhar minhas lives, projetos, bastidores da Astronomy ou entrar em contato para ideias, conversas e oportunidades."
            />
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
