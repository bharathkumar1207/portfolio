import Timeline from "../components/Timeline"
import { contact, milestones, profile } from "../data/profile"

export default function Experience() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <p className="text-sm font-medium tracking-wide text-warm">Experience</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-medium text-ink sm:text-5xl">
            {profile.role}
          </h1>
          <p className="mt-3 text-lg text-muted">
            {profile.company} · {profile.since} — Present
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            My first role out of the gate: I joined {profile.company}, a {profile.companyKind}, as
            a Junior Cybersecurity Analyst, and grew through full-stack development, cloud
            infrastructure, and technical leadership into the product decisions behind what I was
            building.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="font-mono text-xs tracking-widest text-muted uppercase">Timeline</h2>
        <div className="mt-8">
          <Timeline items={milestones} />
        </div>
      </section>

      <section className="border-t border-border bg-panel">
        <div className="mx-auto max-w-5xl px-6 py-16 text-sm text-muted">
          <p>
            Want to talk through any of this?{" "}
            <a href={`mailto:${contact.email}`} className="text-accent hover:underline">
              Email me
            </a>{" "}
            or find me on{" "}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </>
  )
}
