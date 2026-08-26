const TOPICS = ["Endpoint security", "Cloud infrastructure", "Browser security", "Compliance engineering"]

export default function Blog() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <p className="text-sm font-medium tracking-wide text-warm">Blog</p>
      <h1 className="mt-4 text-balance font-display text-4xl font-medium text-ink sm:text-5xl">
        Nothing published yet
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        I'm planning to write about the things I work on day to day. Here's what's likely to show
        up first:
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {TOPICS.map((topic) => (
          <li
            key={topic}
            className="rounded-full border border-border bg-panel px-3.5 py-1.5 text-sm text-muted"
          >
            {topic}
          </li>
        ))}
      </ul>
    </section>
  )
}
