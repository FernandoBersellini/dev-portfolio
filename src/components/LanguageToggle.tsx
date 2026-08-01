import { useLanguage } from '@/i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para português'}
      className="rounded-lg border border-border px-3 py-1.5 font-mono text-xs font-medium text-ink transition-colors hover:border-wave/60 hover:text-wave"
    >
      {lang === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
