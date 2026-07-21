import ProjectCard from '@/components/ProjectCard'
import Section from '@/components/Section'
import { PROJECTS } from '@/data/projects'
import { useLanguage } from '@/i18n/LanguageContext'
import { translations } from '@/i18n/translations'

export default function Projects() {
  const { lang } = useLanguage()
  const t = translations[lang].projects
  const projects = PROJECTS[lang]

  return (
    <Section id="projects" eyebrow={t.eyebrow} title={t.title}>
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  )
}
