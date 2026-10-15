import { useState } from 'react'
import { Send, CheckCircle2, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate backend submission (Ready for your Express API)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      console.log('Contact form submitted:', form)
    }, 1000)
  }

  return (
    <main className="relative isolate min-h-[calc(100vh-65px)] overflow-hidden bg-zinc-950 px-6 py-20 text-zinc-100">
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open for opportunities & internships
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let's connect.</h1>
        <p className="mt-4 text-base text-zinc-400 sm:text-lg">
          Have an opportunity, project, or question? Drop a message below and I'll get back to you promptly.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {/* Contact Details Sidebar */}
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-violet-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Email</p>
                  <a href="mailto:hunyurenso@gmail.com" className="text-sm font-medium hover:text-violet-400 transition">
                    hunyurenso@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-violet-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-medium">Nyeri, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.02] p-12 text-center">
                <CheckCircle2 size={48} className="text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white">Message sent successfully!</h3>
                <p className="mt-2 text-zinc-400">Thank you for reaching out. I'll respond as soon as possible.</p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ name: '', email: '', message: '' })
                  }}
                  className="mt-6 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-zinc-100 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-zinc-100 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    maxLength={5000}
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-zinc-100 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-6 py-4 font-medium text-white transition hover:bg-violet-400 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending message...'
                  ) : (
                    <>
                      Send message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}