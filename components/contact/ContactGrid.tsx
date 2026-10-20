import type { PagesContent } from "@/content/pages";
import { contactLinks } from "@/data/contact";
import { ContactCard } from "./ContactCard";

type ContactGridProps = {
  channels: PagesContent["contact"]["channels"];
};

const channelOrder = [
  ["linkedin", contactLinks.linkedin],
  ["twitch", contactLinks.twitch],
  ["instagram", contactLinks.instagram],
  ["astronomy", contactLinks.astronomy],
  ["email", `mailto:${contactLinks.email}`],
] as const;

export function ContactGrid({ channels }: ContactGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {channelOrder.map(([key, href], index) => (
        <div key={key} className={index === 0 ? "md:col-span-2" : undefined}>
          <ContactCard
            label={channels[key].label}
            value={channels[key].value}
            href={href}
            description={channels[key].description}
          />
        </div>
      ))}
    </div>
  );
}
