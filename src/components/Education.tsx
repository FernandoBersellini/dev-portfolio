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
            className="flex flex-col justify-between gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="font-semibold text-white">{item.course}</h3>
              <p className="text-gray-400">{item.institution}</p>
              <p className="mt-1 font-mono text-sm text-gray-500">{item.period}</p>
            </div>
            <span className="w-fit rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-xs text-violet-200">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}
