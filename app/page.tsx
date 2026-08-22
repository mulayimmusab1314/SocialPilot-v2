import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">SocialPilot AI</p>
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">Sosyal medya yönetimini yapay zekâ ile hızlandır.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">İçerik üret, planla ve markanı tek bir çalışma alanından yönet.</p>
        <div className="mt-10 flex justify-center gap-4">
          <Link className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950" href="/register">Ücretsiz Başla</Link>
          <Link className="rounded-xl border border-slate-700 px-5 py-3 font-semibold" href="/login">Giriş Yap</Link>
        </div>
      </div>
    </main>
  );
}
