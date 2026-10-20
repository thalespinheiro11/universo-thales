# Universo Thales

Portfólio pessoal e profissional de Thales Pinheiro. O produto reúne apresentação, projetos estruturados, blog, contato e conteúdos ligados a tecnologia e astronomia, preservando uma identidade visual espacial já existente.

Produção: [thalespinheiro.com.br](https://thalespinheiro.com.br)

## Stack

- Next.js 16 com App Router e React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- ESLint

## Requisitos e execução

- Node.js 20.9 ou superior
- npm (o lockfile oficial é `package-lock.json`)

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`. A rota sem locale redireciona para `/pt-br`.

Scripts disponíveis:

- `npm run dev`: servidor de desenvolvimento;
- `npm run build`: build de produção;
- `npm run start`: executa o build;
- `npm run lint`: análise com ESLint;
- `npm run resumes`: atualiza os currículos publicados (veja abaixo).

Para verificar tipos separadamente, execute `npx tsc --noEmit`.

## Estrutura principal

- `app/[locale]/`: páginas localizadas do App Router;
- `components/`: layout, seções e componentes reutilizáveis;
- `content/`: conteúdo localizado e registros que relacionam traduções;
- `data/`: conteúdo estruturado legado de projetos e blog;
- `config/`: configurações globais estáveis;
- `lib/`: helpers e constantes;
- `public/`: imagens e documentos públicos;
- `docs/`: produto, arquitetura, i18n e roadmap.

## Internacionalização

Os locales públicos são `pt-br` e `en`, sempre explícitos na URL. PT-BR é o fallback. A solução usa recursos nativos do App Router, sem biblioteca externa: segmento dinâmico, validação de locale, conteúdo carregado no servidor e `proxy.ts` para redirecionar URLs sem locale.

Projetos e artigos têm uma identidade compartilhada e traduções opcionais. Enquanto uma tradução não existe, a versão PT-BR é usada; a migração completa do conteúdo será incremental. Consulte [`docs/i18n.md`](docs/i18n.md).

## Currículos

Os PDFs publicados ficam em `public/documents/resume/` com nomes fixos, definidos em `config/site.ts`. Para atualizar, salve as versões novas em `C:\Documentos` com os nomes `Currículo - Thales Pinheiro (PT-BR).pdf` e `Thales Pinheiro - Resume.pdf` e rode:

```bash
npm run resumes
```

Para usar outros arquivos, passe os caminhos (PT-BR primeiro): `npm run resumes -- "C:\caminho\pt.pdf" "C:\caminho\en.pdf"`. O comando valida os dois PDFs antes de copiar. Depois, faça commit e push para publicar.

## Documentação e deploy

As decisões atuais estão em `docs/`. Leia também `AGENTS.md` antes de alterar o projeto.

O projeto gera um build Next.js padrão e está preparado para plataformas compatíveis, como Vercel. Configurações específicas da conta e o fluxo de publicação não estão versionados neste repositório. O domínio canônico é `https://thalespinheiro.com.br`.
