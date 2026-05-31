import Image from "next/image";

type NyxNoteProps = {
  title?: string;
  icon?: string;
  children: React.ReactNode;
};

export function NyxNote({
  title = "Observação da Nyx",
  icon = "🌙",
  children,
}: NyxNoteProps) {
  return (
    <div className="cartoon-ink relative overflow-hidden rounded-[2rem] p-5">
      <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full border-[3px] border-dashed border-[#d8b46a]/20" />

      <div className="relative z-10 flex gap-5">
        <div className="shrink-0">
          <Image
            src="/images/nyx/nyx-main.png"
            alt="Nyx"
            width={90}
            height={90}
            className="rounded-full border-2 border-[#f4e7c5]/20 bg-[#080706]"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="cartoon-badge">
              Oficial de Navegação
            </span>

            <span className="text-xl">
              {icon}
            </span>
          </div>

          <h3 className="cartoon-title mt-3 text-xl font-black uppercase text-[#f4e7c5]">
            {title}
          </h3>

          <div className="mt-4 text-sm leading-7 text-[#f4e7c5]/75">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}