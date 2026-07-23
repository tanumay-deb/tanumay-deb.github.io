import { projects } from '@/data/resume'
import Reveal from './Reveal'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Delivered"
      title="Work"
      lede="Six pieces of work that shaped how automation is built, shipped, and kept running across six global teams."
    >
      <div className="grid gap-px bg-rule sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 70} className="h-full">
            <article className="flex h-full flex-col bg-surface p-6 sm:p-7">
              <p className="eyebrow">{project.scope}</p>
              <h3 className="font-display mt-3 text-xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">{project.body}</p>

              <ul className="mt-5 space-y-1.5">
                {project.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-baseline gap-2.5 font-mono text-xs text-go"
                  >
                    <span aria-hidden className="inline-block size-1.5 shrink-0 rounded-full bg-go" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {project.stack.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
