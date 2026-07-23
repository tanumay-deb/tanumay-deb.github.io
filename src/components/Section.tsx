import Reveal from './Reveal'

/**
 * Shared section shell: mono breadcrumb, display heading, hairline rule.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  lede?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="border-t border-rule py-16 sm:py-20">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display mt-3 text-3xl sm:text-[2.5rem]">{title}</h2>
        {lede ? (
          <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-2">{lede}</p>
        ) : null}
      </Reveal>

      <div className="mt-10">{children}</div>
    </section>
  )
}
