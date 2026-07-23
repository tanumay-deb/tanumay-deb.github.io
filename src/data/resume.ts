/**
 * Every word on the site comes from this file. Edit here, nowhere else.
 */

export const profile = {
  name: 'Tanumay Goswami',
  role: 'Automation Engineer',
  location: 'Kolkata, West Bengal',
  email: 'goswamitanumay@gmail.com',
  phone: '+91 7586896907',
  linkedin: 'https://www.linkedin.com/in/tanumaygoswami',
  github: 'https://github.com/tanumay-deb',
  // Drop your PDF at public/resume.pdf to make the download link live.
  resume: '/resume.pdf',
  tagline: 'I move enterprise automation to the cloud without anyone noticing.',
  summary:
    'Nearly three years building enterprise-scale intelligent automation at PepsiCo — UiPath, Agentic AI, Power Platform, Python, SQL, and Azure. I led a full-sector migration of 200+ automations to Cloud Orchestrator with zero business disruption, put 450+ deployments through a CI/CD pipeline across six global teams, shipped Agentic AI into live workflows, and cut roughly $250K a year out of automation infrastructure.',
  about: [
    'Most of my work happens after the demo. An automation is easy to build and hard to keep alive across six global teams, a framework migration, a Windows upgrade, and a move to the cloud — so that is where I spend my time: migration, delivery pipelines, sustain operations, and the governance that keeps all three from drifting.',
    'The through-line is making automation boring in the best way. Predictable deployments, monitored queues, documented handoffs, and infrastructure sized to what is actually running.',
  ],
}

/**
 * The hero feed. Each entry is a real outcome from the resume, framed the way
 * an orchestrator reports a completed job. `metric` is the number that matters.
 */
export const runs = [
  {
    id: 'MIG-200',
    job: 'Sector cloud migration',
    detail: 'Legacy UiPath framework → Windows-compatible framework on Cloud Orchestrator',
    metric: '200+',
    metricLabel: 'automations moved',
    status: 'Successful',
    note: 'Zero disruption to business operations',
  },
  {
    id: 'CICD-450',
    job: 'CI/CD delivery pipeline',
    detail: 'Automation codebases migrated from Orchestrator to Git repositories',
    metric: '450+',
    metricLabel: 'deployments shipped',
    status: 'Successful',
    note: 'Live across 6 global teams',
  },
  {
    id: 'AGENT-03',
    job: 'Agentic AI in production',
    detail: 'Autonomous decision-making introduced into live business workflows',
    metric: '3',
    metricLabel: 'agentic automations',
    status: 'Successful',
    note: 'Built on UiPath agentic capabilities',
  },
  {
    id: 'INFRA-130',
    job: 'Bot licence optimisation',
    detail: '130+ underutilised licences decommissioned through infrastructure review',
    metric: '$250K',
    metricLabel: 'saved annually',
    status: 'Successful',
    note: 'Recognised with a Smile Award',
  },
  {
    id: 'GCC-80',
    job: 'Regional RPA team → Global Capability Centre',
    detail: '6 sector teams onboarded; processes transitioned from build to sustain',
    metric: '80+',
    metricLabel: 'processes handed over',
    status: 'Successful',
    note: 'Full documentation and support readiness',
  },
]

/**
 * Derived from the achievements on the resume — there was no separate projects
 * section. Add links, screenshots, and specifics as you get clearance to share them.
 */
export const projects = [
  {
    title: 'Cloud Orchestrator migration',
    scope: 'Owned end to end for a full PepsiCo sector',
    body: 'Moved 200+ production automations off a legacy UiPath framework onto a Windows-compatible framework running on Cloud Orchestrator. Sequenced by business criticality so live operations never paused — the migration finished with zero disruption.',
    stack: ['UiPath Studio', 'REFramework', 'Cloud Orchestrator', 'Windows Migration'],
    outcomes: ['200+ automations migrated', '0 business disruptions'],
  },
  {
    title: 'Automation delivery pipeline',
    scope: 'Platform work for 6 global teams',
    body: 'Replaced hand-run Orchestrator publishing with CI/CD. Automation codebases moved into Git, deployments became repeatable and reviewable, and six sector teams now ship through the same pipeline.',
    stack: ['Azure DevOps', 'Git', 'CI/CD', 'Orchestrator'],
    outcomes: ['450+ deployments through the pipeline', '6 teams on one delivery path'],
  },
  {
    title: 'Agentic AI automations',
    scope: 'Three solutions running in live workflows',
    body: 'Built and deployed production automations using UiPath agentic capabilities, giving workflows the ability to make decisions autonomously instead of routing every branch back to a human.',
    stack: ['Agentic AI', 'UiPath', 'Document Understanding', 'Azure Cognitive Services'],
    outcomes: ['3 agentic automations in production', 'Autonomous decisioning in live processes'],
  },
  {
    title: 'FSO Scheduler',
    scope: 'Award-winning automation for PFNA',
    body: 'Led the FSO Scheduler automation, recognised with the PFNA CIO 2H 2023 award under the "Be Consumer Centric" pillar.',
    stack: ['UiPath', 'Power Automate', 'SharePoint'],
    outcomes: ['PFNA CIO 2H 2023 Award'],
  },
  {
    title: 'Infrastructure optimisation',
    scope: 'Cost and capacity review across the estate',
    body: 'Audited bot utilisation across the automation estate and decommissioned 130+ licences that were provisioned but idle, resizing infrastructure to what was actually running.',
    stack: ['UiPath Insights', 'Orchestrator', 'Capacity analysis'],
    outcomes: ['130+ licences decommissioned', '~$250,000 saved per year'],
  },
  {
    title: 'Sustain operations and governance',
    scope: 'Standing ownership of live automation products',
    body: 'Ran proactive monitoring, incident resolution, and break-fix for production automations on UiPath Insights dashboards tracking logs, queues, and exceptions in real time. Authored four Knowledge Base articles on PepsiCo ServiceNow and wrote the RCA template now used across the Process Analytics and Automation team.',
    stack: ['UiPath Insights', 'ServiceNow', 'Incident Management', 'RCA'],
    outcomes: ['4 Knowledge Base articles published', 'RCA template adopted org-wide'],
  },
]

export const experience = [
  {
    org: 'PepsiCo GBS India LLP',
    title: 'Process Analytics and Automation Associate Analyst',
    period: 'Aug 2023 — Jun 2026',
    points: [
      'Owned cloud migration for an entire sector, moving 200+ automation solutions from a legacy UiPath framework to a Windows-compatible framework and Cloud Orchestrator with zero disruption to business operations.',
      'Built and deployed 3 production Agentic AI automations using UiPath agentic capabilities, introducing autonomous decision-making into live business workflows.',
      'Implemented CI/CD pipelines for automated deployments and migrated automation codebases from Orchestrator to Git repositories; 450+ automations deployed through the pipeline across 6 global teams.',
      'Helped scale a regional RPA team into a Global Capability Centre, onboarding 6 sector teams and transitioning 80+ processes from development to sustain with complete documentation and support readiness.',
      'Owned sustain operations for live automation products — proactive monitoring, incident resolution, and break-fix — supported by UiPath Insights dashboards tracking logs, queues, and exceptions in real time.',
      'Decommissioned 130+ underutilised bot licences through infrastructure optimisation, saving approximately $250,000 annually.',
      'Standardised team governance: authored 4 Knowledge Base articles on PepsiCo ServiceNow and created the RCA template adopted organisation-wide by the Process Analytics and Automation team.',
    ],
  },
]

export const education = {
  org: 'Vellore Institute of Technology',
  title: 'B.Tech, Computer Science and Engineering',
  period: 'Jun 2019 — May 2023',
  location: 'Vellore, Tamil Nadu',
}

export const skills = [
  {
    group: 'Intelligent automation',
    items: ['UiPath Studio', 'REFramework', 'Orchestrator', 'Automation Hub', 'UiPath Insights'],
  },
  {
    group: 'Microsoft platform',
    items: ['Power Apps', 'Power Automate', 'SharePoint', 'Outlook integrations'],
  },
  {
    group: 'AI & OCR',
    items: [
      'Agentic AI',
      'Document Understanding',
      'ABBYY IDP',
      'Azure Cognitive Services',
      'OCR validation',
    ],
  },
  {
    group: 'Programming',
    items: ['Python', 'SQL', 'REST API', 'JSON', 'Exception handling'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['Azure', 'Azure DevOps', 'Git', 'CI/CD', 'Windows Migration'],
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

export const certifications = [
  'UiPath Certified Professional — Automation Developer Associate',
  'UiPath Certified Professional — Automation Business Analyst Associate',
  'Power Platform Developer Associate — PL-400',
  'Microsoft Azure Fundamentals — AZ-900',
]

export const awards = [
  {
    title: 'PFNA CIO 2H 2023 Award',
    detail: '"Be Consumer Centric" — for leading the FSO Scheduler automation.',
  },
  {
    title: 'Bold & Better Award 2025',
    detail: 'Two-time recipient, for strategic and transformation impact.',
  },
  {
    title: 'Smile Awards',
    detail: 'Infrastructure and server optimisation, and high-impact Knowledge Base authorship.',
  },
]

export const sections = [
  { id: 'top', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
