export type Pattern = "flow" | "grid" | "layers" | "shield"

const BACKGROUND: Record<Pattern, string> = {
  flow: `repeating-linear-gradient(115deg, color-mix(in srgb, var(--color-accent) 22%, transparent) 0px, color-mix(in srgb, var(--color-accent) 22%, transparent) 2px, transparent 2px, transparent 18px),
    linear-gradient(160deg, var(--color-accent-soft), var(--color-warm-soft))`,
  grid: `linear-gradient(color-mix(in srgb, var(--color-accent) 18%, transparent) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, var(--color-accent) 18%, transparent) 1px, transparent 1px),
    linear-gradient(160deg, var(--color-accent-soft), var(--color-warm-soft))`,
  layers: `linear-gradient(180deg, color-mix(in srgb, var(--color-accent) 16%, transparent) 0 25%, transparent 25% 50%, color-mix(in srgb, var(--color-warm) 16%, transparent) 50% 75%, transparent 75% 100%),
    linear-gradient(160deg, var(--color-accent-soft), var(--color-warm-soft))`,
  shield: `radial-gradient(circle at 50% 42%, transparent 0 28px, color-mix(in srgb, var(--color-accent) 20%, transparent) 29px 31px, transparent 32px 56px, color-mix(in srgb, var(--color-accent) 14%, transparent) 57px 59px, transparent 60px),
    linear-gradient(160deg, var(--color-accent-soft), var(--color-warm-soft))`,
}

const SIZE: Record<Pattern, string> = {
  flow: "auto, cover",
  grid: "28px 28px, 28px 28px, cover",
  layers: "auto, cover",
  shield: "auto, cover",
}

export default function PatternArt({
  pattern,
  className = "",
}: {
  pattern: Pattern
  className?: string
}) {
  return (
    <div
      aria-hidden="true"
      className={`grain ${className}`}
      style={{
        backgroundImage: BACKGROUND[pattern],
        backgroundSize: SIZE[pattern],
      }}
    />
  )
}
