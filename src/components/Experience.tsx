import { education, experience } from '@/data/resume'
import Reveal from './Reveal'
import Section from './Section'

/**
 * Grouped by what he owned, not replayed as résumé bullets. Each area links
 * back to the case study that carries its detail.
 */
export default function Experience() {
  return (
    <Section id="experience" eyebrow="History" title="Experience">
      <Reveal>
        <article className="border-t border-ink pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-display text-2xl font-bold tracking-tight">{experience.org}</h3>
            <span className="font-mono text-xs text-muted">
              {experience.period} · {experience.location}
            </span>
          </div>
          <p className="mt-1 text-sm text-ink-2">{experience.title}</p>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-2">
            {experience.intro}
          </p>
        </article>
      </Reveal>

      <dl className="mt-10 divide-y divide-rule-soft border-t border-rule-soft">
        {experience.areas.map((area, index) => (
          <Reveal
            key={area.area}
            delay={index * 50}
            className="grid gap-x-10 gap-y-2 py-6 sm:grid-cols-[11rem_1fr]"
          >
            <dt className="font-display text-lg font-bold tracking-tight">{area.area}</dt>
            <dd>
              <p className="text-[0.9375rem] leading-relaxed text-ink-2">{area.summary}</p>
              <a
                href={`#case-${area.link}`}
                className="group mt-3 inline-flex items-center gap-2 font-mono text-xs text-go"
              >
                <span className="link-underline">Read the case study</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </dd>
          </Reveal>
        ))}
      </dl>

      <Reveal delay={80}>
        <div className="mt-12 border-t border-rule pt-6">
          <p className="eyebrow">Education</p>
          <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="font-medium">{education.org}</p>
            <span className="font-mono text-xs text-muted">
              {education.period} · {education.location}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">{education.title}</p>
        </div>
      </Reveal>
    </Section>
  )
}
