import { profile, proof, runs } from '@/data/resume'
import { asset } from '@/lib/asset'

/**
 * Proof strip cells. Two columns on mobile, four on desktop: cells opening a
 * row sit flush left, and the rules divide without boxing anything in.
 */
const PROOF_CELL = [
  'border-b border-rule-soft pl-0 sm:border-b-0',
  'border-b border-l border-rule-soft sm:border-b-0',
  'border-b border-rule-soft pl-0 sm:border-b-0 sm:border-l sm:pl-4',
  'border-l border-rule-soft',
]

/**
 * Identity first, evidence second. The run log is still the signature, but it
 * now sits below the claim it proves, and each row links to its case study —
 * so the log doubles as the index for the Work section.
 */
export default function Hero() {
  return (
    <section id="top" className="scroll-mt-0 pt-14 pb-20 sm:pt-20 lg:pt-24">
      <h1>
        <span
          className="display stream block text-[2.85rem] sm:text-[4.25rem] lg:text-[5.25rem]"
          style={{ animationDelay: '40ms' }}
        >
          {profile.name}
        </span>
        <span
          className="display stream mt-5 block text-[1.5rem] leading-[1.15] font-semibold sm:text-[2rem]"
          style={{ animationDelay: '110ms' }}
        >
          {profile.headline[0]} {profile.headline[1]}
          <br />
          <span className="text-go">{profile.headline[2]}</span>
        </span>
      </h1>

      {/* Sentence case, not the tracked caps of .eyebrow — at this length the
          uppercase treatment wraps to four dense lines on a phone. */}
      <p
        className="stream mt-6 max-w-3xl font-mono text-xs leading-relaxed text-muted"
        style={{ animationDelay: '180ms' }}
      >
        {profile.record}
      </p>

      <p
        className="stream mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-2"
        style={{ animationDelay: '240ms' }}
      >
        {profile.subhead}
      </p>

      <dl
        className="stream mt-10 grid grid-cols-2 border-y border-rule sm:grid-cols-4"
        style={{ animationDelay: '310ms' }}
      >
        {proof.map((item, index) => (
          <div key={item.label} className={`py-5 pr-4 ${PROOF_CELL[index]}`}>
            <dt className="font-display text-[1.75rem] leading-none font-bold tracking-tight">
              {item.value}
            </dt>
            <dd className="mt-2 font-mono text-[0.6875rem] tracking-wide text-muted uppercase">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>

      <div
        className="stream mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm"
        style={{ animationDelay: '380ms' }}
      >
        <a
          href={asset(profile.resume)}
          download
          className="border border-rule px-3.5 py-2 transition-colors hover:border-go hover:text-go"
        >
          Download résumé (PDF)
        </a>
        <a href={`mailto:${profile.email}`} className="link-underline">
          {profile.email}
        </a>
        <a href={profile.linkedin} className="link-underline" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} className="link-underline" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      {/* The run log: five completed jobs, each linking to its case study. */}
      <div className="stream mt-16" style={{ animationDelay: '450ms' }}>
        <div className="flex items-center justify-between border-b border-ink pb-2">
          <span className="eyebrow">Completed jobs</span>
          <span className="flex items-center gap-2 font-mono text-[0.6875rem] text-muted">
            <span aria-hidden className="inline-block size-1.5 rounded-full bg-go" />
            5 of 5 successful
          </span>
        </div>

        <ol className="divide-y divide-rule-soft">
          {runs.map((run, index) => (
            <li key={run.id} className="stream" style={{ animationDelay: `${520 + index * 80}ms` }}>
              <a
                href={`#case-${run.id}`}
                className="group grid grid-cols-1 gap-x-6 gap-y-2 py-4 transition-colors hover:bg-paper-2/60 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline"
              >
                <span className="font-mono text-xs text-go">{run.id}</span>

                <div>
                  <p className="font-medium">
                    {run.job}
                    <span
                      aria-hidden
                      className="ml-2 inline-block text-muted transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{run.note}</p>
                </div>

                <div className="font-mono text-sm text-ink-2 sm:text-right">
                  {run.metric}{' '}
                  <span className="text-muted">{run.metricLabel}</span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
