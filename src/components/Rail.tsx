'use client'

import { useEffect, useState } from 'react'
import { profile, sections } from '@/data/resume'

/**
 * Left rail on desktop, sticky top bar on mobile. Mirrors an orchestrator's
 * navigation: identity at the top, a section list, a live status line at the foot.
 */
export default function Rail() {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Mobile: a single condensed bar. The full section list would crowd it. */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-rule bg-paper/90 px-5 py-3 backdrop-blur-sm lg:hidden">
        <a href="#top" className="font-display text-base font-bold tracking-tight">
          {profile.name}
        </a>
        <a href="#contact" className="chip">
          Get in touch
        </a>
      </header>

      <nav
        aria-label="Sections"
        className="fixed top-0 left-0 hidden h-screen w-60 flex-col justify-between border-r border-rule bg-paper px-7 py-9 lg:flex"
      >
        <div>
          <a href="#top" className="block">
            <span className="font-display block text-[1.35rem] leading-none font-bold tracking-tight">
              Tanumay
              <br />
              Goswami
            </span>
            <span className="eyebrow mt-3 block">{profile.role}</span>
          </a>

          <ul className="mt-10 space-y-px">
            {sections.map((section) => {
              const isActive = active === section.id
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group flex items-center gap-2.5 py-1.5 font-mono text-xs tracking-wide transition-colors ${
                      isActive ? 'text-go' : 'text-muted hover:text-ink'
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`h-px transition-all ${
                        isActive ? 'w-5 bg-go' : 'w-2.5 bg-rule group-hover:w-4 group-hover:bg-ink'
                      }`}
                    />
                    {section.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-[0.6875rem] text-muted">{profile.location}</p>
          <a href="#contact" className="chip">
            Get in touch
          </a>
        </div>
      </nav>
    </>
  )
}
