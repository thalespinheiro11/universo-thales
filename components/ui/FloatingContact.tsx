import { siteData } from "@/data/site";

export function FloatingContact() {
  return (
    <a
      href={siteData.social.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[80] rounded-full border border-[#f4e7c5]/25 bg-[#080706]/85 px-5 py-4 text-xs font-black uppercase tracking-[0.22em] text-[#f4e7c5] shadow-[0_0_40px_rgba(216,180,106,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b46a]/50 hover:bg-[#d8b46a]/15"
    >
      <span className="hidden sm:inline">Canal direto</span>
      <span className="sm:hidden">Contato</span>
    </a>
  );
}