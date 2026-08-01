import Badge from '@/components/Badge'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-paper-elevated/70 p-6 shadow-[0_4px_24px_-16px_rgba(20,56,80,0.6)] backdrop-blur-sm sm:p-8',
        project.placeholder && 'border-dashed border-border',
      )}
    >
      <h3 className="font-serif text-2xl font-semibold text-ink">{project.name}</h3>

      <div className="mt-4 space-y-4 text-text">
        {project.description.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-wave/50 px-4 py-2 text-sm font-medium text-wave transition-colors hover:bg-wave/10"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
