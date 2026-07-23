import { certifications, education, profile } from '@/data/resume'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="Profile" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="text-[1.0625rem] leading-relaxed text-ink-2">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={80} className="space-y-8">
          <div>
            <p className="eyebrow">Education</p>
            <p className="mt-3 font-medium">{education.org}</p>
            <p className="mt-1 text-sm text-muted">{education.title}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              {education.period} · {education.location}
            </p>
          </div>

          <div>
            <p className="eyebrow">Certifications</p>
            <ul className="mt-3 space-y-2.5">
              {certifications.map((certification) => (
                <li key={certification} className="flex gap-2.5 text-sm leading-relaxed">
                  <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-go" />
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
