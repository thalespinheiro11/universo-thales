import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { VintageButton } from "../ui/VintageButton";

const mediaItems = [
  {
    title: "Lives na Twitch",
    type: "Twitch",
    description:
      "Desenvolvimento ao vivo, construção de projetos, estudos e bastidores criativos em tempo real.",
  },
  {
    title: "Astronomy",
    type: "Instagram",
    description:
      "A evolução da Astronomy como laboratório criativo de tecnologia, design e experiências digitais.",
  },
  {
    title: "Jornada pessoal",
    type: "Instagram",
    description:
      "Reflexões, rotina criativa, projetos, tecnologia, astronomia e construção da minha jornada.",
  },
];

export function MediaSection() {
  return (
    <section id="midia" className="relative overflow-hidden py-28">
      <Container>
        <Reveal>
          <SectionTitle
            badge="Transmissões & sinais"
            title="Conteúdo, bastidores e construção em público."
            description="Um espaço preparado para acompanhar lives, projetos, bastidores da Astronomy e registros da jornada criativa."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {mediaItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.12}>
              <article className="vintage-card hand-drawn-border group relative overflow-hidden rounded-[2rem] p-5 transition-all duration-300 hover:-translate-y-2">
                {/* VISUAL */}
                <div className="aspect-video rounded-[1.5rem] border border-[#f4e7c5]/15 bg-[radial-gradient(circle_at_center,rgba(216,180,106,0.18),rgba(8,7,6,0.95))] p-4">
                  <div className="flex h-full items-center justify-center rounded-[1rem] border border-dashed border-[#f4e7c5]/20">
                    <div className="text-center">
                      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d8b46a]">
                        {item.type}
                      </p>

                      <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#f4e7c5]/40">
                        <div className="h-3 w-3 rounded-full bg-[#d8b46a]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* TEXTO */}
                <div className="pt-6">
                  <h3 className="text-2xl font-black uppercase text-[#f4e7c5]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#f4e7c5]/60">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.2}>
         <div className="mt-12 flex flex-col gap-4 sm:flex-row">
  <VintageButton href="https://twitch.tv/o_boja">
    Entrar na Twitch
  </VintageButton>

  <VintageButton
    href="https://instagram.com/astronomy.tech"
    variant="secondary"
  >
    Ver Astronomy
  </VintageButton>
</div>
        </Reveal>
      </Container>
    </section>
  );
}