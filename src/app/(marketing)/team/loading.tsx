// Shown instantly while the profile is fetched, instead of the global spinner.
export default function TeamLoading() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d]">
      <div className="relative mx-auto max-w-4xl px-4 pt-32 pb-24 sm:px-6 md:pt-40">
        <div className="h-4 w-36 animate-pulse rounded bg-white/10" />
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:p-12">
            <div className="h-44 w-44 shrink-0 animate-pulse rounded-full bg-white/10 md:h-52 md:w-52" />
            <div className="w-full space-y-4">
              <div className="h-3 w-28 animate-pulse rounded bg-white/10" />
              <div className="h-10 w-3/4 animate-pulse rounded bg-white/10" />
              <div className="h-5 w-1/2 animate-pulse rounded bg-white/10" />
            </div>
          </div>
          <div className="grid gap-4 border-t border-white/10 p-6 sm:grid-cols-2 md:p-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="h-20 animate-pulse rounded-2xl bg-white/[0.05]" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
