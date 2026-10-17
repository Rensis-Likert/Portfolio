import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { useEffect, useRef, useState } from 'react'
import {
  Code2,
  Globe,
  Database,
  Wrench,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

const iconArtwork = {
  github: (
    <path
      fill="currentColor"
      d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.7H4.96V9.15h2.97v9.55ZM6.45 7.85a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19.04 18.7h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.76V9.15h2.85v1.3h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.55v5.25Z"
    />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),

  arrowDownRight: <path d="M7 7 17 17M17 7v10H7" />,
  externalLink: (
    <>
      <path d="M15 3h6v6M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </>
  ),
    download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </>
  ),

  code: (
    <>
      <path d="m8 17-5-5 5-5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m14 4-4 16" />
    </>
  ),
}

function Icon({ name, size = 24 }) {
  const filled = name === 'github' || name === 'linkedin'

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      {iconArtwork[name]}
    </svg>
  )
}


function ContactSection() {
 
const [submitting, setSubmitting] = useState(false)
const [status, setStatus] = useState('')
const [error, setError] = useState('')
async function handleContactSubmit(event) {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)

  setSubmitting(true)
  setStatus('')
  setError('')

  try {
    const response = await fetch(
      'https://formsubmit.co/ajax/rensisw@gmail.com',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          _subject: `Portfolio message from ${formData.get('name')}`,
          _template: 'table',
        }),
      },
    )

    const result = await response.json()

    if (!response.ok || result.success === 'false') {
      throw new Error(
        result.message || 'Unable to send your message.',
      )
    }

    setStatus(
      'Your message has been submitted. Thank you for reaching out!',
    )
    form.reset()
  } catch {
    setError(
      'We could not submit your message. Please try again or email me directly.',
    )
  } finally {
    setSubmitting(false)
  }
}


  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 px-6 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal-on-scroll mb-10 max-w-2xl">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's build something meaningful."
            description="Have a project, an idea, or an opportunity in mind? I'd be glad to hear from you."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal-on-scroll rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-zinc-900 to-zinc-900 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Start a conversation
            </p>
            <h3 className="mt-4 max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a good idea? Let's talk.
            </h3>
            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              I'm open to discussing projects, collaboration, and opportunities in software development.
            </p>

            <form  onSubmit={handleContactSubmit}  className="mt-7 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block text-xs font-medium text-zinc-300">
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950/70 px-3.5 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
                  />
                </label>
                <label className="block text-xs font-medium text-zinc-300">
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-zinc-950/70 px-3.5 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
                  />
                </label>
              </div>
              <label className="block text-xs font-medium text-zinc-300">
                Message
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="What would you like to talk about?"
                  className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-zinc-950/70 px-3.5 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
                />
              </label>
              
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-violet-300/70 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                <Icon name="arrowDownRight" size={17} />
              </button>
              
              {status && (
                <p role="status" className="text-sm text-emerald-400">
                  {status}
                </p>
              )}

              {error && (
                <p role="alert" className="text-sm text-red-400">
                  {error}
                </p>
              )}
              <p className="text-xs text-zinc-500">
                Your message will be sent securely through our form delivery provider.
                Prefer email?{' '}
                <a
                  href="mailto:rensisw@gmail.com"
                  className="text-violet-300 underline underline-offset-2 hover:text-violet-200"
                >
                  Contact me directly.
                </a>
              </p>

              
            </form>
          </div>

          <div className="reveal-on-scroll grid gap-4 sm:grid-cols-2 lg:grid-cols-1" style={{ transitionDelay: '120ms' }}>
            <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6 sm:p-7">
              <p className="text-sm text-zinc-500">Based in</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Nairobi &amp; Nyeri, Kenya</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Available for local and remote collaboration.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6 sm:p-7">
              <p className="text-sm text-zinc-500">Response time</p>
              <h3 className="mt-2 text-xl font-semibold text-white">I reply within 24 hours</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Send a message and I'll get back to you as soon as I can.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-zinc-900/80 p-6 sm:col-span-2 sm:p-7 lg:col-span-1">
              <p className="text-sm text-zinc-500">Professional links</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Rensis-Likert"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-violet-300/40 hover:bg-white/5 hover:text-white"
                >
                  <Icon name="github" size={19} /> GitHub
                  <Icon name="externalLink" size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-violet-300/40 hover:bg-white/5 hover:text-white"
                >
                  <Icon name="linkedin" size={19} /> LinkedIn
                  <Icon name="externalLink" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const certificates = [
  {
    title: 'Data Analytics Training',
    issuer: 'ICT Authority, Kenya & Sigma Digital Technical Institute',
    date: '20 July 2026',
    description:
      'Completed Data Analytics Training conducted by the ICT Authority, Kenya, in collaboration with Sigma Digital Technical Institute.',
    image: '/certificates/data-analytics.jpg',
  },
  {
    title: 'SkillQuest – Generative AI Literacy',
    issuer: 'Simplilearn SkillUp',
    date: '15 October 2026',
    description:
      'Successfully passed the SkillQuest Generative AI Literacy assessment, demonstrating knowledge of generative AI concepts.',
    image: '/certificates/generative-ai-literacy.jpg',
  },
]


const technologyGroups = [
  {
    title: 'Programming',
    description: 'Languages for problem-solving and software development.',
    skills: ['Java', 'Python', 'JavaScript', 'C'],
  },
  {
    title: 'Frontend',
    description: 'Tools for building responsive user interfaces.',
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Databases',
    description: 'Building APIs and working with persistent data.',
    skills: ['Node.js', 'Express', 'PHP', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Tools & Exploration',
    description: 'Tools and fields I use or am actively exploring.',
    skills: ['Git', 'GitHub', 'Linux', 'Machine Learning'],
  },
]

const tabs = ['Projects', 'Certificates', 'Tech Stack']

export default function Home() {
  const [activeTab, setActiveTab] = useState('Projects')
  const [introVisible, setIntroVisible] = useState(true)
  const [introExiting, setIntroExiting] = useState(false)
  const [isShowcasePaused, setIsShowcasePaused] = useState(false)
  const [isTabTransitioning, setIsTabTransitioning] = useState(false)
  const transitionTimers = useRef([])
  const [isMobile, setIsMobile] = useState(
  () => window.matchMedia('(max-width: 767px)').matches
)

useEffect(() => {
  const mediaQuery = window.matchMedia('(max-width: 767px)')

  const handleScreenChange = (event) => {
    setIsMobile(event.matches)
  }

  mediaQuery.addEventListener('change', handleScreenChange)

  return () => {
    mediaQuery.removeEventListener('change', handleScreenChange)
  }
}, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIntroVisible(false)
      return
    }

    const exitTimer = window.setTimeout(() => setIntroExiting(true), 3500)
    const removeTimer = window.setTimeout(() => setIntroVisible(false), 4500)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [])


 const introIcons = [
  'github',
  'linkedin',
  'mail',
  'download',
  'code',
  'externalLink',
  'arrowDownRight',
]

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal-on-scroll, img')
    targets.forEach((target) => {
      if (target.tagName === 'IMG') target.classList.add('image-reveal')
    })

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])
  
  useEffect(() => {
  if (isMobile || isShowcasePaused || isTabTransitioning) return

  const timer = window.setTimeout(() => {
    const currentIndex = tabs.indexOf(activeTab)
    const nextTab = tabs[(currentIndex + 1) % tabs.length]

    setIsTabTransitioning(true)

    const fadeOutTimer = window.setTimeout(() => {
      setActiveTab(nextTab)

      const fadeInTimer = window.setTimeout(() => {
        setIsTabTransitioning(false)
      }, 40)

      transitionTimers.current.push(fadeInTimer)
    }, 220)

    transitionTimers.current.push(fadeOutTimer)
  }, 5000)

  return () => window.clearTimeout(timer)
}, [activeTab,isMobile, isShowcasePaused, isTabTransitioning])

useEffect(() => {
  return () => {
    transitionTimers.current.forEach((timer) =>
      window.clearTimeout(timer),
    )
  }
}, [])

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes portfolio-icon-march {
          from { transform: translateX(-100%); }
          to { transform: translateX(100vw); }
        }
        @keyframes portfolio-icon-bob {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes portfolio-welcome-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .portfolio-icon-march { animation: portfolio-icon-march 5s linear infinite; }
        .portfolio-icon-bob { animation: portfolio-icon-bob 1.8s ease-in-out infinite; }
        .portfolio-welcome-in { animation: portfolio-welcome-in 900ms ease-out both; }
        .reveal-on-scroll { opacity: 0; transform: translateY(28px); transition: opacity 750ms ease, transform 750ms cubic-bezier(.2,.7,.2,1); }
        .reveal-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
        .image-reveal { opacity: 0; transform: translateY(20px) scale(.97); transition: opacity 900ms ease, transform 900ms cubic-bezier(.2,.7,.2,1); }
        .image-reveal.is-visible { opacity: 1; transform: translateY(0) scale(1); }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .portfolio-icon-march, .portfolio-icon-bob, .portfolio-welcome-in { animation: none !important; }
          .reveal-on-scroll, .image-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
      {introVisible && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-zinc-950 transition-opacity duration-1000 ease-in-out ${
            introExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
        >
          <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[110px]" />
          <div className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-fuchsia-600/15 blur-[110px]" />

          <div className="portfolio-welcome-in relative z-10 px-6 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300 sm:text-sm">
              Welcome to
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              My Portfolio Website
            </h1>
            <p className="mt-5 text-sm text-zinc-400 sm:text-base">
              Ideas, code, and a little creativity.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[70%] overflow-hidden"
          >
            <div className="portfolio-icon-march flex w-max">
              {[0, 1].map((loop) =>
                introIcons.map((icon, index) => (
                  <span
                    key={`${loop}-${icon}`}
                    className="portfolio-icon-bob mx-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-300/20 bg-white/[0.04] text-violet-200/80 shadow-lg shadow-violet-950/30 sm:mx-7 sm:h-14 sm:w-14"
                    style={{ animationDelay: `${(index % introIcons.length) * -0.18}s` }}
                  >
                    <Icon name={icon} size={25} />
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      )}

      <main className="overflow-hidden bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section
        id="home"
        className="relative scroll-mt-24 px-6 pb-20 pt-32 sm:pb-28 sm:pt-40"
      >
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" />

        <div className="reveal-on-scroll relative mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              Computer Science Student · Developer
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Turning ideas into{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent">
                digital reality.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Hey, I'm Rensis. I'm a Computer Science student passionate about
              software development, problem-solving, and exploring how
              technology can solve real-world problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                Explore my work
                <Icon name="arrowDownRight" size={18} />
              </a>

              <a
                href="/resume.pdf"
                download="Rensis-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-zinc-200 transition hover:border-violet-400/60 hover:bg-white/5"
              >
                <Icon name="download" size={18} />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/Rensis-Likert"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-zinc-400 transition hover:text-violet-300"
              >
                <Icon name="github" size={23} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-zinc-400 transition hover:text-violet-300"
              >
                <Icon name="linkedin" size={23} />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rensisw%40gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email Rensis with Gmail"
                className="text-zinc-400 transition hover:text-violet-300"
              >
                <Icon name="mail" size={23} />
              </a>
            </div>

            <p className="mt-3 text-xs text-zinc-600">
              Open my profiles or send me an email.
            </p>
          </div>

          <div className="reveal-on-scroll relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-indigo-500/30 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 p-3">
              <img
                src="/profile.jpg"
                alt="Portrait of Rensis"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute inset-x-3 bottom-3 rounded-b-[1.5rem] bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-16">
                <p className="text-lg font-semibold text-white">Rensis</p>
                <p className="mt-1 text-sm text-zinc-300">
                  Developer in progress. Builder by passion.
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/5 px-6 py-24 sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal-on-scroll relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/10 to-indigo-500/30 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 p-3">
              <img
                src="/image.jpg"
                alt="Portrait of Rensis"
                loading="lazy"
                className="image-reveal aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-b-[1.5rem] bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-16">
                <p className="text-lg font-semibold text-white">Rensis</p>
                <p className="mt-1 text-sm text-zinc-300">
                  Computer Science student · Developer
                </p>
              </div>
            </div>
           
          </div>

          <div className="reveal-on-scroll" style={{ transitionDelay: '120ms' }}>
            <SectionHeading
              eyebrow="A little about me"
              title="Curiosity drives what I build."
              description="Learning, experimenting, and growing one project at a time."
            />
            <div className="mt-6 space-y-5 text-base leading-8 text-zinc-400">
              <p>
                I'm a Computer Science student at Dedan Kimathi University of
                Technology, building my foundation in programming, software
                engineering, and data-driven applications.
              </p>
              <p>
                I enjoy taking an idea, breaking it into smaller problems, and
                turning it into something useful. I work with technologies
                across web development and databases, while continuing to
                explore artificial intelligence and machine learning.
              </p>
              <p>
                My goal is to keep learning through practical projects,
                collaborate with other developers, and build technology that
                makes a meaningful difference.
              </p>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 font-medium text-violet-300 transition hover:text-violet-200"
              >
                Explore my work
                <Icon name="arrowDownRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
        <section
          id="portfolio"
          onMouseEnter={() => setIsShowcasePaused(true)}
          onMouseLeave={() => setIsShowcasePaused(false)}
          onFocusCapture={() => setIsShowcasePaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsShowcasePaused(false)
            }
          }}
          className="scroll-mt-24 border-t border-white/5 bg-zinc-900/30 px-6 py-24 sm:py-28"
        >
        <div className="mx-auto max-w-7xl">
          <div className="reveal-on-scroll">
            <SectionHeading
              eyebrow="Selected work & learning"
              title="Portfolio Showcase"
              description="Projects I've built, qualifications I've earned, and the technologies I'm learning and using."
            />
          </div>

          <div
            role="tablist"
            aria-label="Portfolio showcase categories"
            className="reveal-on-scroll mt-10 inline-flex flex-wrap gap-1 rounded-2xl border border-white/10 bg-zinc-900 p-1.5"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                id={`tab-${tab.toLowerCase().replace(' ', '-')}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                

                onClick={() => {
                if (tab === activeTab || isTabTransitioning) return

                setIsTabTransitioning(true)

                const fadeOutTimer = window.setTimeout(() => {
                  setActiveTab(tab)

                  const fadeInTimer = window.setTimeout(() => {
                    setIsTabTransitioning(false)
                  }, 40)

                  transitionTimers.current.push(fadeInTimer)
                }, 220)

                transitionTimers.current.push(fadeOutTimer)
              }}
              disabled={isTabTransitioning}

                className={`rounded-xl px-5 py-3 text-sm font-medium transition ${
                  activeTab === tab
                    ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20'
                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.toLowerCase().replace(' ', '-')}`}
            className={`mt-8 transition-all duration-300 ease-in-out ${
              isTabTransitioning
                ? 'translate-y-2 opacity-0'
                : 'translate-y-0 opacity-100'
            }`}
          >
            {activeTab === 'Projects' && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            )}

            {activeTab === 'Certificates' && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {certificates.map((certificate) => (
                  <article
                  
                    key={certificate.title}
                    className="group rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-violet-400/40"
                  >
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View full ${certificate.title} certificate`}
                    >                   
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        loading="lazy"
                        className="mb-5 aspect-[4/3] w-full rounded-xl border border-white/10 bg-zinc-950 object-contain"
                      />
                    </a>
                    
                    <p className="text-xs uppercase tracking-widest text-violet-300">
                      Certificate
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {certificate.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">
                      {certificate.issuer}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-zinc-500">
                      {certificate.description}
                    </p>
                    {certificate.link && (
                      <a
                        href={certificate.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200"
                      >
                        View certificate
                        <Icon name="externalLink" size={15} />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}

            
{activeTab === 'Tech Stack' && (
  <div className="space-y-8">
    {/* Section introduction */}
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-medium text-violet-300">
          My developer toolkit
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Technologies I work with.
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          Languages, frameworks, databases, and tools I use to build
          projects and continue growing as a developer.
        </p>
      </div>

      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs text-emerald-300">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Always learning
      </div>
    </div>

    {/* Technology cards */}
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {technologyGroups.map((group, index) => {
        const categoryIcons = [Code2, Globe, Database, Wrench]
        const CategoryIcon = categoryIcons[index % categoryIcons.length]

        return (
          <article
            key={group.title}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-xl hover:shadow-violet-950/20"
          >
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-violet-500/0 blur-3xl transition-colors duration-500 group-hover:bg-violet-500/10" />

            <div className="relative">
              {/* Icon and card number */}
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.08] text-violet-300 transition-transform duration-300 group-hover:scale-110">
                  <CategoryIcon size={23} strokeWidth={1.7} />
                </div>

                <span className="text-xs font-medium tabular-nums text-zinc-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Category details */}
              <h3 className="mt-6 text-lg font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-2 min-h-[3rem] text-sm leading-6 text-zinc-500">
                {group.description}
              </p>

              <div className="my-5 h-px bg-gradient-to-r from-violet-400/30 via-white/[0.06] to-transparent" />

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-violet-400/30 hover:bg-violet-400/[0.08] hover:text-violet-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              
            </div>
          </article>
        )
      })}
    </div>

    {/* Learning statement */}
    <div className="flex items-start gap-4 rounded-2xl border border-violet-400/10 bg-violet-400/[0.035] p-5 sm:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
        <Sparkles size={20} />
      </div>

      <div>
        <h4 className="font-semibold text-white">
          Growing beyond the fundamentals
        </h4>

        <p className="mt-2 text-sm leading-7 text-zinc-400">
          I'm strengthening my software engineering skills while exploring
          machine learning and AI through practical projects, experimentation,
          and continuous learning.
        </p>
      </div>
    </div>
  </div>
)}

            
          </div>
        </div>
      </section>

      {/* CONTACT AND FOOTER*/}
      <ContactSection />
      <Footer />
      </main>
    </>
  )
}
