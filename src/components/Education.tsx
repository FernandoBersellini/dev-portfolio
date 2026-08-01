import Section from '@/components/Section'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Education() {
  const { lang } = useLanguage()
  const t = translations[lang].education

  return (
    <Section id="education" eyebrow={t.eyebrow} title={t.title}>
      <div className="space-y-4">
        {t.items.map((item) => (
          <div
            key={item.course}
            className="flex flex-col justify-between gap-2 rounded-2xl border border-border bg-paper-elevated/70 p-6 shadow-[0_4px_24px_-16px_rgba(20,56,80,0.6)] backdrop-blur-sm sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="font-serif font-semibold text-ink">{item.course}</h3>
              <p className="text-text-muted">{item.institution}</p>
              <p className="mt-1 font-mono text-sm text-text-muted">{item.period}</p>
            </div>
            <span className="w-fit rounded-full border border-seal/30 bg-seal/10 px-3 py-1 font-mono text-xs text-seal">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
