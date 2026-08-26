import { contact, profile } from "../data/profile"

export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm font-medium tracking-wide text-warm">Contact</p>
      <h1 className="mt-4 text-balance font-display text-4xl font-medium text-ink">
        Reach {profile.name.split(" ")[0]}
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        Open to conversations about security tooling, cloud infrastructure, or product
        engineering roles.
      </p>
      <div className="mt-8 flex flex-col gap-3 text-sm">
        <a
          href={`mailto:${contact.email}`}
          className="w-fit rounded-sm border border-border bg-panel px-4 py-2.5 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          {contact.email}
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="w-fit rounded-sm border border-border bg-panel px-4 py-2.5 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          linkedin.com/in/bharath-taddi-81a3632ba
        </a>
      </div>
    </section>
  )
}
