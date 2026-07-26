import { projects } from '@/data/resume'
import Diagram from './Diagram'
import Reveal from './Reveal'
import Section from './Section'

/**
 * Case studies, not cards. Each one answers the same three questions in the
 * same order — what was wrong, what was done, what it was worth — so they can
 * be compared rather than just read.
 */
export default function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Case studies"
      title="Work"
      lede="Six pieces of work from one role. The problem each started from, the approach taken, and what it was worth to the business."
    >
      <div className="space-y-20">
        {projects.map((project) => (
          <article key={project.id} id={`case-${project.id}`} className="scroll-mt-24">
            <Reveal>
              <header className="border-t border-ink pt-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <span className="font-mono text-xs text-go">{project.id}</span>
                  <span className="eyebrow">{project.scope}</span>
                </div>
                <h3 className="font-display mt-3 text-2xl font-bold tracking-tight sm:text-[2rem]">
                  {project.title}
                </h3>
              </header>

              <div className="mt-7 grid gap-x-12 gap-y-7 lg:grid-cols-2">
                <div>
                  <p className="eyebrow">The problem</p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="eyebrow">What I did</p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
                    {project.approach}
                  </p>
                </div>
              </div>
            </Reveal>

            {project.diagram ? (
              <Reveal delay={60}>
                <Diagram kind={project.diagram} />
              </Reveal>
            ) : null}

            <Reveal delay={60}>
              <dl className="mt-8 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-3">
                {project.impact.map((item) => (
                  <div key={item.label} className="bg-surface px-5 py-5">
                    <dt className="font-display text-[1.75rem] leading-none font-bold tracking-tight">
                      {item.value}
                    </dt>
                    <dd className="mt-2 text-sm leading-snug text-muted">{item.label}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 border-l-2 border-go pl-5">
                <p className="eyebrow">Business value</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{project.value}</p>
              </div>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </article>
        ))}
      </div>
    </Section>
  )
}
