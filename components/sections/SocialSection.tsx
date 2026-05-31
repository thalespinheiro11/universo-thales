import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionTitle } from "../ui/SectionTitle";
import { VintageButton } from "../ui/VintageButton";

const socials = [
  {
    label: "Instagram pessoal",
    value: "@thaless.pinheiro",
    href: "https://instagram.com/thaless.pinheiro",
  },
  {
    label: "Astronomy",
    value: "@astronomy.tech",
    href: "https://instagram.com/astronomy.tech",
  },
  {
    label: "Website",
    value: "astronomytech.com.br",
    href: "https://astronomytech.com.br",
  },
];

export function SocialSection() {
  return (
    <section id="social" className="relative overflow-hidden py-28">
      <Container>
        <Reveal>
          <div className="vintage-card hand-drawn-border relative overflow-hidden rounded-[2.5rem] p-8 md:p-12">
            <div className="absolute inset-0 opacity-[0.06]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
              />
            </div>

            <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <SectionTitle
                badge="Sinais de transmissão"
                title="Acompanhe a construção desse universo."
                description="Aqui ficam os canais onde compartilho projetos, bastidores, conteúdo, tecnologia, Astronomy e a evolução dessa jornada criativa."
              />

              <div>
                <div className="grid gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.value}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[1.5rem] border border-[#f4e7c5]/10 bg-[#080706]/40 p-5 transition hover:border-[#d8b46a]/40 hover:bg-[#d8b46a]/10"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#9f875f]">
                        {social.label}
                      </p>

                      <p className="mt-2 text-xl font-black uppercase text-[#f4e7c5] transition group-hover:text-[#d8b46a]">
                        {social.value}
                      </p>
                    </a>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <VintageButton href="/projects">
                    Ver projetos
                  </VintageButton>

                  <VintageButton href="/blog" variant="secondary">
                    Ler diário
                  </VintageButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}