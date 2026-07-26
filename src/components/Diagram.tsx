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
      desc="Before: UiPath Studio on the legacy REFramework publishes to an on-premise Orchestrator, which runs automations on Windows Server bot runners. After: Studio on the Windows-compatible framework publishes to UiPath Cloud Orchestrator, which runs them on cloud-managed runners. The cutover was sequenced by business criticality, and 200 or more automations moved with zero business disruption."
      viewBox="0 0 800 292"
    >
      <BandHeader y={10} left="Before" right="200+ automations · legacy framework, out of support" />
      <Box x={0} y={26} w={235} h={62} title="UiPath Studio" sub="legacy REFramework" tone="faded" />
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
    { title: '6 global teams', sub: '450+ deployments' },
  ]
  const w = 140
  const gap = 25
  return (
    <Frame
      caption="Delivery pipeline — from a developer machine to a reviewed, versioned release"
      label="diagram-cicd"
      minWidth="min-w-[760px]"
      desc="Automations are authored in UiPath Studio, committed to Git for version history and review, built and packaged by an Azure DevOps pipeline, promoted through Orchestrator development, test and production environments, and consumed by six global teams. Over 450 deployments have shipped through this path. It replaced publishing directly from a developer machine to Orchestrator, which had no version history, no review step and no rollback point."
      viewBox="0 0 800 176"
    >
      <BandHeader y={10} left="Automation delivery pipeline" right="450+ deployments · 6 teams" tone="go" />

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

function AgenticDiagram() {
  return (
    <Frame
      caption="Agentic automation — decisioning inside a live workflow"
      label="diagram-agentic"
      minWidth="min-w-[760px]"
      desc="A business trigger starts an agentic automation that decides its own next step, using Document Understanding and Azure Cognitive Services to interpret inputs. Cases the agent resolves complete autonomously and are logged to UiPath Insights. Cases it cannot resolve are raised through the existing exception path to human review, rather than being guessed at."
      viewBox="0 0 800 214"
    >
      <BandHeader y={10} left="Agentic automation" right="3 running in production" tone="go" />

      <Box x={0} y={70} w={130} h={56} title="Business" sub="trigger" />
      <ArrowRight from={134} to={164} y={98} />

      <rect x={168} y={38} width={250} height={120} fill={SURFACE} stroke={INK} strokeWidth="1" />
      <text x={293} y={64} textAnchor="middle" fontFamily={MONO} fontSize="12.5" fill={INK}>
        Agent
      </text>
      <text x={293} y={82} textAnchor="middle" fontFamily={MONO} fontSize="10.5" fill={MUTED}>
        decides its own next step
      </text>
      <line x1={188} y1={100} x2={398} y2={100} stroke={RULE} strokeWidth="1" />
      <text x={293} y={120} textAnchor="middle" fontFamily={MONO} fontSize="10.5" fill={MUTED}>
        Document Understanding
      </text>
      <text x={293} y={138} textAnchor="middle" fontFamily={MONO} fontSize="10.5" fill={MUTED}>
        Azure Cognitive Services
      </text>

      {/* Split: resolved above, exception below. */}
      <line x1={418} y1={98} x2={442} y2={98} stroke={RULE} strokeWidth="1" />
      <line x1={442} y1={50} x2={442} y2={154} stroke={RULE} strokeWidth="1" />
      <ArrowRight from={442} to={466} y={50} />
      <ArrowRight from={442} to={466} y={154} />

      <Box x={470} y={24} w={150} h={52} title="Resolved" sub="no human needed" />
      <Box x={470} y={128} w={150} h={52} title="Exception" sub="ambiguous case" />

      <ArrowRight from={624} to={654} y={50} />
      <ArrowRight from={624} to={654} y={154} />

      <Box x={658} y={24} w={142} h={52} title="Completed" sub="logged to Insights" tone="go" />
      <Box x={658} y={128} w={142} h={52} title="Human review" sub="existing path" />
    </Frame>
  )
}

export default function Diagram({ kind }: { kind: string }) {
  if (kind === 'migration') return <MigrationDiagram />
  if (kind === 'cicd') return <CicdDiagram />
  if (kind === 'agentic') return <AgenticDiagram />
  return null
}
