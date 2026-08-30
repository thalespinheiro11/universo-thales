# Orientações para agentes de IA

Estas regras são permanentes para qualquer agente trabalhando neste repositório.

## Antes de alterar

- Execute `git status` e preserve alterações existentes. Se houver conflito relevante, pare e reporte.
- Leia `README.md`, a documentação pertinente em `docs/` e os arquivos diretamente envolvidos.
- Para mudanças em Next.js, leia primeiro o guia correspondente em `node_modules/next/dist/docs/`; esta versão possui APIs e convenções diferentes das versões anteriores.
- Entenda a implementação atual antes de propor mudanças estruturais.

## Forma de trabalho

- Trabalhe incrementalmente e mantenha o projeto funcional entre etapas.
- Não faça push. Não faça commit sem solicitação explícita.
- Não execute operações destrutivas sem autorização explícita.
- Não substitua a stack nem bibliotecas estruturais sem necessidade demonstrada e justificativa.
- Evite dependências novas quando uma implementação simples e sustentável for suficiente.
- Não mova código ou dados apenas por preferência estética; mudanças devem reduzir duplicação, risco ou custo de manutenção.
- Atualize a documentação quando uma alteração tornar o texto existente incorreto.

## Arquitetura e qualidade

- Considere PT-BR e EN desde a modelagem de rotas, conteúdo, metadata e links.
- Trate traduções de projetos e artigos como versões da mesma entidade, não como entidades independentes.
- Preserve Server Components como padrão. Use `"use client"` apenas para interatividade ou APIs exclusivas do cliente.
- Preserve HTML semântico, navegação por teclado, foco visível e nomes acessíveis.
- Considere performance, tamanho do JavaScript enviado ao cliente e progressive enhancement.
- Não improvise mudanças visuais relevantes. Redesign, direção visual, paleta, design system e animações relevantes dependem de direção aprovada.
- Preserve rotas, conteúdo e funcionalidades fora do escopo da tarefa.

## Conclusão

- Execute as verificações aplicáveis definidas em `package.json`, incluindo lint e build quando disponíveis.
- Execute `npx tsc --noEmit` para mudanças TypeScript quando não houver script equivalente.
- Revise `git diff` e `git status`, relate falhas e não esconda pendências ou riscos.
