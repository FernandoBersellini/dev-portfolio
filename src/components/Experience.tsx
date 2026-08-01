import Section from '@/components/Section'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Experience() {
  const { lang } = useLanguage()
  const t = translations[lang].experience

  return (
    <Section id="experience" eyebrow={t.eyebrow} title={t.title}>
      <div className="rounded-2xl border border-border bg-paper-elevated/70 p-6 shadow-[0_4px_24px_-16px_rgba(20,56,80,0.6)] backdrop-blur-sm sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-serif text-xl font-semibold text-ink">{t.role}</h3>
          <span className="font-mono text-sm text-text-muted">{t.period}</span>
        </div>
        <p className="mt-4 leading-relaxed text-text">{t.summary}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-text marker:text-wave">
          {t.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
