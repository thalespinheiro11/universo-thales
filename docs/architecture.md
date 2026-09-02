# Arquitetura

## Visão geral

O projeto usa Next.js 16, App Router, React 19 e TypeScript. Páginas ficam em `app/[locale]`; componentes reutilizáveis permanecem em `components/`. Server Components são o padrão, com Client Components limitados a animações e interações existentes.

## Responsabilidades

- `app/[locale]`: composição de páginas e parâmetros de rota;
- `components`: UI compartilhada, sem duplicação por idioma;
- `content`: dicionários localizados e registros de traduções;
- `data`: projetos e artigos legados estruturados;
- `config/site.ts`: domínio, canais e referências de documentos;
- `lib/i18n.ts`: locales, fallback e construção/troca de paths;
- `proxy.ts`: redirecionamento de URLs sem locale para PT-BR.

## Conteúdo estruturado

Projetos e artigos mantêm slugs estáveis como identidade compartilhada. Os registros em `content/projects.ts` e `content/blog.ts` relacionam versões por locale e aplicam fallback para PT-BR. Isso permite migrar dados gradualmente sem duplicar páginas ou componentes.

Campos futuros de estudo de caso devem ser opcionais enquanto o conteúdo legado for migrado. CMS, banco de dados, autenticação e painel administrativo não fazem parte da arquitetura atual.

Cards resumidos da Home são mantidos separadamente dos registros de cases em `content/projects.ts`. Uma tradução EN de card não equivale a uma tradução completa de case: ela não deve criar entrada no sitemap nem tornar a rota interna indexável. Apenas traduções registradas em `localizedProjects` participam da política de SEO das páginas de projeto.

A Lua é um elemento contextual exclusivo do Hero e utiliza uma transição gradual para desaparecer antes das regiões de conteúdo subsequentes. Lua, órbitas e marcações do Hero ficam em uma única camada cenográfica mascarada; estrelas e atmosfera neutra ficam na camada global contínua. O asset lunar é carregado com `next/image`, proporção intrínseca preservada e sem comportamento baseado em scroll.

## Configuração e documentos

Valores estáveis e reutilizados ficam em `config/site.ts`. Os paths esperados dos currículos estão centralizados, mas nenhum PDF fictício deve ser criado. A presença física dos arquivos deve ser verificada antes de expor links na interface.

## SEO

O layout fornece a metadata global compartilhada, enquanto cada página indexável define seu próprio canonical. `sitemap.ts` publica projetos e artigos somente nos locales que possuem tradução real. Rotas inglesas que usam fallback PT-BR permanecem navegáveis, mas recebem `noindex, follow`, canonical PT-BR e alternates limitados às traduções existentes. `robots.ts` aponta para o sitemap canônico.
