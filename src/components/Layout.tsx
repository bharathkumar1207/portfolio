import { useEffect, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import { contact, profile } from "../data/profile"

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const

function navLinkClass({ isActive }: { isActive: boolean }) {
  return [
    "rounded-sm px-3 py-2 text-sm transition-colors",
    isActive ? "text-ink" : "text-muted hover:text-ink",
  ].join(" ")
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-50 focus-visible:rounded-sm focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:text-bg"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="font-display text-lg text-ink italic hover:text-accent">
            {profile.name}
          </NavLink>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-sm text-ink md:hidden"
          >
            <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" fill="none">
              {menuOpen ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Primary"
            className="border-t border-border px-6 py-3 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-sm px-2 py-2.5 text-base ${isActive ? "text-ink" : "text-muted"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-4">
            <a href={`mailto:${contact.email}`} className="hover:text-ink">
              {contact.email}
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
