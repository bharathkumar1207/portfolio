import { Link } from "react-router-dom"
import PatternArt from "../components/PatternArt"
import Portrait from "../components/Portrait"
import SkillBar from "../components/SkillBar"
import Timeline from "../components/Timeline"
import { contact, expertise, milestones, profile, skills } from "../data/profile"

export default function Home() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-28">
          <div className="animate-rise mx-auto w-56 md:w-full">
            <Portrait initials="BT" />
          </div>

          <div className="animate-rise" style={{ animationDelay: "100ms" }}>
            <p className="text-sm font-medium tracking-wide text-warm">
              {profile.role} · {profile.company}
            </p>
            <h1 className="mt-3 text-balance font-display text-5xl leading-[1.08] font-medium text-ink sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted">{profile.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/experience"
                className="rounded-sm bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-strong"
              >
                View experience
              </Link>
              <Link
                to="/contact"
                className="rounded-sm border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        {profile.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="max-w-2xl text-base leading-relaxed text-muted [&:not(:first-child)]:mt-4">
            {paragraph}
          </p>
        ))}
      </section>

      <section className="border-t border-border bg-panel">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="font-mono text-xs tracking-widest text-muted uppercase">
            Where I work
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {expertise.map((area) => (
              <div key={area.title} className="overflow-hidden rounded-lg border border-border">
                <PatternArt pattern={area.pattern} className="h-24 w-full" />
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-mono text-xs tracking-widest text-muted uppercase">Skills</h2>
        <div className="mt-6 grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-panel">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <h2 className="font-mono text-xs tracking-widest text-muted uppercase">Timeline</h2>
              <p className="mt-1 text-sm text-muted">All at {profile.company}</p>
            </div>
            <Link to="/experience" className="text-sm text-accent hover:underline">
              Full experience →
            </Link>
          </div>
          <div className="mt-8">
            <Timeline items={milestones} />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-accent">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-balance font-display text-3xl font-medium text-bg">
              Open to conversations about product and security engineering.
            </h2>
          </div>
          <a
            href={`mailto:${contact.email}`}
            className="shrink-0 rounded-sm bg-bg px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-warm-soft"
          >
            {contact.email}
          </a>
        </div>
      </section>
    </>
  )
}
