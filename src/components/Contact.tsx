import Section from '@/components/Section'
import { CONTACT } from '@/data/contact'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

  return (
    <Section id="contact" eyebrow={t.eyebrow} title={t.title}>
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-text">
        <p>{t.paragraph1}</p>
        <p>{t.paragraph2}</p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={`mailto:${CONTACT.email}`}
          className="rounded-lg bg-ink px-6 py-3 text-center font-medium text-foam transition-colors hover:bg-ink-soft"
        >
          {t.ctaEmail}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-text-muted">
        <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-wave">
          {CONTACT.email}
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-wave"
        >
          LinkedIn
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-wave"
        >
          GitHub
        </a>
      </div>
    </Section>
  )
}
