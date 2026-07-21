import type { Lang } from '@/i18n/LanguageContext'

export type SkillGroup = {
  label: string
  skills: string[]
}

export const SKILL_GROUPS: Record<Lang, SkillGroup[]> = {
  pt: [
    {
      label: 'Principal',
      skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
    },
    {
      label: 'Também trabalho com',
      skills: ['Java', 'Spring Boot', 'Spring Security', 'TypeORM'],
    },
    {
      label: 'Ferramentas',
      skills: [
        'Git & GitHub Actions',
        'Docker',
        'Tailwind CSS',
        'SQL avançado (window functions, PARTITION BY, RANK)',
        'Deploy (Vercel, Railway, Fly.io)',
      ],
    },
  ],
  en: [
    {
      label: 'Core',
      skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL'],
    },
    {
      label: 'Also working with',
      skills: ['Java', 'Spring Boot', 'Spring Security', 'TypeORM'],
    },
    {
      label: 'Tools',
      skills: [
        'Git & GitHub Actions',
        'Docker',
        'Tailwind CSS',
        'Advanced SQL (window functions, PARTITION BY, RANK)',
        'Deploy (Vercel, Railway, Fly.io)',
      ],
    },
  ],
}
