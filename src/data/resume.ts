/**
 * Every word on the site comes from this file. Edit here, nowhere else.
 *
 * Source of record: public/resume.pdf. If a claim is not in that PDF, it does
 * not belong here — a hiring manager who catches one figure the résumé does not
 * support discounts every other figure next to it.
 */

export const profile = {
  name: 'Tanumay Goswami',
  role: 'Automation Engineer',
  location: 'Kolkata, West Bengal',
  email: 'goswamitanumay@gmail.com',
  phone: '+91 7586896907',
  linkedin: 'https://www.linkedin.com/in/tanumaygoswami',
  github: 'https://github.com/tanumay-deb',
  resume: '/resume.pdf',

  // Search results and link previews. Kept short on purpose.
  tagline:
    'Automation engineer. Migrated 200+ enterprise automations to UiPath Cloud Orchestrator with zero business disruption, and built the CI/CD pipeline six global teams deploy through.',

  headline: ['I move enterprise automation', 'to the cloud', 'and keep it running.'],

  // Mono record line under the headline. Carries the title of record verbatim,
  // so nothing here can be caught out against LinkedIn or the résumé it links to.
  record:
    'Automation engineer · PepsiCo GBS India LLP · Process Analytics and Automation Associate Analyst · Aug 2023 — Present',

  subhead:
    'Migration, delivery pipeline, sustain — the part of automation that starts after go-live. Three years of it at PepsiCo: a full-sector move to Cloud Orchestrator, the CI/CD pipeline six global teams deploy through, and production support for everything already running.',

  about: [
    'Most automation work is measured at the demo. Mine is measured a year later — after the framework changed, the servers moved, the team doubled, and the process owner left. That is the part I am good at: taking an estate somebody else built, moving it somewhere better, and having nothing break while it happens.',
    'The pattern repeats across everything below. Find what is actually running, understand why it was built that way, sequence the change so operations never feel it, then leave behind a pipeline and a document so the next person does not have to rediscover any of it.',
  ],
}

/**
 * How he works, drawn from what he actually did rather than from adjectives.
 * Each one traces to a specific piece of work in the case studies.
 */
export const principles = [
  {
    title: 'Migrate in an order the business agrees to',
    body: 'Sequence by business criticality, not by what is easiest to move first, and keep the old path warm until the new one has proved itself in production.',
  },
  {
    title: 'A deployment nobody can trace is a deployment nobody can fix',
    body: 'Code belongs in version control and reaches production through a pipeline. Every release should have an author, a commit and a way back.',
  },
  {
    title: 'Watch it before it breaks',
    body: 'Queues, logs and exception rates on a dashboard beat a business user telling you their report never arrived. Degradation is visible long before an outage is.',
  },
  {
    title: 'Write it down once so it is not investigated twice',
    body: 'A documented root cause and a handover a stranger can follow are worth more than the fix itself, because they are what stops the next person repeating the work.',
  },
]

/**
 * Hero index — five selected jobs. Each id is the anchor of its case study
 * below, so the log doubles as a table of contents for the Work section.
 */
export const runs = [
  {
    id: 'MIG-200',
    job: 'Sector cloud migration',
    metric: '200+',
    metricLabel: 'automations moved',
    note: 'Zero disruption to business operations',
  },
  {
    id: 'CICD-450',
    job: 'CI/CD delivery pipeline',
    metric: '450+',
    metricLabel: 'automations deployed',
    note: 'Deployment time cut from 30 minutes to 5',
  },
  {
    id: 'FSO-650',
    job: 'Employee onboarding scheduler',
    metric: '650+',
    metricLabel: 'events every month',
    note: 'PFNA CIO 2H 2023 Award',
  },
  {
    id: 'DASH-27',
    job: 'Procurement intelligence dashboard',
    metric: '27+',
    metricLabel: 'reports orchestrated',
    note: '80% gain in reporting efficiency',
  },
  {
    id: 'INFRA-130',
    job: 'Bot licence optimisation',
    metric: '$250K',
    metricLabel: 'saved annually',
    note: 'Recognised with a Smile Award',
  },
]

/** At-a-glance credibility, directly under the headline. */
export const proof = [
  { value: '200+', label: 'Automations migrated' },
  { value: '0', label: 'Business disruptions' },
  { value: '450+', label: 'Automations deployed via CI/CD' },
  { value: '$250K', label: 'Saved annually' },
]

/**
 * Case studies. `diagram` names a variant in components/Diagram.tsx.
 * Problem and approach describe the situation the résumé facts imply; every
 * number in `impact` is taken verbatim from the résumé.
 */
export const projects = [
  {
    id: 'RND-SAMPLES',
    title: 'R&D Samples Management System',
    scope: 'Intake and cross-border movement, built end to end',
    diagram: 'samples',
    problem:
      'An R&D sample that has to cross a border is not one process, it is four: someone requests it, someone approves it, someone prepares the import and export paperwork, and someone tracks where it actually is. Run over email and spreadsheets, every handoff adds a wait, and the requester ends up chasing status rather than working.',
    approach:
      'Built one intake on Power Apps so every request enters the same way, orchestrated the approvals and routing in Power Automate, and used UiPath for the repetitive system entry and document handling underneath. The import and export steps were modelled as part of the same workflow rather than as a manual process bolted on at the end.',
    impact: [
      { value: '70%', label: 'cut in processing time' },
      { value: '50%', label: 'less manual communication' },
      { value: '40%', label: 'faster request turnaround' },
    ],
    stack: ['Power Apps', 'Power Automate', 'UiPath', 'SharePoint'],
    value:
      'Requests move on their own instead of being chased, and the requester gets a status they can read rather than an email thread they have to reconstruct.',
  },
  {
    id: 'FSO-650',
    title: 'Employee Onboarding FSO Scheduler',
    scope: 'Award-winning automation for PFNA',
    diagram: 'scheduler',
    problem:
      'Every new hire triggers a series of milestone events that have to land on the right working day. At 650+ events a month this is both a volume problem and a correctness problem: weekends and public holidays shift dates, and a missed milestone is not an abstraction — it is felt by a person in their first week.',
    approach:
      'Automated the full scheduling chain across UiPath, Power Platform, SharePoint and Outlook, with weekend and holiday handling built into the date calculation rather than corrected afterwards. Added real-time exception status so anything that failed to schedule was visible immediately instead of being discovered by the new hire.',
    impact: [
      { value: '650+', label: 'milestone events automated monthly' },
      { value: '70%', label: 'less manual scheduling effort' },
      { value: 'PFNA CIO', label: '2H 2023 Award, Be Consumer Centric' },
    ],
    stack: ['UiPath', 'Power Platform', 'SharePoint', 'Outlook integrations'],
    value:
      'New hires get their milestones on the correct working day without a coordinator maintaining a calendar by hand, and exceptions surface to someone who can fix them while there is still time.',
  },
  {
    id: 'DASH-27',
    title: 'Macro & Commodity Dashboard',
    scope: 'Procurement Intelligence Dashboard',
    diagram: 'dashboard',
    problem:
      'Procurement decisions depend on macro and commodity data spread across public and paid providers, each with its own format, refresh cadence and access method. Assembled by hand, the numbers are already stale by the time the deck is built, and nobody can say with confidence which figures were refreshed this cycle and which were carried over from the last one.',
    approach:
      'Orchestrated 27+ recurring reports from 10+ public and paid sources into a single Procurement Intelligence Dashboard, automating retrieval and consolidation so the dashboard refreshes on a schedule instead of being rebuilt each cycle by whoever owns the deck.',
    impact: [
      { value: '27+', label: 'recurring reports orchestrated' },
      { value: '10+', label: 'public and paid sources' },
      { value: '80%', label: 'gain in reporting efficiency' },
    ],
    stack: ['UiPath', 'Python', 'SQL', 'Power Platform'],
    value:
      'Procurement reads current numbers from one place, and the manual data handling that used to produce them is gone rather than redistributed.',
  },
  {
    id: 'MIG-200',
    title: 'Sector cloud migration',
    scope: 'Owned end to end for a full PepsiCo sector',
    diagram: 'migration',
    problem:
      'A full sector was running 200+ production automations on a legacy UiPath framework, tied to on-premise Orchestrator and an ageing Windows runtime. The framework was going out of support and the runtime had to move, but the automations underneath it were load-bearing — processes business teams depended on daily. A migration that paused operations was not an option, and a big-bang cutover across 200+ solutions was not survivable.',
    approach:
      'Inventoried the estate first, then rebuilt each automation against the Windows-compatible framework and repointed it at Cloud Orchestrator. Work was sequenced by business criticality rather than by ease, so the processes with the least tolerance for downtime moved on a schedule their owners agreed to, with the legacy path kept warm until the replacement had proved itself in production.',
    impact: [
      { value: '200+', label: 'automations migrated' },
      { value: '0', label: 'business disruptions' },
      { value: '1', label: 'full sector, owned end to end' },
    ],
    stack: ['UiPath Studio', 'RE Framework', 'Cloud Orchestrator', 'Windows Migration'],
    value:
      'The sector cleared its unsupported-framework risk and moved onto cloud infrastructure without a single business interruption — and without the parallel-running costs a staged fallback usually incurs.',
  },
  {
    id: 'CICD-450',
    title: 'Automation delivery pipeline',
    scope: 'Platform work adopted by 6 global teams',
    diagram: 'cicd',
    problem:
      'Automation code lived inside Orchestrator and reached production by being published from a developer machine. There was no version history, no review step, and no reliable way to tell which build was live. With six teams shipping across regions, two developers could overwrite each other and only find out when a process failed in production. Each deployment took around thirty minutes of manual work.',
    approach:
      'Moved the automation codebases out of Orchestrator and into Git, then built CI/CD pipelines in Azure DevOps to package and promote them through environments. Publishing became a pipeline run against a reviewed commit instead of a manual action, which gave every deployment a version, an author and a rollback point.',
    impact: [
      { value: '450+', label: 'automations deployed through the pipeline' },
      { value: '30 → 5', label: 'minutes to deploy an automation' },
      { value: '6', label: 'global teams on one delivery path' },
    ],
    stack: ['Azure DevOps', 'Git', 'CI/CD', 'Orchestrator', 'UiPath Studio'],
    value:
      'Releases became repeatable and auditable across six regions, and six times faster to run. A failed deployment can be traced to a commit and rolled back, instead of being diagnosed from scratch against a live process.',
  },
  {
    id: 'INFRA-130',
    title: 'Infrastructure and licence optimisation',
    scope: 'Cost review across the automation estate',
    diagram: null,
    problem:
      'Bot licences accumulate faster than they are retired. Every decommissioned process, every pilot that did not proceed, and every over-provisioned environment leaves a licence attached to it — and licences renew whether or not anything is running on them.',
    approach:
      'Audited actual utilisation across the estate against what was provisioned, separated genuinely idle capacity from seasonal and low-frequency workloads, and decommissioned what was confirmed unused. The point was to cut cost without cutting headroom the business would need back.',
    impact: [
      { value: '130+', label: 'bot licences decommissioned' },
      { value: '$250K', label: 'saved annually' },
    ],
    stack: ['UiPath Insights', 'Orchestrator', 'Capacity analysis'],
    value:
      '$250,000 a year returned to the business as recurring savings, from infrastructure that was being paid for and not used.',
  },
  {
    id: 'GCC-80',
    title: 'Build-to-sustain transition',
    scope: '6 sector teams onboarded as the group scaled into a GCC',
    diagram: null,
    problem:
      'A regional RPA team was scaling into a Global Capability Centre serving six sectors. Processes built by regional teams had to become processes a central team could support — which is a documentation and handover problem long before it is a technical one. Undocumented automation transferred between teams becomes unsupportable automation.',
    approach:
      'Transitioned processes from development into sustain with complete documentation and support readiness for each, so the receiving team inherited a runnable, diagnosable product rather than a codebase. Onboarded six sector teams onto the shared way of working.',
    impact: [
      { value: '80+', label: 'processes moved from build to sustain' },
      { value: '6', label: 'sector teams onboarded' },
    ],
    stack: ['Process transition', 'Documentation', 'Support readiness', 'Orchestrator'],
    value:
      'Six sectors ended up supported from one capability centre, with each transferred process documented well enough to be run by people who had never built it.',
  },
  {
    id: 'SUSTAIN',
    title: 'Sustain operations and governance',
    scope: 'Standing ownership of live automation products',
    diagram: null,
    problem:
      'Automation in production fails quietly. A queue backs up, an exception rate creeps, a scheduled job silently stops firing — and the first anyone hears of it is a business user asking where their report is. Reactive support means every incident is discovered late and diagnosed from nothing.',
    approach:
      'Ran monitoring on UiPath Insights dashboards tracking logs, queues and exceptions in real time, so degradation was visible before it became an outage, and owned incident resolution and break-fix through to closure. Standardised the aftermath as well as the response: authored four Knowledge Base articles on PepsiCo ServiceNow and created the RCA template the team now uses org-wide.',
    impact: [
      { value: '4', label: 'Knowledge Base articles published' },
      { value: 'Org-wide', label: 'RCA template adoption' },
    ],
    stack: ['UiPath Insights', 'ServiceNow', 'Incident Management', 'RCA', 'Production Support'],
    value:
      'Incidents were caught from dashboards rather than from complaints, and each one produced a reusable artefact — so the same root cause did not need investigating twice by two different people.',
  },
]

/**
 * Experience grouped by what he owned rather than replayed as résumé bullets.
 * The detail lives in the case studies; this is the shape of the role.
 */
export const experience = {
  org: 'PepsiCo GBS India LLP',
  title: 'Process Analytics and Automation Associate Analyst (RPA / Automation Engineer)',
  period: 'Aug 2023 — Present',
  location: 'Kolkata, India',
  intro:
    'One role, three years, four things that are mine to own. The job title says analyst; the work is platform ownership — the estate, the pipeline that ships to it, and the operations that keep it alive.',
  areas: [
    {
      area: 'Delivery',
      summary:
        'Built the CI/CD pipeline six global teams now deploy through and moved automation codebases from Orchestrator into Git. 450+ automations have shipped through it, with deployment time per automation down from 30 minutes to 5.',
      link: 'CICD-450',
    },
    {
      area: 'Migration',
      summary:
        'Owned cloud migration for an entire sector — 200+ automations off the legacy UiPath framework onto a Windows-compatible framework and Cloud Orchestrator, with zero disruption to business operations.',
      link: 'MIG-200',
    },
    {
      area: 'Build',
      summary:
        'Delivered the products behind the numbers: an R&D samples system spanning intake and cross-border movement, an onboarding scheduler handling 650+ milestone events a month, and a procurement dashboard consolidating 27+ recurring reports.',
      link: 'RND-SAMPLES',
    },
    {
      area: 'Sustain & governance',
      summary:
        'Owns monitoring, incident resolution and break-fix for live automation products on UiPath Insights. Decommissioned 130+ idle licences for $250K in annual savings, and standardised how the team documents and investigates — four ServiceNow Knowledge Base articles and the org-wide RCA template.',
      link: 'SUSTAIN',
    },
  ],
}

export const education = {
  org: 'Vellore Institute of Technology',
  title: 'B.Tech, Computer Science and Engineering',
  period: 'Jun 2019 — May 2023',
  location: 'Vellore, Tamil Nadu',
}

export const skills = [
  {
    group: 'Intelligent automation',
    items: ['UiPath Studio', 'RE Framework', 'Orchestrator', 'Automation Hub', 'UiPath Insights'],
  },
  {
    group: 'Microsoft platform',
    items: ['Power Apps', 'Power Automate', 'SharePoint', 'Outlook integrations'],
  },
  {
    group: 'AI & OCR',
    items: ['Agentic AI', 'Document Understanding'],
  },
  {
    group: 'Programming',
    items: ['Python', 'SQL', 'Exception handling'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['Azure DevOps', 'Git', 'CI/CD', 'Windows Migration'],
  },
  {
    group: 'Enterprise tools',
    items: [
      'ServiceNow',
      'Incident Management',
      'Production Support',
      'RCA',
      'Knowledge Base governance',
    ],
  },
]

export const awards = [
  {
    title: 'PFNA CIO Award',
    year: '2H 2023',
    citation: 'Be Consumer Centric',
    detail: 'For leading the FSO Scheduler automation.',
  },
  {
    title: 'Bold & Better Award',
    year: '2025',
    citation: 'Two-time recipient',
    detail: 'For strategic and transformation impact.',
  },
  {
    title: 'Smile Award',
    year: '',
    citation: 'Infrastructure optimisation',
    detail: 'For infrastructure and server optimisation, and high-impact Knowledge Base authorship.',
  },
]

export const certifications = [
  { title: 'Automation Developer Associate', issuer: 'UiPath Certified Professional', code: '' },
  { title: 'Automation Business Analyst Associate', issuer: 'UiPath Certified Professional', code: '' },
  { title: 'Power Platform Developer Associate', issuer: 'Microsoft', code: 'PL-400' },
  { title: 'Azure Fundamentals', issuer: 'Microsoft', code: 'AZ-900' },
]

export const sections = [
  { id: 'top', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
