import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer

  return (
    <footer className="relative border-t border-white/10 bg-[#0a0a12] px-6 py-8 text-center">
      <p className="text-sm text-gray-500">{t.text}</p>
    </footer>
  )
}
