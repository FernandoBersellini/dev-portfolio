import type { Lang } from '@/i18n/LanguageContext'

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  name: string
  description: string[]
  stack: string[]
  links: ProjectLink[]
  placeholder?: boolean
}

export const PROJECTS: Record<Lang, Project[]> = {
  pt: [
    {
      name: 'OpenFeed',
      description: [
        'Aplicação fullstack completa: backend em Java 21 com Spring Boot, frontend em React e TypeScript, banco PostgreSQL, com CI/CD via GitHub Actions e deploy em produção (Fly.io para o backend, Vercel para o frontend).',
        'Um dos problemas mais interessantes que resolvi no projeto foi um bug de CSRF em cookies cross-origin, causado por frontend e backend estarem em domínios diferentes em produção. Documentei o processo de investigação e a correção em um estudo de caso — do sintoma no navegador até a causa raiz na configuração de cookies e CORS.',
      ],
      stack: [
        'Java 21',
        'Spring Boot',
        'React',
        'TypeScript',
        'PostgreSQL',
        'GitHub Actions',
        'Fly.io',
        'Vercel',
      ],
      links: [
        { label: 'Ver backend no GitHub', href: 'https://github.com/FernandoBersellini/open-feed' },
        {
          label: 'Ver frontend no GitHub',
          href: 'https://github.com/FernandoBersellini/openfeed-frontend',
        },
        { label: 'Acessar demo', href: 'https://openfeed-frontend.vercel.app/' },
      ],
    },
    {
      name: 'Todo App',
      description: [
        'Aplicação de tarefas fullstack: backend em NestJS 11 com PostgreSQL via TypeORM, e frontend em Next.js 16 com React 19 e TypeScript, estilizado com Tailwind CSS v4.',
        'O backend expõe uma API REST protegida por JWT, com pipeline de CI completo — lint, testes unitários e testes e2e rodando contra um banco Postgres real, não mocks — e deploy automatizado: Railway para a API e o Postgres, Vercel para o frontend, com rollback automático caso o healthcheck falhe após um deploy. No frontend, a autenticação é feita por e-mail e senha, com atualizações otimistas nas operações de tarefas e reversão automática em caso de falha na API. Ainda em desenvolvimento — a tela de cadastro de novos usuários está no backlog.',
      ],
      stack: [
        'NestJS',
        'PostgreSQL',
        'TypeORM',
        'JWT',
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Docker',
        'GitHub Actions',
        'Railway',
        'Vercel',
      ],
      links: [
        {
          label: 'Ver backend no GitHub',
          href: 'https://github.com/FernandoBersellini/todo-app-back',
        },
        {
          label: 'Ver frontend no GitHub',
          href: 'https://github.com/FernandoBersellini/todo-app-frontend',
        },
        { label: 'Acessar demo', href: 'https://todo-app-frontend-o3bc.vercel.app' },
      ],
    },
  ],
  en: [
    {
      name: 'OpenFeed',
      description: [
        'Full stack application: Java 21 backend with Spring Boot, React and TypeScript frontend, PostgreSQL database, with CI/CD via GitHub Actions and production deploy (Fly.io for the backend, Vercel for the frontend).',
        'One of the most interesting problems I solved in this project was a CSRF bug with cross-origin cookies, caused by the frontend and backend living on different domains in production. I documented the investigation and the fix in a case study — from the symptom in the browser to the root cause in the cookie and CORS configuration.',
      ],
      stack: [
        'Java 21',
        'Spring Boot',
        'React',
        'TypeScript',
        'PostgreSQL',
        'GitHub Actions',
        'Fly.io',
        'Vercel',
      ],
      links: [
        { label: 'View backend on GitHub', href: 'https://github.com/FernandoBersellini/open-feed' },
        {
          label: 'View frontend on GitHub',
          href: 'https://github.com/FernandoBersellini/openfeed-frontend',
        },
        { label: 'View demo', href: 'https://openfeed-frontend.vercel.app/' },
      ],
    },
    {
      name: 'Todo App',
      description: [
        'Full stack task management app: NestJS 11 backend with PostgreSQL via TypeORM, and Next.js 16 frontend with React 19 and TypeScript, styled with Tailwind CSS v4.',
        'The backend exposes a JWT-protected REST API, with a complete CI pipeline — lint, unit tests and e2e tests running against a real Postgres database, not mocks — and automated deploy: Railway for the API and Postgres, Vercel for the frontend, with automatic rollback if the healthcheck fails after a deploy. On the frontend, authentication is done by email and password, with optimistic updates on task operations and automatic rollback if the API call fails. Still under development — the new user sign-up screen is in the backlog.',
      ],
      stack: [
        'NestJS',
        'PostgreSQL',
        'TypeORM',
        'JWT',
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Docker',
        'GitHub Actions',
        'Railway',
        'Vercel',
      ],
      links: [
        {
          label: 'View backend on GitHub',
          href: 'https://github.com/FernandoBersellini/todo-app-back',
        },
        {
          label: 'View frontend on GitHub',
          href: 'https://github.com/FernandoBersellini/todo-app-frontend',
        },
        { label: 'View demo', href: 'https://todo-app-frontend-o3bc.vercel.app' },
      ],
      placeholder: false,
    },
  ],
}
