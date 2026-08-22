"use client";

import Link from "next/link";

type TrustIcon = {
  label: string;
  ring: string;
  offset: string;
  delay: string;
  z: string;
  icon: React.ReactNode;
};

const TRUST_ICONS: TrustIcon[] = [
  {
    label: "AI",
    ring: "ring-cyan-400/40",
    offset: "",
    delay: "0.2s",
    z: "z-30",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path
          d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4"
          stroke="#22d3ee"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    ring: "ring-pink-400/40",
    offset: "-ml-2",
    delay: "0.35s",
    z: "z-20",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="#f472b6"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="4" stroke="#f472b6" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="1" fill="#f472b6" />
      </svg>
    ),
  },
  {
    label: "Content",
    ring: "ring-emerald-400/40",
    offset: "-ml-2",
    delay: "0.5s",
    z: "z-10",
    icon: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path
          d="M5 4h10l4 4v12H5z"
          stroke="#34d399"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M15 4v4h4" stroke="#34d399" strokeWidth="1.5" />
        <path d="M8 13h8M8 16h5" stroke="#34d399" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
      {/* Trust row */}
      <div
        className="lp-anim-fade-up flex items-center justify-center"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            {TRUST_ICONS.map((t) => (
              <span
                key={t.label}
                className={[
                  "lp-anim-scale-in grid h-9 w-9 place-items-center rounded-full bg-slate-950/80 ring-1",
                  t.ring,
                  t.offset,
                  t.z,
                ].join(" ")}
                style={{ animationDelay: t.delay }}
                aria-label={t.label}
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/90">
                  {t.icon}
                </span>
              </span>
            ))}
          </div>
          <span className="text-sm font-medium text-slate-200/90">
            AI-Powered Social Media Workflow
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1
        className="font-display mt-7 text-4xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        aria-label="Create. Plan. Publish. Grow."
      >
        <span
          className="lp-anim-fade-up block"
          style={{ animationDelay: "0.25s" }}
        >
          Create. Plan.
        </span>
        <span
          className="lp-anim-fade-up block"
          style={{ animationDelay: "0.45s" }}
        >
          Publish. Grow.
        </span>
      </h1>

      {/* Subhead */}
      <p
        className="lp-anim-fade-up mx-auto mt-5 max-w-[560px] text-sm leading-7 text-slate-300/90 sm:text-base sm:leading-8"
        style={{ animationDelay: "0.65s" }}
      >
        Create high-performing social media content with AI, generate images and
        videos, plan your content, and manage your entire social presence from
        one workspace.
      </p>

      {/* CTA */}
      <div className="lp-anim-fade-up mt-8" style={{ animationDelay: "0.85s" }}>
        <Link
          href="/register"
          className="lp-cta-pulse inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 sm:text-base"
        >
          Get Started Free
        </Link>
      </div>
    </section>
  );
}
