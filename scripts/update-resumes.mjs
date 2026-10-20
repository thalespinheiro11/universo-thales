// Copia os currículos oficiais para public/documents/resume, onde o site os publica.
//
// Uso:
//   npm run resumes                       → usa os arquivos padrão em C:\Documentos
//   npm run resumes -- <pt-br.pdf> <en.pdf> → usa outros caminhos
//
// Os nomes de destino são fixos (config/site.ts), então os links do site nunca mudam.
import { copyFileSync, existsSync, mkdirSync, openSync, readSync, closeSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const defaultSourceDir = "C:\\Documentos";
const defaultSources = {
  "pt-BR": join(defaultSourceDir, "Currículo - Thales Pinheiro (PT-BR).pdf"),
  en: join(defaultSourceDir, "Thales Pinheiro - Resume.pdf"),
};

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const targets = {
  "pt-BR": join(root, "public/documents/resume/thales-pinheiro-pt-BR.pdf"),
  en: join(root, "public/documents/resume/thales-pinheiro-en.pdf"),
};

const [ptArg, enArg] = process.argv.slice(2);
const sources = { "pt-BR": ptArg ?? defaultSources["pt-BR"], en: enArg ?? defaultSources.en };

function isPdf(path) {
  const fd = openSync(path, "r");
  const header = Buffer.alloc(5);
  readSync(fd, header, 0, 5, 0);
  closeSync(fd);
  return header.toString("latin1") === "%PDF-";
}

const errors = [];
for (const [locale, source] of Object.entries(sources)) {
  if (!existsSync(source)) errors.push(`${locale}: arquivo não encontrado em "${source}"`);
  else if (!isPdf(source)) errors.push(`${locale}: "${source}" não é um PDF válido`);
}

if (errors.length) {
  console.error("Nenhum currículo foi copiado:\n- " + errors.join("\n- "));
  process.exit(1);
}

for (const [locale, source] of Object.entries(sources)) {
  mkdirSync(dirname(targets[locale]), { recursive: true });
  copyFileSync(source, targets[locale]);
  const kb = (statSync(targets[locale]).size / 1024).toFixed(0);
  console.log(`✓ ${locale}: ${source} → ${targets[locale].slice(root.length + 1)} (${kb} KB)`);
}

console.log("\nPróximo passo: revise, faça commit e push para publicar.");
