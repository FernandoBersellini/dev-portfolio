import type { Translations } from '@/i18n/translations'

export const NAV_ITEMS: { key: keyof Translations['nav']; href: string }[] = [
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'experience', href: '#experience' },
  { key: 'education', href: '#education' },
  { key: 'contact', href: '#contact' },
]
