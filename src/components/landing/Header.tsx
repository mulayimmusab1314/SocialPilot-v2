import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 720 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="lp-anim-slide-down relative z-20 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Left: logo */}
        <a href="/" aria-label="SocialPilot home">
          <Logo />
        </a>

        {/* Center: desktop nav */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 md:block"
          aria-label="Main"
        >
          <div className="flex items-center gap-1 rounded-full bg-white/95 px-2 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            {NAV_LINKS.map((link) => {
              const active = link.href === "/";
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-800",
                  ].join(" ")}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 gap-0.5">
                      <span className="h-1 w-1 rounded-full bg-slate-900" />
                      <span className="h-1 w-1 rounded-full bg-slate-900" />
                      <span className="h-1 w-1 rounded-full bg-slate-900" />
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right: sign in (desktop) */}
        <div className="hidden md:block">
          <a
            href="/login"
            className="rounded-full bg-slate-900/80 px-5 py-2 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition-all hover:scale-105 hover:bg-slate-900"
          >
            Sign In
          </a>
        </div>

        {/* Right: hamburger (mobile) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.3)] md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={[
                "absolute left-0 block h-0.5 w-5 rounded-full bg-slate-900 transition-all duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-slate-900 transition-all duration-300",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 block h-0.5 w-5 rounded-full bg-slate-900 transition-all duration-300",
                open ? "bottom-1.5 rotate-[-45deg]" : "bottom-0",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="lp-anim-scale-in absolute right-3 top-3 w-[min(86vw,360px)] rounded-3xl bg-white p-4 shadow-2xl">
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-slate-900 px-4 py-3 text-center text-base font-semibold text-white"
              >
                Sign In
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
