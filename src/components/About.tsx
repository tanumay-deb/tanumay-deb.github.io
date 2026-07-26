import { principles, profile } from '@/data/resume'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" eyebrow="Profile" title="About">
      <Reveal className="max-w-2xl space-y-5">
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="text-[1.0625rem] leading-relaxed text-ink-2">
            {paragraph}
          </p>
        ))}
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-12">
          <p className="eyebrow">How I work</p>
          <dl className="mt-5 grid gap-px bg-rule sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-surface p-6">
                <dt className="font-display text-base leading-snug font-bold tracking-tight">
                  {principle.title}
                </dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-muted">{principle.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </Section>
  )
}
