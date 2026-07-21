import type { Lang } from '@/i18n/LanguageContext'

// TODO: substituir pelos links reais antes do deploy
export const CONTACT = {
  email: 'fernandobersellini@outlook.com.br',
  linkedin: 'https://www.linkedin.com/in/fernandobersellini/',
  github: 'https://github.com/FernandoBersellini',
  cvUrl: {
    pt: '/Fernando_Bersellini_Estagiario_CV.pdf',
    en: '/Fernando_Bersellini_Intern_CV.pdf',
  } satisfies Record<Lang, string>,
}
