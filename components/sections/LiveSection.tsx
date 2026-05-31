import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { VintageButton } from "../ui/VintageButton";

const liveFeatures = [
  "Desenvolvimento ao vivo",
  "Projetos da Astronomy",
  "Estudos de tecnologia",
  "Astronomia e física",
];

export function LiveSection() {
  return (
    <section id="ao-vivo" className="relative overflow-hidden py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionTitle
              badge="Área ao vivo"
              title="Transmissões, bastidores e construção em público."
              description="Um espaço para acompanhar lives de desenvolvimento, criação de projetos, estudos, tecnologia, astronomia e bastidores da minha jornada."
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div className="vintage-card hand-drawn-border relative overflow-hidden rounded-[2.5rem] p-6 md:p-8">
              <div className="absolute right-8 top-8 flex items-center gap-2 rounded-full border border-[#f4e7c5]/25 bg-[#080706]/70 px-4 py-2">
                <span className="h-3 w-3 animate-pulse rounded-full bg-[#d8b46a]" />
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#f4e7c5]">
                  Offline
                </span>
              </div>

              <div className="rounded-[2rem] border border-[#f4e7c5]/15 bg-[#080706]/50 p-6 pt-20">
                <div className="aspect-video rounded-[1.5rem] border-2 border-[#f4e7c5]/30 bg-[radial-gradient(circle_at_center,rgba(216,180,106,0.18),rgba(8,7,6,0.95))] p-4">
                  <div className="flex h-full items-center justify-center rounded-[1rem] border border-dashed border-[#f4e7c5]/25 text-center">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d8b46a]">
                        Próxima transmissão
                      </p>

                      <h3 className="mt-4 text-3xl font-black uppercase text-[#f4e7c5] md:text-4xl">
                        Estúdio orbital
                      </h3>

                      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#f4e7c5]/60">
                        Em breve, este painel pode mostrar status da Twitch,
                        último vídeo, agenda de lives ou uma chamada para seguir
                        o canal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {liveFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-[#f4e7c5]/10 bg-[#f4e7c5]/5 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#f4e7c5]/70"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <VintageButton href="#blog">Ver bastidores</VintageButton>

                  <VintageButton href="#projetos" variant="secondary">
                    Projetos em live
                  </VintageButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}