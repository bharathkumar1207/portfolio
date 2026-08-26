/**
 * Monogram placeholder for the hero portrait. To swap in a real photo, replace
 * the contents of this component with an <img src="/portrait.jpg" ... /> —
 * the aspect ratio and rounded frame are already sized for a headshot.
 */
export default function Portrait({ initials }: { initials: string }) {
  return (
    <div
      aria-hidden="true"
      className="grain relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-[linear-gradient(155deg,var(--color-accent-soft),var(--color-warm-soft))]"
    >
      <div className="absolute inset-4 rounded-md border border-accent/15" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-8xl font-medium text-accent italic">{initials}</span>
      </div>
    </div>
  )
}
