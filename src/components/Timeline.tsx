import type { Milestone } from "../data/profile"

function TimelineCard({ item }: { item: Milestone }) {
  return (
    <div className="ml-14 overflow-hidden rounded-lg border border-border bg-panel md:ml-0">
      <div className="flex h-48 items-center justify-center border-b border-border bg-bg p-4">
        <img
          src={item.illustration}
          alt=""
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="p-5">
        <p className="font-mono text-xs text-muted">{item.date}</p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">{item.title}</h3>
        <p className="mt-1 text-xs tracking-wide text-warm uppercase">{item.tag}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
      </div>
    </div>
  )
}

export default function Timeline({ items }: { items: Milestone[] }) {
  const ordered = [...items].reverse()

  return (
    <ol className="relative">
      <div aria-hidden="true" className="absolute top-0 bottom-0 left-7 w-px bg-border md:left-1/2" />

      {ordered.map((item, index) => {
        const onLeft = index % 2 === 0
        return (
          <li
            key={item.tag + item.title}
            className="relative mb-10 last:mb-0 md:grid md:grid-cols-2 md:gap-x-10"
          >
            <span
              aria-hidden="true"
              className="absolute top-8 left-7 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-bg md:left-1/2"
            />
            <div className={onLeft ? "md:col-start-1" : "md:col-start-2"}>
              <TimelineCard item={item} />
            </div>
          </li>
        )
      })}
    </ol>
  )
}
