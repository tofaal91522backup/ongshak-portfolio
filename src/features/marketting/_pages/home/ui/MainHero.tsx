import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MainHero() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#05070d] text-white">
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/90 via-[#05070d]/55 to-[#05070d]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(19,93,201,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,166,5,0.2),transparent_55%)]" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#135DC9]/30 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-[#FFA605]/25 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-[#32C2D8]/20 blur-[180px]" />

      {/* Soft noise / vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8 sm:py-32">
        {/* Eyebrow / badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#32C2D8] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#32C2D8] shadow-[0_0_12px_#32C2D8]" />
          </span>
          Ongshak Since 2021
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <span className="block">347+ Products Built.</span>
          <span className="block bg-gradient-to-r from-[#FFA605] via-[#FD7D18] to-[#32C2D8] bg-clip-text text-transparent">
            Zero Shortcuts.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
          We are <span className="font-semibold text-white">Ongshak</span> a
          technology partner that builds software, AI systems, and digital
          products for companies that need things done right. From MVPs to
          enterprise platforms, since 2021.
        </p>

        {/* CTA buttons */}
        {/* <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#FFA605] to-[#FD7D18] px-8 py-4 text-sm font-semibold text-black shadow-[0_10px_40px_-10px_rgba(255,166,5,0.7)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_50px_-10px_rgba(255,166,5,0.9)]"
          >
            <span className="relative z-10">Start a Conversation</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            href="/work"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#32C2D8]/60 hover:bg-white/10 hover:shadow-[0_0_30px_-5px_rgba(50,194,216,0.5)]"
          >
            See Our Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div> */}

        {/* Trust strip */}
        <div className="mt-20 md:flex hidden flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>347+ Products Shipped</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>AI · Web · Mobile · Enterprise</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Trusted Since 2021</span>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#05070d]" />
    </section>
  );
}
