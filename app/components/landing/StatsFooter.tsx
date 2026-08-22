"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  icon: string;
  value: string;
  label: string;
  numeric?: number;
  suffix?: string;
};

const STATS: Stat[] = [
  { icon: "✦", value: "50+", label: "AI Content Tools", numeric: 50, suffix: "+" },
  { icon: "◉", value: "5", label: "Social Platforms", numeric: 5 },
  { icon: "↗", value: "10x", label: "Faster Content Creation", numeric: 10, suffix: "x" },
  { icon: "∞", value: "AI", label: "Powered Workflow" },
];

function CountUp({
  target,
  suffix,
  duration = 1400,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setVal(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function StatsFooter() {
  return (
    <footer className="relative z-10 px-4 pb-6 pt-2 sm:pb-8">
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="lp-anim-fade-up flex flex-col items-center text-center"
            style={{ animationDelay: `${1 + i * 0.12}s` }}
          >
            <span className="text-lg text-cyan-300 sm:text-xl">
              {s.icon}
            </span>
            <span className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              {s.numeric !== undefined ? (
                <CountUp target={s.numeric} suffix={s.suffix} />
              ) : (
                s.value
              )}
            </span>
            <span className="mt-0.5 text-[11px] uppercase tracking-wider text-slate-400 sm:text-xs">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
}
