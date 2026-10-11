import type { Metadata } from "next";
import TeamGrid from "@/features/marketting/_pages/about/TeamGrid";

export const metadata: Metadata = {
  title: "Our Team | ongshak",
  description:
    "Meet the engineers, field ambassadors and operators building hardware and software at ongshak.",
};

export default function TeamsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-slate-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-[#FFA605]/10 blur-[160px]" />
        <div className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-[#135DC9]/15 blur-[160px]" />
      </div>

      <div className="container relative mx-auto px-4 pt-32 sm:px-6 md:pt-40 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFA605]">
          Our team
        </p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-7xl">
          The people behind{" "}
          <span className="bg-gradient-to-r from-[#FFA605] via-[#FD7D18] to-[#32C2D8] bg-clip-text text-transparent">
            ongshak.
          </span>
        </h1>
        <TeamGrid showIntro={false} />
      </div>
    </main>
  );
}
