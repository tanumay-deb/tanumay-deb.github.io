import { profile } from '@/data/resume'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink py-16 sm:py-24">
      <Reveal>
        <p className="eyebrow">Contact</p>
        <h2 className="display mt-3 max-w-3xl text-3xl sm:text-[2.75rem]">
          Have an automation estate that needs to move, scale, or stay up?
        </h2>

        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className="link-underline">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="link-underline">
            {profile.phone}
          </a>
          <a href={profile.linkedin} className="link-underline" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} className="link-underline" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </Reveal>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6 font-mono text-xs text-muted">
        <span>
          {profile.name} · {profile.location}
        </span>
        <a href="#top" className="link-underline">
          Back to top
        </a>
      </footer>
    </section>
  )
}
