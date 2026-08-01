import { CONTACT } from '@/data/contact'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  return (
    <section id="hero" className="relative flex min-h-screen items-center px-6 pt-24 pb-16">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="ink-rule h-px w-10" />
            <p className="font-mono text-sm uppercase tracking-widest text-wave">{t.eyebrow}</p>
          </div>

          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-ink text-balance sm:text-7xl">
            Fernando <span className="text-seal">Bersellini</span>
          </h1>
          <p className="mt-4 font-serif text-xl font-medium text-ink-soft sm:text-2xl">{t.role}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text">{t.paragraph1}</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">{t.paragraph2}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-ink px-6 py-3 text-center font-medium text-foam transition-colors hover:bg-ink-soft"
            >
              {t.ctaProjects}
            </a>
            <a
              href={CONTACT.cvUrl[lang]}
              download
              className="rounded-lg border border-ink/40 px-6 py-3 text-center font-medium text-ink transition-colors hover:bg-ink/10"
            >
              {t.ctaCv}
            </a>
          </div>
        </div>

        {/* Mount Fuji — quiet counterpoint to the wave, like in Hokusai's series */}
        <div className="relative hidden justify-self-center md:block">
          <div className="absolute -inset-4 rounded-full bg-foam/50 blur-2xl" aria-hidden="true" />
          <img
            src="/hokusai/fuji.png"
            alt="Ilustração do Monte Fuji no estilo de xilogravura de Hokusai"
            className="relative w-64 rounded-2xl border border-border object-cover shadow-[0_12px_40px_-12px_rgba(20,56,80,0.5)]"
          />
          <span className="absolute -bottom-3 -right-3 flex h-11 w-11 items-center justify-center rounded-md bg-seal font-serif text-lg font-bold text-foam shadow-md">
            冨
          </span>
        </div>
      </div>
    </section>
  )
}
