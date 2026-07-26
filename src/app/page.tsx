import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Rail from '@/components/Rail'
import Recognition from '@/components/Recognition'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-surface focus:px-3 focus:py-2 focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>

      <Rail />

      <main className="px-5 sm:px-8 lg:ml-60 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-4xl">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Recognition />
          <Skills />
          <Contact />
        </div>
      </main>
    </div>
  )
}
