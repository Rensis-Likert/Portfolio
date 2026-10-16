import { useState } from 'react'
import { Send } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setSubmitting(true)
    setStatus('')
    setError('')

    try {
      const response = await fetch(
        'http://localhost:5000/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      )

      const result = await response.json()

      if (!response.ok) {
        throw new Error(
          result.error || 'Unable to send your message.'
        )
      }

      setStatus(result.message)
      setForm(initialForm)
    } catch (err) {
      setError(
        err.message ||
        'Could not reach the server. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-violet-400'

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
          Get in touch
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Let's connect.
        </h1>

        <p className="mt-4 leading-7 text-zinc-400">
          Have a project, collaboration, or opportunity in mind?
          Send me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm text-zinc-300"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              minLength={1}
              maxLength={100}
              autoComplete="name"
              className={inputClass}
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-zinc-300"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={254}
              autoComplete="email"
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-zinc-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              minLength={1}
              maxLength={5000}
              rows={6}
              className={`${inputClass} resize-y`}
              placeholder="Tell me what you have in mind..."
            />
          </div>

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

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-medium text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={17} />
            {submitting ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </main>
  )
}
