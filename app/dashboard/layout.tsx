import Link from "next/link";

const links = [
  ["Dashboard", "/dashboard"],
  ["AI Studio", "/dashboard/ai-studio"],
  ["Calendar", "/dashboard/calendar"],
  ["Settings", "/dashboard/settings"],
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen md:grid md:grid-cols-[240px_1fr]"><aside className="border-r border-slate-800 p-6"><Link href="/dashboard" className="text-xl font-bold text-cyan-400">SocialPilot AI</Link><nav className="mt-10 space-y-2">{links.map(([label, href]) => <Link key={href} href={href} className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-900">{label}</Link>)}</nav></aside><main className="p-8">{children}</main></div>;
}
