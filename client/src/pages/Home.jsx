import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <main className="relative isolate min-h-[calc(100vh-65px)] overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />

      <section className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl flex-col justify-center px-6 py-24">
        <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Computer Science Student · Kenya
        </div>

        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
          Hello, I'm Rensis
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
          Turning ideas into{' '}
          <span className="text-zinc-500">digital reality.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          I explore software development, data, and AI to build
          practical solutions. This is where I share my projects,
          experiments, and journey as a developer.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-400"
          >
            Explore my work
            <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium text-zinc-200 transition hover:bg-white/5"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-12 flex items-center gap-5">
          {/* GitHub Icon SVG */}
          <a
            href="https://github.com/Rensis-Likert"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition hover:text-white"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn Icon SVG */}
          <a
            href="https://www.linkedin.com/in/rensis-likert"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 transition hover:text-white"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        <a
          href="#skills"
          className="mt-16 flex w-fit items-center gap-2 text-sm text-zinc-500 transition hover:text-white"
        >
          Discover more
          <ArrowDown size={16} />
        </a>
      </section>
      <section id="skills" className="border-t border-white/10 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <SectionHeading
      eyebrow="What I work with"
      title="Skills & technologies"
      description="Tools, languages, and frameworks I use to build robust software applications."
    />

    <div className="flex flex-wrap gap-3">
      {[
        'Java 21',
        'JavaFX',
        'Python',
        'PHP',
        'JavaScript',
        'HTML',
        'CSS',
        'Prolog',
        'React',
        'Tailwind CSS',
        'MySQL',
        'REST API Integration',
        'Git & GitHub',
        'Maven',
        'Data Analysis',
      ].map((skill) => (
        <span
          key={skill}
          className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:border-violet-400/40"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>

<section id="projects" className="border-t border-white/10 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <SectionHeading
      eyebrow="Selected work"
      title="Projects I've explored"
      description="A selection of practical applications and software systems I've built."
    />

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </div>
</section>
    </main>
  )
}