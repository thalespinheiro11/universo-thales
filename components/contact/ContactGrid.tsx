import { contactLinks } from "@/data/contact";
import { ContactCard } from "./ContactCard";

const contacts = [
  {
    label: "Twitch",
    value: "o_boja",
    href: contactLinks.twitch,
    description:
      "Canal principal para lives, construção de projetos e bastidores em tempo real.",
  },
  {
    label: "Instagram pessoal",
    value: "@thaless.pinheiro",
    href: contactLinks.instagram,
    description:
      "Registros pessoais, rotina criativa, tecnologia e fragmentos da jornada.",
  },
  {
    label: "Astronomy",
    value: "@astronomy.tech",
    href: contactLinks.astronomy,
    description:
      "Laboratório criativo de tecnologia, design, conteúdo e experiências digitais.",
  },
  {
    label: "Email",
    value: "Contato",
    href: `mailto:${contactLinks.email}`,
    description:
      "Canal direto para propostas, projetos, parcerias e conversas profissionais.",
  },
];

export function ContactGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.label}
          label={contact.label}
          value={contact.value}
          href={contact.href}
          description={contact.description}
        />
      ))}
    </div>
  );
}