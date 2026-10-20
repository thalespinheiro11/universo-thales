# Produto

## Visão

Universo Thales é o portfólio pessoal e profissional de Thales Pinheiro. O site apresenta sua identidade, trajetória, projetos, artigos e canais de contato em uma experiência inspirada por tecnologia, astronomia e exploração.

## Objetivos

- comunicar perfil, capacidades e interesses de forma clara;
- apresentar projetos como dados estruturados, com evolução futura para estudos de caso;
- manter o blog como parte oficial do produto;
- atender públicos em PT-BR e inglês sob o mesmo produto;
- disponibilizar currículos nos dois idiomas quando os arquivos oficiais existirem.

## Princípios

- planejamento e documentação antes de mudanças amplas;
- evolução incremental, sem reconstrução desnecessária;
- conteúdo e acessibilidade acima de efeitos decorativos;
- direção visual aprovada antes de mudanças relevantes;
- boa performance e manutenção simples.

## Escopo atual

O produto contém Home, Sobre, Projetos, detalhes de projeto, Blog, artigos, Contato e Astronomy. A estrutura localizada existe, mas a maior parte do conteúdo legado ainda está somente em PT-BR e é utilizada como fallback.

## Incremento #03: projetos em destaque

A Home destaca três projetos selecionados: Mokupuni Va'a como destaque principal, seguido por NoxCare e Backup Monitor. Os cards usam conteúdo resumido localizado, enquanto os estudos de caso continuam no registro legado e não são considerados completos em inglês.

Os cards usam placeholders visuais intencionais até que assets reais sejam aprovados. A substituição futura deve preservar a estrutura do card e usar screenshots reais: material do processo para Mokupuni, interface real para NoxCare e demonstração sanitizada para Backup Monitor.

Backup Monitor deve ser apresentado publicamente apenas como ferramenta interna desenvolvida para um ambiente corporativo. Informatech, clientes, infraestrutura, caminhos, diretórios, IPs, nomes internos, dados operacionais e credenciais não podem aparecer em conteúdo novo. O artigo legado ainda precisa ser anonimizado antes de um próximo deploy público.

Astronomy Tickets está fora da exposição pública e não deve ser adicionado à Home, aos destaques, à listagem pública, ao sitemap ou a conteúdo novo. Essa decisão não se aplica ao projeto distinto chamado Astronomy.

Na Home, a hierarquia profissional posiciona Projetos em Destaque logo após o Hero e o Posicionamento. A antiga seção de Transmissões não é renderizada nessa página, embora seus componentes, conteúdo e canais continuem disponíveis para outros usos.

## Incremento #04: Home na referência v1

A Home segue a estrutura de `docs/references/home-visual-reference-v1.png`: 01 Hero, 02 Posicionamento, 03 Projetos em destaque, 04 Trajetória, 05 Blog / Registros, 06 Disponibilidade e currículos e 07 Contato (Footer). Os textos ficam em `content/<locale>/site.ts`.

As seções legadas (Projetos duplicados, Sobre, Jornada, Space Lab, Mídia, Blog e Social) deixaram de ser renderizadas na Home; os componentes continuam no repositório até uma decisão sobre reaproveitamento ou remoção.

Blog / Registros usa uma seleção explícita em `content/blog.ts`, sem o artigo do Backup Monitor enquanto ele não for anonimizado. Os currículos aparecem como "em preparação" até os arquivos oficiais existirem. O Footer, compartilhado por todas as páginas, usa apenas canais já configurados em `config/site.ts`, incluindo o LinkedIn.
