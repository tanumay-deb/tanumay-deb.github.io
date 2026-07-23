import { profile, runs } from '@/data/resume'
import { asset } from '@/lib/asset'

/**
 * The signature: a career rendered as an orchestrator run log. Every row is a
 * real outcome, reported the way the systems he maintains report a finished job.
 */
export default function Hero() {
  return (
    <section id="top" className="scroll-mt-0 pt-14 pb-20 sm:pt-20 lg:pt-28">
      <p className="eyebrow stream" style={{ animationDelay: '40ms' }}>
        Run log — Aug 2023 to Jun 2026
      </p>

      <h1
        className="display stream mt-5 text-[2.6rem] sm:text-6xl lg:text-[4.25rem]"
        style={{ animationDelay: '110ms' }}
      >
        200+ automations
        <br />
        moved to the cloud.
        <br />
        <span className="text-go">Zero disruption.</span>
      </h1>

      <p
        className="stream mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-2"
        style={{ animationDelay: '190ms' }}
      >
        {profile.summary}
      </p>

      <div
        className="stream mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm"
        style={{ animationDelay: '260ms' }}
      >
        <a href={`mailto:${profile.email}`} className="link-underline">
          {profile.email}
        </a>
        <a href={profile.github} className="link-underline" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} className="link-underline" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={asset(profile.resume)} className="link-underline" download>
          Résumé (PDF)
        </a>
      </div>

      {/* The feed */}
      <div className="stream mt-16" style={{ animationDelay: '340ms' }}>
        <div className="flex items-center justify-between border-b border-ink pb-2">
          <span className="eyebrow">Completed jobs</span>
          <span className="flex items-center gap-2 font-mono text-[0.6875rem] text-muted">
            <span aria-hidden className="live-dot inline-block size-1.5 rounded-full bg-go" />
            5 of 5 successful
          </span>
        </div>

        <ol className="divide-y divide-rule-soft">
          {runs.map((run, index) => (
            <li
              key={run.id}
              className="stream group grid grid-cols-1 gap-x-6 gap-y-3 py-5 transition-colors hover:bg-paper-2/60 sm:grid-cols-[7rem_1fr_auto] sm:items-baseline"
              style={{ animationDelay: `${420 + index * 90}ms` }}
            >
              <span className="font-mono text-xs text-muted">{run.id}</span>

              <div>
                <p className="text-base font-medium">{run.job}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{run.detail}</p>
                <p className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="chip">
                    <span aria-hidden className="inline-block size-1.5 rounded-full bg-go" />
                    {run.status}
                  </span>
                  <span className="font-mono text-xs text-muted">{run.note}</span>
                </p>
              </div>

              <div className="sm:text-right">
                <span className="font-display block text-2xl font-bold tracking-tight sm:text-[1.75rem]">
                  {run.metric}
                </span>
                <span className="font-mono text-[0.6875rem] tracking-wide text-muted uppercase">
                  {run.metricLabel}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
