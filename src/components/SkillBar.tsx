import type { Skill } from "../data/profile"

export default function SkillBar({ name, level }: Skill) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-ink">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div
        role="img"
        aria-label={`${name} proficiency: ${level}%`}
        className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-accent-soft"
      >
        <div className="h-full rounded-full bg-accent" style={{ width: `${level}%` }} />
      </div>
    </div>
  )
}
