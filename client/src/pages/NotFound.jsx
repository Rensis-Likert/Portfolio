
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-zinc-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-zinc-400">Page not found.</p>
      <Link
        to="/"
        className="mt-6 text-violet-400 hover:text-violet-300"
      >
        Return home
      </Link>
    </main>
  )
}
