import { awards, certifications } from '@/data/resume'
import Reveal from './Reveal'
import Section from './Section'

export default function Recognition() {
  return (
    <Section
      id="recognition"
      eyebrow="Awards & certifications"
      title="Recognition"
      lede="Awards from three years at PepsiCo, each tied to a specific piece of work, plus the certifications behind the stack."
    >
      <ol className="divide-y divide-rule-soft border-t border-ink">
        {awards.map((award, index) => (
          <li key={award.title}>
            <Reveal
              delay={index * 60}
              className="grid gap-x-10 gap-y-3 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-display text-xl font-bold tracking-tight">{award.title}</h3>
                  {award.year ? (
                    <span className="font-mono text-xs text-muted">{award.year}</span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{award.detail}</p>
              </div>
              <span className="chip justify-self-start">{award.citation}</span>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={80}>
        <div className="mt-12">
          <p className="eyebrow">Certifications</p>
          <ul className="mt-4 grid gap-px bg-rule sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert.title} className="bg-surface px-5 py-4">
                <div className="flex flex-wrap items-baseline gap-x-2.5">
                  <p className="font-medium">{cert.title}</p>
                  {cert.code ? (
                    <span className="font-mono text-xs text-muted">{cert.code}</span>
                  ) : null}
                </div>
                <p className="mt-1 font-mono text-xs text-muted">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
