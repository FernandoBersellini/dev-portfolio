import Section from '@/components/Section'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Experience() {
  const { lang } = useLanguage()
  const t = translations[lang].experience

  return (
    <Section id="experience" eyebrow={t.eyebrow} title={t.title}>
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-semibold text-white">{t.role}</h3>
          <span className="font-mono text-sm text-gray-400">{t.period}</span>
        </div>
        <p className="mt-4 leading-relaxed text-gray-300">{t.summary}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
          {t.bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
