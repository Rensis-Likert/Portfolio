
const currentYear = new Date().getFullYear()

function FooterIcon({ name, size = 18 }) {
  const icons = {
    github: (
      <>
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          transform="translate(2 0)"
        />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 10v7M8 7v.01M12 17v-7h4a3 3 0 0 1 3 3v4M12 13a3 3 0 0 1 3-3" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    arrowUpRight: (
      <>
        <path d="M7 17 17 7M7 7h10v10" />
      </>
    ),
    arrowUp: (
      <>
        <path d="m18 15-6-6-6 6" />
      </>
    ),
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  )
}

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="border-t border-white/[0.08] bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-sm text-violet-300">
                RL
              </span>
              Rensis<span className="text-violet-400">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
              Computer Science student and aspiring software developer,
              building practical solutions through code and continuous learning.
            </p>

            <p className="mt-4 text-sm text-zinc-500">
              Based in Kenya
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>

            <nav
              aria-label="Footer navigation"
              className="mt-4 flex flex-col items-start gap-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-violet-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact and social links */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Let's Connect
            </h3>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Have an opportunity, project, or idea? I'd be happy to hear from you.
            </p>

            <a
              href="mailto:rensisw@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
            >
              <FooterIcon name="mail" size={16} />
              Send me an email
              <FooterIcon name="arrowUpRight" size={14} />
            </a>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/Rensis-Likert"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition-all hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
              >
                <FooterIcon name="github" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 transition-all hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
              >
                <FooterIcon name="linkedin" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-zinc-600">
            © {currentYear} Rensis Likert. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 text-xs transition-colors hover:text-violet-300"
          >
            Back to top
            <FooterIcon name="arrowUp" size={14} />
          </a>

          <p className="text-xs text-zinc-600">
            Designed &amp; built with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
