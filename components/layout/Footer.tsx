import { personalLinks } from "@/lib/constants";
import { Container } from "../ui/Container";
import { VintageButton } from "../ui/VintageButton";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#f4e7c5]/10 py-16">
      <Container>
        <div className="vintage-card hand-drawn-border rounded-[2.5rem] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d8b46a]">
                Fim da transmissão
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-black uppercase leading-tight tracking-[-0.04em] text-[#f4e7c5] md:text-5xl">
                Um universo pessoal em construção constante.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#f4e7c5]/65">
                {personalLinks.tagline} Este espaço cresce junto com meus
                projetos, estudos, lives, ideias e com a Astronomy.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <VintageButton href="/projects">
                Projetos
              </VintageButton>

              <VintageButton href="/blog" variant="secondary">
                Diário
              </VintageButton>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-[#f4e7c5]/10 pt-8 text-sm text-[#f4e7c5]/50 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 {personalLinks.name}. Todos os registros continuam em órbita.
            </p>

            <p className="uppercase tracking-[0.25em] text-[#d8b46a]">
              Tecnologia • Astronomia • Imaginação
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}