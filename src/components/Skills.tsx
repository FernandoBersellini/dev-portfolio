import Badge from '@/components/Badge'
import Section from '@/components/Section'
import { SKILL_GROUPS } from '@/data/skills'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Skills() {
  const { lang } = useLanguage()
  const t = translations[lang].skills
  const groups = SKILL_GROUPS[lang]

  return (
    <Section id="skills" eyebrow={t.eyebrow} title={t.title}>
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 text-sm font-medium text-gray-400">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
