import Section from '@/components/Section'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function About() {
  const { lang } = useLanguage()
  const t = translations[lang].about

  return (
    <Section id="about" eyebrow={t.eyebrow} title={t.title}>
      <div className="space-y-5 text-lg leading-relaxed text-text">
        {t.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <a
        href="#projects"
        className="mt-8 inline-block rounded-lg border border-ink/40 px-6 py-3 font-medium text-ink transition-colors hover:bg-ink/10"
      >
        {t.cta}
      </a>
    </Section>
  )
}
