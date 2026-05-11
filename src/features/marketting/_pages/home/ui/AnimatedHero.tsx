"use client";

import { landingPageImagePath } from "@/constants/imagePath";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import MainHero from "./MainHero";
import Link from "next/link";
import Image from "next/image";

const webTechs = [
  { name: "Next.js", icon: "/images/tech-icons/nextjs.svg" },
  { name: "Django", icon: "/images/tech-icons/django.svg" },
  { name: "PostgreSQL", icon: "/images/tech-icons/postgresql.svg" },
  { name: "AWS", icon: "/images/tech-icons/aws.svg" },
  { name: "AWS Lambda", icon: "/images/tech-icons/aws-lambda.svg" },
  { name: "Nginx", icon: "/images/tech-icons/nginx.svg" },
  { name: "Firebase", icon: "/images/tech-icons/firebase.svg" },
];
const mobileTechs = [
  { name: "React Native", icon: "/images/tech-icons/react.svg" },
  { name: "Flutter", icon: "/images/tech-icons/flutter.svg" },
];
const embeddedTechs = [
  { name: "STM32", icon: "/images/tech-icons/stm32.svg" },
  { name: "Arduino", icon: "/images/tech-icons/arduino.svg" },
  { name: "Raspberry Pi", icon: "/images/tech-icons/raspberry-pi.svg" },
  { name: "Jetson Nano", icon: "/images/tech-icons/nvidia.svg" },
  { name: "PlatformIO", icon: "/images/tech-icons/platformio.svg" },
];

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

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          const { isMobile } = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };

          const scrubValue = isMobile ? 0.5 : 2;
          const scrollEnd = isMobile ? "+=1200" : "+=2000";

          // Main scroll timeline
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              scrub: scrubValue,
              pin: true,
              start: "top top",
              end: scrollEnd,
              invalidateOnRefresh: true,
            },
            defaults: { force3D: true },
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
        className="hero-2-container w-full h-screen absolute inset-0 flex flex-col gap-6 justify-center items-center px-6"
        style={{
          opacity: 0,
          visibility: "hidden",
          backgroundImage: logoGradientStart,
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {/* Heading */}
        <h3 className="font-bold text-3xl lg:text-4xl text-center leading-tight">
          Tech Stack That Powers Modern Products.
        </h3>

        {/* Three category columns */}
        <div className="flex flex-col md:flex-row gap-7 md:gap-10 w-full max-w-3xl justify-center items-center md:items-start">
          {/* Web */}
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ WebkitTextFillColor: "#32C2D8" }}
            >
              Web
            </span>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-4">
              {webTechs.map((t) => (
                <div key={t.name} className="flex flex-col items-center gap-1.5">
                  <Image
                    src={t.icon}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                  <span
                    className="text-[9px] text-center leading-tight"
                    style={{ WebkitTextFillColor: "rgba(255,255,255,0.55)" }}
                  >
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-px self-stretch bg-white/10" />

          {/* Mobile */}
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ WebkitTextFillColor: "#FFA605" }}
            >
              Mobile
            </span>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-4">
              {mobileTechs.map((t) => (
                <div key={t.name} className="flex flex-col items-center gap-1.5">
                  <Image
                    src={t.icon}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                  <span
                    className="text-[9px] text-center leading-tight"
                    style={{ WebkitTextFillColor: "rgba(255,255,255,0.55)" }}
                  >
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-px self-stretch bg-white/10" />

          {/* Embedded & IoT */}
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ WebkitTextFillColor: "#FD7D18" }}
            >
              Embedded &amp; IoT
            </span>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-4">
              {embeddedTechs.map((t) => (
                <div key={t.name} className="flex flex-col items-center gap-1.5">
                  <Image
                    src={t.icon}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                  />
                  <span
                    className="text-[9px] text-center leading-tight"
                    style={{ WebkitTextFillColor: "rgba(255,255,255,0.55)" }}
                  >
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3 mt-2">
          <Link href="/work">
            <button
              className="rounded-full md:px-6 px-4 md:py-3 py-2.5 font-semibold shadow-lg transition hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #FFA605 0%, #FD7D18 100%)",
                WebkitTextFillColor: "#111827",
              }}
            >
              Explore Our Work
            </button>
          </Link>
          <Link href="/contact">
            <button
              className="rounded-full border md:px-6 px-4 md:py-3 py-2.5 font-semibold backdrop-blur-md transition hover:scale-[1.02]"
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
      </div>
    </div>
  );
}
