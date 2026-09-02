# Fundação visual

A direção artística oficial v1 está registrada em `docs/references/home-visual-reference-v1.png`. Ela orienta linguagem, hierarquia e atmosfera; não é uma especificação pixel-perfect.

## Princípios

- monocromia, contraste forte e espaço negativo;
- exploração espacial representada por corpos celestes, órbitas e instrumentos, não por efeitos sci-fi genéricos;
- linguagem de gravura astronômica e editorial pulp com estrutura web contemporânea;
- conteúdo profissional legível antes da ornamentação;
- elementos decorativos não podem carregar informação essencial.

## Tokens

Os tokens Tailwind CSS 4 ficam em `app/globals.css`:

| Token | Papel |
| --- | --- |
| `canvas` | fundo preto profundo |
| `surface` | superfície básica |
| `surface-elevated` | superfície elevada |
| `foreground` | texto principal/off-white |
| `secondary` | texto secundário |
| `muted` | legendas e coordenadas |
| `line` | borda discreta |
| `line-strong` | borda e instrumento enfatizado |
| `accent` | destaque monocromático |
| `focus` | foco visível |

Componentes novos devem usar os tokens sem repetir hexadecimais. Componentes antigos serão migrados apenas quando entrarem no escopo de um incremento.

## Tipografia

- Display: Cinzel 600/700, servida localmente pelo pacote já instalado. Uso restrito a marca e títulos editoriais.
- Conteúdo: pilha sans-serif nativa do sistema, priorizando leitura, estabilidade de layout e ausência de requisição externa.
- Monoespaçada: pilha nativa para coordenadas, numeração e instrumentos pequenos.

## Motion

Motion deve comunicar estado ou hierarquia. Header e Hero não dependem de animação. Transições curtas de cor são permitidas em controles, e `prefers-reduced-motion` reduz globalmente animações e transições não essenciais.

## Elementos espaciais

A Lua do Hero é um asset raster contextual com crateras, hachuras e linhas topográficas. Ela permanece exclusiva do Hero e desaparece gradualmente na base por máscara CSS. Órbitas, estrelas e coordenadas são decorativas, possuem baixa densidade em telas menores e ficam fora da árvore de acessibilidade.

Não usar fotografias espaciais ou assets de terceiros sem licença e aprovação. Glows, partículas e gradientes coloridos não fazem parte desta direção.

## Nyx

Nyx é Oficial de Navegação, Arquivista e Companheira de bordo. No Hero atual, seu papel aparece apenas em um módulo textual discreto. O PNG existente não foi usado por ser pesado e não representar uma pose aprovada para esta composição. Uma futura ilustração deve preservar a personagem existente e não transformá-la em chatbot ou navegação essencial.
