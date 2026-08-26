import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Cross } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministries" },
  { to: "/visit", label: "Visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-warm-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <Cross className="h-6 w-6 text-burgundy transition-transform group-hover:rotate-12" strokeWidth={2} />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold leading-tight text-foreground sm:text-xl">
              Socialville Baptist Church
            </span>
            <span className="text-xs font-medium text-stone sm:text-sm">Mason, Ohio</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-burgundy" }}
              className="rounded-md px-4 py-2 font-medium text-foreground transition-colors hover:bg-secondary hover:text-burgundy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border bg-warm-white px-4 py-3 md:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeProps={{ className: "text-burgundy bg-secondary" }}
                  className="block rounded-md px-3 py-2.5 font-medium text-foreground transition-colors hover:bg-secondary hover:text-burgundy"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
