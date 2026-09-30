import Image from "next/image";

import { industries } from "../data/site";

export default function TrustBar() {
  // Interleaved so the square marks and the wide wordmarks alternate rather
  // than clustering. Named entries carry a real alt; the originals kept the
  // generic one because their brands are not recorded anywhere in the repo.
  const clients = [
    { src: "/images/clients/1.png", name: "HealthPort" },
    { src: "/images/clients/drishti.png", name: "Drishti" },
    { src: "/images/clients/2.png", name: "Client" },
    { src: "/images/clients/khar-active.png", name: "Khar Active" },
    { src: "/images/clients/nab-bangladesh.png", name: "National Advisory Board for Impact Investment Bangladesh" },
    { src: "/images/clients/3.png", name: "Client" },
    { src: "/images/clients/discover-thailand.png", name: "Discover Thailand" },
    { src: "/images/clients/4.png", name: "Client" },
    { src: "/images/clients/pop-water.png", name: "Prokriti O' Paani" },
    { src: "/images/clients/needle-challenge.png", name: "Needle Innovation Challenge" },
    { src: "/images/clients/5.png", name: "Client" },
    { src: "/images/clients/steeltech.png", name: "Steeltech Industries" },
    { src: "/images/clients/6.png", name: "Psycure Organization" },
    { src: "/images/clients/vida-verde.png", name: "Vida Verde Spanish School" },
    { src: "/images/clients/7.png", name: "Client" },
    { src: "/images/clients/khar-fights.png", name: "Khar Fights" },
    { src: "/images/clients/bangladesh-watch-club.png", name: "Bangladesh Watch Club" },
  ];

  // Duplicate for seamless infinite loop
  const marquee = [...clients, ...clients];

  // Doubling the list doubled the track width, so the scroll has to cover twice
  // the distance to keep the same apparent speed.
  const marqueeSeconds = Math.round(clients.length * 4.5);

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
          <div
            className="flex w-max gap-16 group-hover:[animation-play-state:paused]"
            style={{
              animation: `marquee ${marqueeSeconds}s linear infinite`,
            }}
          >
            {marquee.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                // Fixed box + fill/object-contain, so logos of very different
                // proportions (wide wordmarks, square seals, one portrait mark)
                // all settle on the same optical baseline instead of each one
                // sizing itself from its own intrinsic dimensions.
                className="relative h-16 w-[150px] shrink-0"
              >
                <Image
                  src={item.src}
                  alt={item.name === "Client" ? "Client logo" : `${item.name} logo`}
                  fill
                  sizes="150px"
                  className="object-contain opacity-60 transition duration-300 hover:opacity-100"
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
