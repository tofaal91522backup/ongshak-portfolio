"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugin outside to prevent re-registration errors in Next.js
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GTAVIPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // useGSAP Hook replaces useEffect
  useGSAP(
    () => {
      // 1. Initial Setup
      document.body.style.overflow = "hidden";

      // 2. Hero Intro Animation
      gsap.from(".hero-main-container", {
        scale: 1.45,
        duration: 2.8,
        ease: "power3.out",
      });

      gsap.to(".overlay", {
        opacity: 0,
        duration: 2.8,
        ease: "power3.out",
        onComplete: () => {
          document.body.style.overflow = "visible";
          document.body.style.overflowX = "hidden";
        },
      });

      // 3. Scroll Indicator Bounce
      gsap.to(".scroll-indicator", {
        y: 20,
        opacity: 0.6,
        duration: 0.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      // 4. Main ScrollTrigger Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 2,
          pin: true,
          start: "top top",
          end: "+=2000",
          // ease: "none",
        },
      });

      tl.set(".hero-main-container", { scale: 1.25 })
        .to(".hero-main-container", { scale: 1, duration: 1 })
        .to(".hero-main-logo", { opacity: 0, duration: 0.5 }, "<")
        .to(".hero-main-image", { opacity: 0, duration: 0.9 }, "<+=0.5")
        .to(".hero-main-container", { backgroundSize: "28vh", duration: 1.5 }, "<+=0.2")
        .fromTo(
          ".hero-text",
          {
            backgroundImage: `radial-gradient(circle at 50% 200vh, rgba(255, 214, 135, 0) 0, rgba(157, 47, 106, 0.5) 90vh, rgba(157, 47, 106, 0.8) 120vh, rgba(32, 31, 66, 0) 150vh)`,
          },
          {
            backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh, rgb(247, 77, 82) 50.011vh, rgb(145, 42, 105) 90.0183vh, rgba(32, 31, 66, 0) 140.599vh)`,
            duration: 3,
          },
          "<1.2"
        )
        .fromTo(
          ".hero-text-logo",
          {
            opacity: 0,
            maskImage: `radial-gradient(circle at 50% 145.835%, rgb(0, 0, 0) 36.11%, rgba(0, 0, 0, 0) 68.055%)`,
          },
          {
            opacity: 1,
            maskImage: `radial-gradient(circle at 50% 105.594%, rgb(0, 0, 0) 62.9372%, rgba(0, 0, 0, 0) 81.4686%)`,
            duration: 3,
          },
          "<0.2"
        )
        .set(".hero-main-container", { opacity: 0 })
        .to(".hero-1-container", { scale: 0.85, duration: 3 }, "<-=3")
        .set(
          ".hero-1-container",
          {
            maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)`,
          },
          "<+=2.1"
        )
        .to(
          ".hero-1-container",
          {
            maskImage: `radial-gradient(circle at 50% -40vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)`,
            duration: 2,
          },
          "<+=0.2"
        )
        .to(".hero-text-logo", { opacity: 0, duration: 2 }, "<1.5")
        .set(".hero-1-container", { opacity: 0 })
        .set(".hero-2-container", { visibility: "visible" })
        .to(".hero-2-container", { opacity: 1, duration: 3 }, "<+=0.2")
        .fromTo(
          ".hero-2-container",
          {
            backgroundImage: `radial-gradient(circle at 50% 200vh, rgba(255, 214, 135, 0) 0, rgba(157, 47, 106, 0.5) 90vh, rgba(157, 47, 106, 0.8) 120vh, rgba(32, 31, 66, 0) 150vh)`,
          },
          {
            backgroundImage: `radial-gradient(circle at 50% 3.9575vh, rgb(255, 213, 133) 0vh, rgb(247, 77, 82) 50.011vh, rgb(145, 42, 105) 90.0183vh, rgba(32, 31, 66, 0) 140.599vh)`,
            duration: 3,
          },
          "<1.2"
        );
    },
    { scope: containerRef } // Scopes all animations to containerRef
  );

  return (
    <div
      ref={containerRef}
      className="container relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-[#1c1829] via-[#161520] to-[#111117] font-sans"
    >
      <div className="overlay fixed inset-0 z-10 pointer-events-none bg-black"></div>

      <div className="hero-1-container h-full w-full">
        <div
          className="hero-main-container relative w-full h-screen pb-[200px]"
          style={{
            backgroundImage: "url('/logo_white.svg')", // Update path if needed
            backgroundSize: "1000vh",
            backgroundPosition: "50% 41.7%",
            backgroundRepeat: "no-repeat",
            backgroundOrigin: "content-box",
          }}
        >
          <img
            className="hero-main-logo absolute inset-0 z-[1] w-full h-screen object-cover"
            draggable="false"
            src="/gta_logo_cut.webp"
            alt="gta logo overlay"
          />
          <img
            className="hero-main-image absolute inset-0 w-full h-screen object-cover"
            draggable="false"
            src="/gta_hero.webp"
            alt="gta background"
          />
        </div>

        <div className="hero-text-logo-container absolute inset-0 z-[-1] flex flex-col items-center justify-center gap-16 bg-transparent">
          <div
            className="hero-text-logo absolute inset-0 flex h-screen w-full items-center justify-center pb-[200px]"
            style={{
              backgroundImage: "url('/gta_logo_purple.webp')",
              backgroundSize: "28vh",
              backgroundPosition: "50% 41.7%",
              backgroundRepeat: "no-repeat",
              backgroundOrigin: "content-box",
            }}
          ></div>
          <div className="relative z-[2] w-full text-center">
            <h3
              className="hero-text mt-[55%] w-full bg-clip-text text-[4.5rem] uppercase leading-[0.9] text-transparent lg:text-[6rem]"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 200vh, rgba(255, 214, 135, 0) 0, rgba(157, 47, 106, 0.5) 90vh, rgba(157, 47, 106, 0.8) 120vh, rgba(32, 31, 66, 0) 150vh)`,
              }}
            >
              Coming<br />
              May 26<br />
              2026
            </h3>
          </div>
        </div>
      </div>

      <div
        className="hero-2-container invisible absolute inset-0 flex h-screen w-full flex-col items-start justify-center gap-8 px-8 text-left opacity-0 lg:mx-auto lg:max-w-[60%] lg:px-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 200vh, rgba(255, 214, 135, 0) 0, rgba(157, 47, 106, 0.5) 90vh, rgba(157, 47, 106, 0.8) 120vh, rgba(32, 31, 66, 0) 150vh)`,
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <h3 className="text-[2.5rem] lg:text-[3.5rem]">Vice City, USA.</h3>
        <p className="max-w-[90%] text-[1rem] lg:text-[2rem]">
          Jason and Lucia have always known the deck is stacked against them.
          But when an easy score goes wrong, they find themselves on the darkest
          side of the sunniest place in America, in the middle of a criminal
          conspiracy stretching across the state of Leonida — forced to rely on
          each other more than ever if they want to make it out alive.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-[10%] left-1/2 z-10 h-[14px] w-[34px] -translate-x-1/2 lg:bottom-[30px]">
        <svg
          width="34"
          height="14"
          viewBox="0 0 34 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          className="h-full w-full text-[#ffb0c4]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.5609 1.54346C34.0381 2.5875 33.6881 3.87821 32.7791 4.42633L17.0387 13.9181L1.48663 4.42115C0.580153 3.86761 0.235986 2.57483 0.717909 1.53365C1.19983 0.492464 2.32535 0.097152 3.23182 0.650692L17.0497 9.08858L31.051 0.64551C31.96 0.0973872 33.0837 0.499411 33.5609 1.54346Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
}