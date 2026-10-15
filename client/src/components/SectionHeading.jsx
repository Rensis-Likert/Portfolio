export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  )
}
