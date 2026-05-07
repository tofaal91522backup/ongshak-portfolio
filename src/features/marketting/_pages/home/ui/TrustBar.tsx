import Image from "next/image";

import { industries } from "../data/site";

export default function TrustBar() {
  const clients = [
    "/images/clients/1.png",
    "/images/clients/2.png",
    "/images/clients/3.png",
    "/images/clients/4.png",
    "/images/clients/5.png",
    "/images/clients/6.png",
    "/images/clients/7.png",
  ];

  // Duplicate for seamless infinite loop
  const marquee = [...clients, ...clients];

  return (
    <section className="relative border-y border-white/5 bg-[#05070d] py-16">
      {/* ambient brand glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/3 h-48 w-[40rem] rounded-full bg-[#135DC9]/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-48 w-[30rem] rounded-full bg-[#FFA605]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto container px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFA605] via-[#32C2D8] to-[#007AFF]">
          Trusted across industries & clients
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {industries.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-[#FFA605]/40 hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Infinite horizontal marquee */}
        <div
          className="group relative mt-12 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-16 group-hover:[animation-play-state:paused]">
            {marquee.map((item, i) => (
              <div
                key={`${item}-${i}`}
                className="flex h-100 w-[150px] shrink-0 items-center justify-center"
              >
                <Image
                  src={item}
                  alt="client logo"
                  width={650}
                  height={590}
                  className=" w-auto object-contain   transition duration-300 hover:opacity-100 "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
