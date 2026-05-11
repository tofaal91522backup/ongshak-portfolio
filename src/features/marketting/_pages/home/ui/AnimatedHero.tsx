"use client";

import { landingPageImagePath } from "@/constants/imagePath";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import MainHero from "./MainHero";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AnimatedHero() {
  const logoGradientStart =
    "radial-gradient(circle at 50% 200vh, rgba(255, 166, 5, 0) 0, rgba(255, 166, 5, 0.55) 65vh, rgba(19, 93, 201, 0.65) 100vh, #32c2d88c 125vh, rgba(14, 146, 185, 0) 150vh)";

  const logoGradientEnd =
    "radial-gradient(circle at 50% 3.9575vh, rgb(255, 166, 5) 0vh, rgb(253, 125, 24) 35vh, rgb(19, 93, 201) 75vh, rgb(50, 194, 216) 115vh, rgba(14, 146, 185, 0) 140.599vh)";
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Intro animation
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

      // Scroll indicator bounce
      const bounceTimeline = gsap.timeline({ repeat: -1, yoyo: true });
      bounceTimeline.to(".scroll-indicator", {
        y: 20,
        opacity: 0.6,
        duration: 0.8,
        ease: "power1.inOut",
      });

      // Main scroll timeline
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

      tl.set(".hero-main-container", { scale: 1.25 });

      tl.to(".hero-main-container", { scale: 1, duration: 1 });

      tl.to(".hero-main-logo", { opacity: 0, duration: 0.5 }, "<");

      tl.to(".hero-main-image", { opacity: 0, duration: 0.9 }, "<+=0.5");

      tl.to(
        ".hero-main-container",
        { backgroundSize: "28vh", duration: 1.5 },
        "<+=0.2",
      );

      tl.fromTo(
        ".hero-text",
        {
          backgroundImage: logoGradientStart,
        },
        {
          backgroundImage: logoGradientEnd,
          duration: 3,
        },
        "<1.2",
      );

      tl.fromTo(
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
        "<0.2",
      );

      tl.set(".hero-main-container", { opacity: 0 });

      tl.to(".hero-1-container", { scale: 0.85, duration: 3 }, "<-=3");

      tl.set(
        ".hero-1-container",
        {
          maskImage: `radial-gradient(circle at 50% 16.1137vh, rgb(0, 0, 0) 96.1949vh, rgba(0, 0, 0, 0) 112.065vh)`,
        },
        "<+=2.1",
      );

      tl.to(
        ".hero-1-container",
        {
          maskImage: `radial-gradient(circle at 50% -40vh, rgb(0, 0, 0) 0vh, rgba(0, 0, 0, 0) 80vh)`,
          duration: 2,
        },
        "<+=0.2",
      );

      tl.to(".hero-text-logo", { opacity: 0, duration: 2 }, "<1.5");

      tl.set(".hero-1-container", { opacity: 0 });
      tl.set(".hero-2-container", { visibility: "visible" });

      tl.to(".hero-2-container", { opacity: 1, duration: 3 }, "<+=0.2");

      tl.fromTo(
        ".hero-2-container",
        {
          backgroundImage: logoGradientStart,
        },
        {
          backgroundImage: logoGradientEnd,
          duration: 3,
        },
        "<1.2",
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="gta-container relative min-h-svh"
      style={{
        background:
          "linear-gradient(223.17deg, rgb(28, 24, 41) 0%, rgb(27, 24, 40) 8.61%, rgb(25, 23, 36) 17.21%, rgb(22, 21, 32) 25.82%, rgb(20, 19, 28) 34.42%, rgb(18, 18, 24) 43.03%, rgb(17, 17, 23) 51.63%)",
      }}
    >
      {/* Overlay */}
      <div className="overlay fixed inset-0 bg-black z-[1] pointer-events-none" />

      {/* Hero 1 */}
      <div className="hero-1-container w-full h-screen relative">
        {/* Hero Main Container */}
        <div
          className="hero-main-container w-full h-screen relative"
          style={{
            // transform: "scale(1.25)",
            backgroundImage: `url('${landingPageImagePath.ongshakLogo}')`,
            backgroundSize: "1000vh",
            backgroundPosition: "50% 41.7%",
            backgroundRepeat: "no-repeat",
            backgroundOrigin: "content-box",
            paddingBottom: "200px",
          }}
        >
          <div className="hero-main-image w-full h-screen absolute inset-0 object-cover ">
            <MainHero />
          </div>
        </div>

        {/* Hero Text + Logo Container */}
        <div
          className="hero-text-logo-container w-full h-screen absolute inset-0 -z-[1] flex flex-col gap-16 justify-center items-center"
          style={{ backgroundColor: "transparent" }}
        >
          {/* Purple Logo */}
          <div
            className="hero-text-logo flex items-center justify-center w-full h-screen absolute inset-0"
            style={{
              backgroundImage: `url('${landingPageImagePath.ongshakLogo}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 41.7%",
              backgroundSize: "28vh",
              backgroundOrigin: "content-box",
              paddingBottom: "200px",
            }}
          />

          {/* Date Text */}
          <div>
            <h3
              className="hero-text text-center uppercase w-full leading-[0.9] text-[4.5rem] md:text-[6.5rem] lg:text-[7.5rem] "
              style={{
                color: "#32C2D8",
                backgroundImage: logoGradientStart,
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginTop: "55%",
              }}
            >
              Ongshak
              <br />
              Since
              <br />
              2021
            </h3>
          </div>
        </div>
      </div>

      {/* Hero 2 */}
      <div
        className="hero-2-container w-full h-screen absolute inset-0 flex flex-col gap-8 justify-center items-start text-left px-8 lg:px-0"
        style={{
          opacity: 0,
          visibility: "hidden",
          backgroundImage: logoGradientStart,
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <div className="w-full lg:max-w-[60%] lg:mx-auto flex flex-col md:gap-8 gap-6">
          <h3 className="font-bold text-4xl lg:text-5xl text-center md:text-start">
            Tech Stack That Powers Modern Products.
          </h3>

          <p
            className="text-center md:text-left text-gray-300"
            style={{ fontSize: "clamp(1rem, 2vw, 2rem)" }}
          >
            From React, Next.js, Node.js, Django, Flutter, and React Native to
            AI, cloud, databases, and DevOps. Ongshak builds scalable digital
            products with the technologies modern businesses need.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/services#stack">
              <button
                className="rounded-full w-full md:w-fit px-6 py-3 font-semibold shadow-lg transition hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, #FFA605 0%, #FD7D18 100%)",
                  WebkitTextFillColor: "#111827",
                }}
              >
                Explore Our Stack
              </button>
            </Link>
            <Link href="/contact">
              <button
                className="rounded-full w-full md:w-fit border px-6 py-3 font-semibold backdrop-blur-md transition hover:scale-[1.02]"
                style={{
                  borderColor: "#32c2d88c",
                  background: "rgba(19, 93, 201, 0.12)",
                  WebkitTextFillColor: "#32C2D8",
                }}
              >
                Build With Us →
              </button>
            </Link>
          </div>

          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-2 md:justify-start justify-center font-bold"
            style={{
              WebkitTextFillColor: "#32c2d88c",
            }}
          >
            <span>347+ Projects</span>
            <span className="opacity-40">|</span>
            <span>50+ Clients</span>
            <span className="opacity-40">|</span>
            <span>5+ Years</span>
            <span className="opacity-40">|</span>
            <span>12+ Industries</span>
            <span className="opacity-40">|</span>
            <span>3 Ventures Built</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator
      <div
        className="scroll-indicator absolute left-1/2 -translate-x-1/2 ] z-10 flex flex-col items-center opacity-0"
        style={{ bottom: "5%" }}
      >
        <span>Scroll down</span>
        <ChevronDown />
      </div> */}
    </div>
  );
}
// {/* <div className="hero-main-logo mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-white/80 backdrop-blur-md"> <span className="h-1.5 w-1.5 rounded-full bg-[#FFA605] shadow-[0_0_12px_#FFA605]" /> Ongshak </div> {/* Brand reveal text */} <h1 className="hero-text bg-clip-text font-serif text-6xl leading-[0.95] tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-[10rem]" style={{ backgroundImage: logoGradientStart }} > <span className="block">Ongshak</span> <span className="mt-2 block text-2xl font-sans font-light tracking-[0.4em] text-white/70 sm:text-3xl md:text-4xl"> SINCE 2021 </span> </h1> </div> */}
