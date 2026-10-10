/**
 * Architecture diagrams, hand-authored SVG. No runtime dependency, no images.
 *
 * Colours come from the CSS custom properties in globals.css — inline SVG
 * inherits them, so the diagrams stay in step with the palette automatically.
 *
 * Each diagram is drawn at a fixed width and scrolls horizontally on small
 * screens rather than scaling down, because scaled-down 11px labels are
 * unreadable. The wrapper owns the scroll; the page never scrolls sideways.
 */

const RULE = 'var(--color-rule)'
const INK = 'var(--color-ink)'
const MUTED = 'var(--color-muted)'
const GO = 'var(--color-go)'
const SURFACE = 'var(--color-surface)'
const PAPER = 'var(--color-paper)'
const MONO = 'var(--font-mono)'

/** A labelled node. `tone="go"` marks the successful end state. */
function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  tone = 'default',
}: {
  x: number
  y: number
  w: number
  h: number
  title: string
  sub?: string
  tone?: 'default' | 'go' | 'faded'
}) {
  const stroke = tone === 'go' ? GO : RULE
  const titleFill = tone === 'go' ? GO : INK
  const cx = x + w / 2
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={tone === 'faded' ? PAPER : SURFACE}
        stroke={stroke}
        strokeWidth="1"
      />
      <text
        x={cx}
        y={sub ? y + h / 2 - 4 : y + h / 2 + 4}
        textAnchor="middle"
        fontFamily={MONO}
        fontSize="12.5"
        fill={titleFill}
      >
        {title}
      </text>
      {sub ? (
        <text x={cx} y={y + h / 2 + 14} textAnchor="middle" fontFamily={MONO} fontSize="10.5" fill={MUTED}>
          {sub}
        </text>
      ) : null}
    </g>
  )
}

/** Horizontal connector with an arrowhead on the right. */
function ArrowRight({ from, to, y }: { from: number; to: number; y: number }) {
  return (
    <g>
      <line x1={from} y1={y} x2={to - 6} y2={y} stroke={RULE} strokeWidth="1" />
      <polygon points={`${to},${y} ${to - 7},${y - 4} ${to - 7},${y + 4}`} fill={RULE} />
    </g>
  )
}

/** Vertical connector with an arrowhead at the bottom. */
function ArrowDown({ x, from, to, dashed = false }: { x: number; from: number; to: number; dashed?: boolean }) {
  return (
    <g>
      <line
        x1={x}
        y1={from}
        x2={x}
        y2={to - 6}
        stroke={RULE}
        strokeWidth="1"
        strokeDasharray={dashed ? '3 3' : undefined}
      />
      <polygon points={`${x},${to} ${x - 4},${to - 7} ${x + 4},${to - 7}`} fill={RULE} />
    </g>
  )
}

/** Mono band header: label left, result right. */
function BandHeader({
  y,
  left,
  right,
  tone = 'muted',
  width = 800,
}: {
  y: number
  left: string
  right?: string
  tone?: 'muted' | 'go'
  width?: number
}) {
  return (
    <g>
      <text x={0} y={y} fontFamily={MONO} fontSize="10.5" letterSpacing="1.4" fill={MUTED}>
        {left.toUpperCase()}
      </text>
      {right ? (
        <text
          x={width}
          y={y}
          textAnchor="end"
          fontFamily={MONO}
          fontSize="10.5"
          fill={tone === 'go' ? GO : MUTED}
        >
          {right}
        </text>
      ) : null}
    </g>
  )
}

function Frame({
  caption,
  label,
  desc,
  viewBox,
  minWidth,
  children,
}: {
  caption: string
  label: string
  desc: string
  viewBox: string
  minWidth: string
  children: React.ReactNode
}) {
  const titleId = `${label}-title`
  const descId = `${label}-desc`
  return (
    <figure className="mt-8">
      <div className="overflow-x-auto border border-rule bg-paper p-5 sm:p-7">
        <svg
          viewBox={viewBox}
          className={`h-auto w-full ${minWidth}`}
          role="img"
          aria-labelledby={`${titleId} ${descId}`}
        >
          <title id={titleId}>{caption}</title>
          <desc id={descId}>{desc}</desc>
          {children}
        </svg>
      </div>
      <figcaption className="eyebrow mt-3">{caption}</figcaption>
    </figure>
  )
}

function MigrationDiagram() {
  return (
    <Frame
      caption="Migration path — legacy on-premise framework to Cloud Orchestrator"
      label="diagram-migration"
      minWidth="min-w-[720px]"
      desc="Before: UiPath Studio on the legacy RE Framework publishes to an on-premise Orchestrator, which runs automations on Windows Server bot runners. After: Studio on the Windows-compatible framework publishes to UiPath Cloud Orchestrator, which runs them on cloud-managed runners. The cutover was sequenced by business criticality, and 200 or more automations moved with zero business disruption."
      viewBox="0 0 800 292"
    >
      <BandHeader y={10} left="Before" right="200+ automations · legacy framework, out of support" />
      <Box x={0} y={26} w={235} h={62} title="UiPath Studio" sub="legacy RE Framework" tone="faded" />
      <ArrowRight from={245} to={273} y={57} />
      <Box x={283} y={26} w={234} h={62} title="On-prem Orchestrator" sub="self-hosted" tone="faded" />
      <ArrowRight from={527} to={555} y={57} />
      <Box x={565} y={26} w={235} h={62} title="Windows Server runners" sub="ageing runtime" tone="faded" />

      <ArrowDown x={117} from={88} to={168} dashed />
      <ArrowDown x={400} from={88} to={168} dashed />
      <ArrowDown x={682} from={88} to={168} dashed />

      {/* Cutover marker knocks out the middle connector. */}
      <rect x={252} y={116} width={296} height={22} fill={PAPER} />
      <text x={400} y={131} textAnchor="middle" fontFamily={MONO} fontSize="10.5" fill={MUTED}>
        sequenced by business criticality
      </text>

      <BandHeader y={190} left="After" right="0 business disruptions" tone="go" />
      <Box x={0} y={206} w={235} h={62} title="UiPath Studio" sub="Windows-compatible framework" />
      <ArrowRight from={245} to={273} y={237} />
      <Box x={283} y={206} w={234} h={62} title="Cloud Orchestrator" sub="UiPath-managed" tone="go" />
      <ArrowRight from={527} to={555} y={237} />
      <Box x={565} y={206} w={235} h={62} title="Cloud-managed runners" sub="supported runtime" />
    </Frame>
  )
}

function CicdDiagram() {
  const stages = [
    { title: 'UiPath Studio', sub: 'author' },
    { title: 'Git', sub: 'version + review' },
    { title: 'Azure DevOps', sub: 'build · package' },
    { title: 'Orchestrator', sub: 'dev → test → prod' },
    { title: '6 global teams', sub: '450+ automations' },
  ]
  const w = 140
  const gap = 25
  return (
    <Frame
      caption="Delivery pipeline — from a developer machine to a reviewed, versioned release"
      label="diagram-cicd"
      minWidth="min-w-[760px]"
      desc="Automations are authored in UiPath Studio, committed to Git for version history and review, built and packaged by an Azure DevOps pipeline, promoted through Orchestrator development, test and production environments, and consumed by six global teams. Over 450 automations have shipped through this path, and deployment time per automation fell from about thirty minutes to five. It replaced publishing directly from a developer machine to Orchestrator, which had no version history, no review step and no rollback point."
      viewBox="0 0 800 176"
    >
      <BandHeader y={10} left="Automation delivery pipeline" right="450+ automations · 30 min → 5" tone="go" />

      {stages.map((stage, index) => {
        const x = index * (w + gap)
        const isLast = index === stages.length - 1
        return (
          <g key={stage.title}>
            <Box x={x} y={28} w={w} h={70} title={stage.title} sub={stage.sub} tone={isLast ? 'go' : 'default'} />
            {!isLast ? <ArrowRight from={x + w + 4} to={x + w + gap - 4} y={63} /> : null}
          </g>
        )
      })}

      <line x1={0} y1={128} x2={800} y2={128} stroke={RULE} strokeWidth="1" />
      <text x={0} y={150} fontFamily={MONO} fontSize="10.5" letterSpacing="1.4" fill={MUTED}>
        REPLACED
      </text>
      <text x={78} y={150} fontFamily={MONO} fontSize="11" fill={MUTED}>
        publish direct from a developer machine — no version history, no review, no rollback point
      </text>
    </Frame>
  )
}

/** Four stages across the full width, evenly gapped. */
const STAGE_W = 182
const STAGE_X = [0, 206, 412, 618]

function SamplesDiagram() {
  const stages = [
    { title: 'Request', sub: 'Power Apps intake' },
    { title: 'Approval', sub: 'Power Automate' },
    { title: 'Import / export', sub: 'documentation' },
    { title: 'Dispatch', sub: 'and tracking' },
  ]
  return (
    <Frame
      caption="R&D samples — one workflow from request to cross-border dispatch"
      label="diagram-samples"
      minWidth="min-w-[740px]"
      desc="A sample request is submitted through a Power Apps intake, routed for approval by Power Automate, carried through import and export documentation, and then dispatched and tracked. UiPath performs the repetitive system entry and document handling beneath every stage. Processing time fell 70 percent, manual communication 50 percent, and request turnaround 40 percent."
      viewBox="0 0 800 172"
    >
      <BandHeader y={10} left="R&D sample request" right="70% faster processing" tone="go" />

      {stages.map((stage, index) => {
        const x = STAGE_X[index]
        const isLast = index === stages.length - 1
        return (
          <g key={stage.title}>
            <Box
              x={x}
              y={26}
              w={STAGE_W}
              h={64}
              title={stage.title}
              sub={stage.sub}
              tone={isLast ? 'go' : 'default'}
            />
            {!isLast ? <ArrowRight from={x + STAGE_W + 4} to={x + STAGE_W + 20} y={58} /> : null}
          </g>
        )
      })}

      {/* The automation layer running beneath every stage. */}
      {STAGE_X.map((x) => (
        <ArrowDown key={x} x={x + STAGE_W / 2} from={90} to={112} dashed />
      ))}
      <rect x={0} y={114} width={800} height={38} fill={PAPER} stroke={RULE} strokeWidth="1" />
      <text x={400} y={138} textAnchor="middle" fontFamily={MONO} fontSize="11" fill={MUTED}>
        UiPath · system entry and document handling beneath every stage
      </text>
    </Frame>
  )
}

function SchedulerDiagram() {
  const stages = [
    { title: 'New hire', sub: 'record created' },
    { title: 'Milestones', sub: 'calculated' },
    { title: 'Business day', sub: 'weekend + holiday' },
    { title: 'Events created', sub: 'Outlook · SharePoint' },
  ]
  return (
    <Frame
      caption="Onboarding scheduler — milestones placed on the correct working day"
      label="diagram-scheduler"
      minWidth="min-w-[740px]"
      desc="A new hire record triggers milestone calculation. Each date is adjusted for weekends and public holidays before events are created in Outlook and SharePoint. Anything that fails to schedule is surfaced as a real-time exception rather than being discovered by the new hire. Over 650 milestone events are scheduled every month, cutting manual scheduling effort by 70 percent."
      viewBox="0 0 800 196"
    >
      <BandHeader y={10} left="Onboarding milestones" right="650+ events every month" tone="go" />

      {stages.map((stage, index) => {
        const x = STAGE_X[index]
        const isLast = index === stages.length - 1
        return (
          <g key={stage.title}>
            <Box
              x={x}
              y={26}
              w={STAGE_W}
              h={64}
              title={stage.title}
              sub={stage.sub}
              tone={isLast ? 'go' : 'default'}
            />
            {!isLast ? <ArrowRight from={x + STAGE_W + 4} to={x + STAGE_W + 20} y={58} /> : null}
          </g>
        )
      })}

      {/* Anything that fails to schedule surfaces instead of going missing. */}
      <ArrowDown x={STAGE_X[2] + STAGE_W / 2} from={90} to={128} dashed />
      <ArrowDown x={STAGE_X[3] + STAGE_W / 2} from={90} to={128} dashed />
      <Box
        x={STAGE_X[2]}
        y={130}
        w={STAGE_W * 2 + 24}
        h={46}
        title="Exception status"
        sub="surfaced in real time, not discovered on day one"
      />
    </Frame>
  )
}

function DashboardDiagram() {
  const sources = ['Public data feeds', 'Paid providers', 'Internal systems', 'Scheduled exports']
  const srcW = 176
  const srcH = 32
  const srcY = [22, 62, 102, 142]
  const junction = 262
  return (
    <Frame
      caption="Procurement intelligence — many sources, one scheduled refresh"
      label="diagram-dashboard"
      minWidth="min-w-[740px]"
      desc="More than ten public, paid and internal sources feed a scheduled orchestration that assembles over 27 recurring reports and publishes them into a single Procurement Intelligence Dashboard. The dashboard refreshes on a schedule instead of being rebuilt by hand each cycle, an 80 percent gain in reporting efficiency."
      viewBox="0 0 800 210"
    >
      <BandHeader y={10} left="Macro & commodity data" right="80% gain in reporting efficiency" tone="go" />

      {sources.map((source, index) => (
        <g key={source}>
          <rect
            x={0}
            y={srcY[index]}
            width={srcW}
            height={srcH}
            fill={SURFACE}
            stroke={RULE}
            strokeWidth="1"
          />
          <text
            x={srcW / 2}
            y={srcY[index] + srcH / 2 + 4}
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="11"
            fill={INK}
          >
            {source}
          </text>
          {/* Fan in to a single junction before the orchestration box. */}
          <polyline
            points={`${srcW},${srcY[index] + srcH / 2} ${junction},${srcY[index] + srcH / 2} ${junction},108`}
            fill="none"
            stroke={RULE}
            strokeWidth="1"
          />
        </g>
      ))}
      <text x={0} y={192} fontFamily={MONO} fontSize="10.5" fill={MUTED}>
        10+ public and paid sources in total
      </text>

      <ArrowRight from={junction} to={296} y={108} />
      <Box
        x={300}
        y={76}
        w={196}
        h={64}
        title="Orchestration"
        sub="27+ recurring reports"
      />
      <ArrowRight from={500} to={532} y={108} />
      <Box
        x={536}
        y={76}
        w={264}
        h={64}
        title="Procurement Intelligence"
        sub="one dashboard, refreshed on schedule"
        tone="go"
      />
    </Frame>
  )
}

function PipelineDiagram() {
  const stages = [
    { title: 'Gmail', sub: 'IMAP fetch, dedupe' },
    { title: 'Decrypt + parse', sub: 'HDFC · ICICI · SBI' },
    { title: 'Reconcile', sub: 'vs printed totals' },
    { title: 'Categorise', sub: 'spend engine' },
    { title: 'Power BI', sub: '5 pages, 21 measures' },
  ]
  const daily = [
    { title: 'Task Scheduler', sub: 'daily, unattended' },
    { title: 'Refresh', sub: 'via UI Automation' },
    { title: 'Alert email', sub: 'each item told once' },
    { title: 'Backups', sub: 'OneDrive + disk' },
  ]
  const w = 140
  const gap = 25
  const dW = 185
  const dGap = 20
  return (
    <Frame
      caption="Statement pipeline — encrypted PDF in, refreshed dashboard out"
      label="diagram-pipeline"
      minWidth="min-w-[760px]"
      desc="Statements are fetched from Gmail over IMAP, deduplicated and routed to the right card, then decrypted and read by a parser per bank for HDFC, ICICI and SBI. Every statement is reconciled against the bank's printed totals before a spend engine categorises it, and the results feed a five-page Power BI dashboard. A Windows scheduled job runs the whole chain daily, refreshes Power BI Desktop through UI Automation, sends an alert email, and writes incremental backups. Passwords live in Windows Credential Manager."
      viewBox="0 0 800 212"
    >
      <BandHeader y={10} left="Pipeline" right="64 of 64 statements reconciled" tone="go" />

      {stages.map((stage, index) => {
        const x = index * (w + gap)
        const isLast = index === stages.length - 1
        return (
          <g key={stage.title}>
            <Box
              x={x}
              y={26}
              w={w}
              h={70}
              title={stage.title}
              sub={stage.sub}
              tone={isLast ? 'go' : 'default'}
            />
            {!isLast ? <ArrowRight from={x + w + 4} to={x + w + gap - 4} y={61} /> : null}
          </g>
        )
      })}

      <line x1={0} y1={124} x2={800} y2={124} stroke={RULE} strokeWidth="1" />
      <text x={0} y={146} fontFamily={MONO} fontSize="10.5" letterSpacing="1.4" fill={MUTED}>
        RUNS ITSELF
      </text>

      {daily.map((item, index) => (
        <Box
          key={item.title}
          x={index * (dW + dGap)}
          y={158}
          w={dW}
          h={44}
          title={item.title}
          sub={item.sub}
        />
      ))}
    </Frame>
  )
}

export default function Diagram({ kind }: { kind: string }) {
  if (kind === 'migration') return <MigrationDiagram />
  if (kind === 'cicd') return <CicdDiagram />
  if (kind === 'samples') return <SamplesDiagram />
  if (kind === 'scheduler') return <SchedulerDiagram />
  if (kind === 'dashboard') return <DashboardDiagram />
  if (kind === 'pipeline') return <PipelineDiagram />
  return null
}
