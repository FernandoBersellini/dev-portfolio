import { CONTACT } from '@/data/contact'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  return (
    <section id="hero" className="relative flex min-h-screen items-center px-6 pt-24 pb-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-sm uppercase tracking-widest text-violet-400">
          {t.eyebrow}
        </p>
        <h1 className="text-4xl font-bold text-white sm:text-6xl">
          Fernando <span className="text-violet-400">Bersellini</span>
        </h1>
        <p className="mt-3 text-xl font-medium text-violet-300 sm:text-2xl">{t.role}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">{t.paragraph1}</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-400">{t.paragraph2}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-violet-500 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-violet-400"
          >
            {t.ctaProjects}
          </a>
          <a
            href={CONTACT.cvUrl}
            download
            className="rounded-lg border border-violet-400/40 px-6 py-3 text-center font-medium text-violet-200 transition-colors hover:bg-violet-500/10"
          >
            {t.ctaCv}
          </a>
        </div>
      </div>
    </section>
  )
}
