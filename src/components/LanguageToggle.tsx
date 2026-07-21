import { useLanguage } from '@/i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}
      className="rounded-lg border border-white/10 px-3 py-1.5 font-mono text-xs font-medium text-gray-300 transition-colors hover:border-violet-400/40 hover:text-violet-300"
    >
      {lang === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
