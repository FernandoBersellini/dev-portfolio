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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-serif text-lg font-semibold text-ink">
          Fernando<span className="text-seal">.dev</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text transition-colors hover:text-wave"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden rounded-lg bg-ink px-4 py-2 text-sm font-medium text-foam transition-colors hover:bg-ink-soft sm:inline-block"
          >
            {t.header.cta}
          </a>
          <button
            type="button"
            aria-label={t.header.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-border md:hidden"
          >
            <span className="h-px w-5 bg-ink" />
            <span className="h-px w-5 bg-ink" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-border/70 bg-paper px-6 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm text-text transition-colors hover:bg-ink/10 hover:text-wave"
            >
              {t.nav[item.key]}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-ink px-4 py-2.5 text-center text-sm font-medium text-foam"
          >
            {t.header.cta}
          </a>
        </nav>
      )}
    </header>
  )
}
