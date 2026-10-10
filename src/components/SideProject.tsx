import { sideProject as p } from '@/data/resume'
import { asset } from '@/lib/asset'
import Diagram from './Diagram'
import Reveal from './Reveal'
import Section from './Section'

/**
 * A dashboard screenshot that opens at full size. At column width the 1400px
 * captures are too small to read, so every one links to its own file.
 * Plain image tags rather than next/image: the export is unoptimised anyway,
 * and width/height alone prevents layout shift on these fixed-size assets.
 */
function Shot({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <a
      href={asset(src)}
      target="_blank"
      rel="noreferrer"
      title="Open at full size"
      className="block border border-rule transition-colors hover:border-ink"
    >
      <img
        src={asset(src)}
        alt={alt}
        width={1400}
        height={789}
        loading={eager ? undefined : 'lazy'}
        className="w-full"
      />
    </a>
  )
}

/**
 * The one piece of work on this site built outside an employer. It carries the
 * evidence the RPA case studies cannot — Python at volume, a real test suite,
 * CI, and a public repository anyone can clone and run.
 */
export default function SideProject() {
  return (
    <Section id="project" eyebrow={p.eyebrow} title={p.title} lede={p.oneLiner}>
      <Reveal>
        <Shot src={p.hero.src} alt={p.hero.alt} eager />
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-10 grid gap-x-12 gap-y-7 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The problem</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{p.problem}</p>
          </div>
          <div>
            <p className="eyebrow">What it does</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{p.approach}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <dl className="mt-8 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-3">
          {p.metrics.map((metric) => (
            <div key={metric.label} className="bg-surface px-5 py-5">
              <dt className="font-display text-[1.75rem] leading-none font-bold tracking-tight">
                {metric.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-muted">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={60}>
        <Diagram kind="pipeline" />
      </Reveal>

      {/* The engineering stories — the part worth reading before an interview. */}
      <Reveal delay={60}>
        <div className="mt-14">
          <p className="eyebrow">What was actually hard</p>
          <dl className="mt-5 grid gap-px bg-rule sm:grid-cols-2">
            {p.stories.map((story) => (
              <div key={story.title} className="bg-surface p-6">
                <dt className="font-display text-base leading-snug font-bold tracking-tight">
                  {story.title}
                </dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-muted">{story.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-12">
          <p className="eyebrow">How it is built</p>
          <dl className="mt-4 divide-y divide-rule-soft border-y border-rule-soft">
            {p.details.map((detail) => (
              <div
                key={detail.label}
                className="grid gap-x-10 gap-y-1.5 py-5 sm:grid-cols-[11rem_1fr] sm:items-baseline"
              >
                <dt className="font-display font-bold tracking-tight">{detail.label}</dt>
                <dd className="text-[0.9375rem] leading-relaxed text-ink-2">{detail.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      {/* The daily email, as the job writes it. */}
      <Reveal delay={60}>
        <div className="mt-12">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-ink pb-2">
            <p className="eyebrow">What lands in the inbox</p>
            <p className="font-mono text-[0.6875rem] text-muted">illustrative numbers</p>
          </div>
          <div className="border-x border-b border-rule bg-surface p-5 sm:p-6">
            <p className="font-mono text-xs text-muted">Subject</p>
            <p className="mt-1 font-medium">{p.alertEmail.subject}</p>
            <pre className="mt-5 font-mono text-[0.8125rem] leading-relaxed break-words whitespace-pre-wrap text-ink-2">
              {p.alertEmail.body}
            </pre>
          </div>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-12">
          <p className="eyebrow">Handling real financial documents</p>
          <ul className="mt-4 space-y-2.5">
            {p.security.map((item) => (
              <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                <span aria-hidden className="mt-2.5 h-px w-3.5 shrink-0 bg-go" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="mt-12">
          <p className="eyebrow">The rest of the dashboard</p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {p.gallery.map((shot) => (
              <figure key={shot.src}>
                <Shot src={shot.src} alt={shot.alt} />
                <figcaption className="mt-2.5 font-mono text-xs leading-relaxed text-muted">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 font-mono text-xs leading-relaxed text-muted">{p.galleryNote}</p>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <ul className="mt-12 flex flex-wrap gap-1.5">
          {p.stack.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 border border-rule px-3.5 py-2 font-mono text-sm transition-colors hover:border-go hover:text-go"
          >
            Read the code on GitHub
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <p className="mt-4 font-mono text-xs leading-loose text-muted">
            Runs with no statements, on the demo data:{' '}
            <code className="bg-paper-2 px-1.5 py-0.5 text-ink-2">{p.tryIt[0]}</code>, then{' '}
            <code className="bg-paper-2 px-1.5 py-0.5 text-ink-2">{p.tryIt[1]}</code>
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
