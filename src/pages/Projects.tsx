import PatternArt from "../components/PatternArt"
import { expertise } from "../data/profile"

export default function Projects() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <p className="text-sm font-medium tracking-wide text-warm">Experience</p>
        <h1 className="mt-4 text-balance font-display text-4xl font-medium text-ink sm:text-5xl">
          Where my experience comes from
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted">
          The areas I've worked across, described as skills and capabilities rather than named
          deliverables — the specifics of what I've built belong to the teams I've built them
          with.
        </p>
      </section>

      {expertise.map((area, index) => (
        <section
          key={area.title}
          className={index % 2 === 0 ? "border-t border-border bg-panel" : "border-t border-border"}
        >
          <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <PatternArt pattern={area.pattern} className="aspect-[4/3] w-full rounded-lg border border-border" />
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {area.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{area.description}</p>

              <ul className="mt-5 space-y-2">
                {area.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2.5 text-sm text-muted">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {area.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-ink"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
