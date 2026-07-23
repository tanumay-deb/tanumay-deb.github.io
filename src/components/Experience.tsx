import { awards, experience } from '@/data/resume'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="History" title="Experience">
      {experience.map((role) => (
        <Reveal key={role.org}>
          <article className="border-t border-ink pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-2xl font-bold tracking-tight">{role.org}</h3>
              <span className="font-mono text-xs text-muted">{role.period}</span>
            </div>
            <p className="mt-1 text-sm text-ink-2">{role.title}</p>

            <ul className="mt-6 space-y-4">
              {role.points.map((point) => (
                <li key={point} className="flex gap-4 text-[0.9375rem] leading-relaxed text-ink-2">
                  <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-rule" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}

      <Reveal delay={80}>
        <div className="mt-14">
          <p className="eyebrow">Recognition</p>
          <ul className="mt-4 grid gap-px bg-rule sm:grid-cols-3">
            {awards.map((award) => (
              <li key={award.title} className="bg-surface p-5">
                <p className="font-medium">{award.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{award.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
