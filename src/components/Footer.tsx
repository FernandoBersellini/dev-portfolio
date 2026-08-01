import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="relative border-t border-border/70 px-6 py-8 text-center">
      <p className="text-sm text-text-muted">{t.text}</p>
    </footer>
  )
}
