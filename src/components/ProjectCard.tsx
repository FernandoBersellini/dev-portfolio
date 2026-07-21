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
        'rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8',
        project.placeholder && 'border-dashed border-white/15',
      )}
    >
      <h3 className="text-2xl font-semibold text-white">{project.name}</h3>

      <div className="mt-4 space-y-4 text-gray-300">
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
            className="rounded-lg border border-violet-400/40 px-4 py-2 text-sm font-medium text-violet-200 transition-colors hover:bg-violet-500/10"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}
