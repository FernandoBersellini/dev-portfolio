import { useState } from 'react'
import LanguageToggle from '@/components/LanguageToggle'
import { NAV_ITEMS } from '@/data/navigation'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a12]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-semibold text-white">
          Fernando<span className="text-violet-400">.dev</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 transition-colors hover:text-violet-300"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-400 sm:inline-block"
          >
            {t.header.cta}
          </a>
          <button
            type="button"
            aria-label={t.header.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 md:hidden"
          >
            <span className="h-px w-5 bg-gray-200" />
            <span className="h-px w-5 bg-gray-200" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#0a0a12] px-6 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm text-gray-300 transition-colors hover:bg-violet-500/10 hover:text-violet-300"
            >
              {t.nav[item.key]}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-violet-500 px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            {t.header.cta}
          </a>
        </nav>
      )}
    </header>
  )
}
