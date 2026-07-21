import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations } from '@/i18n/translations'
import type { Lang } from '@/i18n/types'

export type { Lang } from '@/i18n/types'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const STORAGE_KEY = 'portfolio-lang'

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectBrowserLang(): Lang {
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language]
  const isPortuguese = candidates.some((locale) => locale?.toLowerCase().startsWith('pt'))
  return isPortuguese ? 'pt' : 'en'
}

function getInitialLang(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored
  return detectBrowserLang()
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    const meta = translations[lang].meta
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR'
    document.title = meta.title

    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.setAttribute('content', meta.description)

    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const toggleLang = () => setLang((current) => (current === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- hook lives alongside its provider intentionally
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
