import { NyxNote } from "@/components/ui/NyxNote";

export default function NyxTestPage() {
  return (
    <main className="mx-auto max-w-5xl p-10 pt-40">
      <div className="space-y-8">

        <NyxNote>
          Este universo digital está em constante expansão.
          Novos projetos e descobertas são registrados diariamente.
        </NyxNote>

        <NyxNote
          icon="🚀"
          title="Próxima missão"
        >
          O projeto NoxCare continua em desenvolvimento
          e receberá novas funcionalidades em breve.
        </NyxNote>

        <NyxNote
          icon="📡"
          title="Arquivo catalogado"
        >
          Este projeto foi registrado e analisado pela
          Oficial Nyx.
        </NyxNote>

      </div>
    </main>
  );
}