# Portfólio — Fernando Bersellini

Site de portfólio pessoal, SPA estática (sem backend), construído para facilitar a triagem rápida
de recrutadores e gestores técnicos.

**Stack:** React + Vite + TypeScript, Tailwind CSS v4, componentes Aceternity (fundo estrelado).
**Deploy:** Vercel.

## Funcionalidades

- Fundo de céu estrelado (Aceternity `StarsBackground` + `ShootingStars`), fixo atrás do conteúdo.
- Suporte a **PT/EN** com troca manual (botão no header) e detecção automática do idioma do
  navegador no primeiro acesso — qualquer idioma que não seja português cai em inglês por padrão.
  A escolha do usuário é persistida em `localStorage` e sempre tem prioridade sobre a detecção.
- `title`, `meta description` e `<html lang>` trocam dinamicamente junto com o idioma.
- CV em PDF: um arquivo por idioma, servido automaticamente conforme o idioma ativo.
- Header fixo com navegação por âncoras e CTA de contato sempre visível.
- Totalmente responsivo (mobile-first).

## Estrutura de pastas

```
src/
├── components/         # Um componente por seção da página
│   ├── ui/              # Componentes de terceiros (Aceternity)
│   └── ...
├── data/                # Conteúdo editável: projetos, skills, navegação, contato
├── i18n/                # Contexto de idioma + dicionário de traduções (pt/en)
├── lib/utils.ts         # Utilitário cn() (clsx + tailwind-merge)
└── App.tsx              # Composição das seções, na ordem de rolagem
```

### Onde editar o quê

| Quero mudar...                          | Arquivo                                   |
| ---------------------------------------- | ------------------------------------------ |
| Textos fixos de UI (nav, hero, cards, etc.) | `src/i18n/translations.ts`               |
| Projetos em destaque                     | `src/data/projects.ts`                    |
| Habilidades / stack                      | `src/data/skills.ts`                      |
| Links de contato, e-mail, CVs            | `src/data/contact.ts`                     |
| Itens do menu (âncoras)                  | `src/data/navigation.ts`                  |
| Aparência de uma seção específica        | `src/components/<Nome>.tsx`               |

## Scripts

```bash
npm run dev       # servidor de desenvolvimento
npm run build     # type-check + build de produção (dist/)
npm run preview   # serve o build de produção localmente
npm run lint      # ESLint
```

## Deploy

Projeto pronto para a Vercel com o preset **Vite** (build command `npm run build`, output `dist`).
Por ser uma SPA de âncoras (sem client-side router), não é necessário nenhum rewrite/`vercel.json`.
