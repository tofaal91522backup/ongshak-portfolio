"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  { year: "2021", label: "Founded in Dhaka" },
  { year: "2022", label: "100th project delivered" },
  { year: "2023", label: "Drishti Technologies launched" },
  { year: "2024", label: "threadBridge SteelGuard shipped" },
  { year: "2025", label: "347+ projects milestone" },
  { year: "2026", label: "Global Change Award winner" },
];

const DURATION = 2200;

export default function Milestones() {
  const [active, setActive] = useState<number | null>(null);
  const [lineVisible, setLineVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const elapsedRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => {
    const t1 = setTimeout(() => setLineVisible(true), 500);
    const t2 = setTimeout(() => setItemsVisible(true), 550);
    const t3 = setTimeout(() => {
      setActive(0);
      timerRef.current = setInterval(() => {
        elapsedRef.current += 30;
        if (elapsedRef.current >= DURATION) {
          currentRef.current = (currentRef.current + 1) % milestones.length;
          setActive(currentRef.current);
          elapsedRef.current = 0;
        }
      }, 30);
    }, 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="border-t border-white/10 py-20">
      {/* Label */}
      <p
        className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFA605]"
        style={{
          opacity: itemsVisible ? 1 : 0,
          transform: itemsVisible ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
        }}
      >
        Milestones
      </p>

      {/* Heading */}
      <h2
        className="mt-4 font-serif text-4xl text-white"
        style={{
          opacity: itemsVisible ? 1 : 0,
          transform: itemsVisible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
        }}
      >
        Five years, in motion.
      </h2>

      {/* Timeline */}
      <div className="relative mt-14">
        {/* Animated connector line */}
        <div
          className="absolute top-5 left-5 right-5 hidden h-px md:block"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,166,5,0.25) 20%, rgba(255,166,5,0.4) 50%, rgba(255,166,5,0.25) 80%, transparent)",
            clipPath: lineVisible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            transition: "clip-path 1.4s cubic-bezier(0.4,0,0.2,1)",
          }}
        />

        <ol className="grid gap-8 md:grid-cols-6">
          {milestones.map((m, i) => (
            <MilestoneItem
              key={m.year}
              m={m}
              i={i}
              isActive={active === i}
              visible={itemsVisible}
            />
          ))}
        </ol>
      </div>

      <style>{`
        @keyframes ms-pulse-ring-1 {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.1); opacity: 0;   }
        }
        @keyframes ms-pulse-ring-2 {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(2.6); opacity: 0;   }
        }
        @keyframes ms-dot-pop {
          0%   { transform: scale(0);    opacity: 0; }
          60%  { transform: scale(1.3);  opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
        @keyframes ms-core-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,166,5,0);   }
          50%       { box-shadow: 0 0 8px 3px rgba(255,166,5,0.5); }
        }
        .ms-ring-1 { animation: ms-pulse-ring-1 1.4s ease-out infinite; }
        .ms-ring-2 { animation: ms-pulse-ring-2 1.4s ease-out 0.45s infinite; }
        .ms-core-glow { animation: ms-core-glow 1.4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function MilestoneItem({
  m,
  i,
  isActive,
  visible,
}: {
  m: { year: string; label: string };
  i: number;
  isActive: boolean;
  visible: boolean;
}) {
  const delay = 0.55 + i * 0.13;
  const dotDelay = 0.6 + i * 0.13;

  return (
    <li
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {/* Dot wrapper */}
      <div className="relative inline-flex items-center justify-center w-10 h-10">
        {/* Pulse rings  only when active */}
        {isActive && (
          <>
            <span className="ms-ring-1 absolute inset-0 rounded-full border border-[#FFA605]/40 pointer-events-none" />
            <span className="ms-ring-2 absolute inset-0 rounded-full border border-[#FFA605]/30 pointer-events-none" />
          </>
        )}

        {/* Dot inner circle */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center border"
          style={{
            borderColor: isActive
              ? "rgba(255,166,5,0.9)"
              : "rgba(255,166,5,0.4)",
            background: isActive
              ? "rgba(255,166,5,0.2)"
              : "rgba(255,166,5,0.08)",
            transform: isActive ? "scale(1.12)" : "scale(1)",
            animation: `ms-dot-pop 0.45s cubic-bezier(0.34,1.56,0.64,1) ${dotDelay}s both`,
            transition:
              "background 0.4s ease, border-color 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          {/* Core dot */}
          <div
            className={isActive ? "ms-core-glow" : ""}
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#FFA605",
              transform: isActive ? "scale(1.5)" : "scale(1)",
              transition: "transform 0.4s ease",
            }}
          />
        </div>
      </div>

      {/* Year */}
      <p
        className="mt-4 font-serif text-2xl"
        style={{
          color: isActive ? "#FFA605" : "rgba(255,255,255,0.5)",
          transform: isActive ? "translateY(-2px)" : "translateY(0)",
          transition: "color 0.4s ease, transform 0.4s ease",
        }}
      >
        {m.year}
      </p>

      {/* Label */}
      <p
        className="mt-2 text-sm leading-6"
        style={{
          color: isActive ? "rgba(255,255,255,0.9)" : "rgb(100,116,139)",
          transition: "color 0.4s ease",
        }}
      >
        {m.label}
      </p>
    </li>
  );
}
