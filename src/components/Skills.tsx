import { skills } from '@/data/resume'
import Reveal from './Reveal'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills">
      <dl className="divide-y divide-rule-soft border-t border-rule-soft">
        {skills.map((group, index) => (
          <Reveal
            key={group.group}
            delay={index * 50}
            className="grid gap-x-8 gap-y-3 py-5 sm:grid-cols-[13rem_1fr] sm:items-baseline"
          >
            <dt className="eyebrow">{group.group}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
