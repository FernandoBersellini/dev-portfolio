import Section from '@/components/Section'
import { CONTACT } from '@/data/contact'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

  return (
    <Section id="contact" eyebrow={t.eyebrow} title={t.title}>
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-gray-300">
        <p>{t.paragraph1}</p>
        <p>{t.paragraph2}</p>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href={`mailto:${CONTACT.email}`}
          className="rounded-lg bg-violet-500 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-violet-400"
        >
          {t.ctaEmail}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-gray-400">
        <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-violet-300">
          {CONTACT.email}
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-violet-300"
        >
          LinkedIn
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-violet-300"
        >
          GitHub
        </a>
      </div>
    </Section>
  )
}
