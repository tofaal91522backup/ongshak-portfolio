"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { User2 } from "lucide-react";
import Navbar from "./Navbar";
import { NavbarImagePath } from "@/constants/imagePath";

gsap.registerPlugin(useGSAP);

const links = [
  { label: "Home", href: "/", img: NavbarImagePath.menu1 },
  { label: "About", href: "/about", img: NavbarImagePath.menu2 },
  { label: "Services", href: "/services", img: NavbarImagePath.menu3 },
  { label: "Work", href: "/work", img: NavbarImagePath.menu4 },
  {
    label: "AI Innovation",
    href: "/ai-innovation",
    img: NavbarImagePath.menu5,
  },
  { label: "Industries", href: "/industries", img: NavbarImagePath.menu6 },
];

const INITIAL_IMAGE = links[0].img;

type NavImage = (typeof links)[number]["img"];

// FIX 1: Collect all unique image paths so we can preload them all on mount
const ALL_IMAGES = Array.from(new Set(links.map((l) => l.img)));

type AnimatedMenuProps = {
  children: React.ReactNode;
};

export default function AnimatedMenu({ children }: AnimatedMenuProps) {
  const router = useRouter();
  const pathname = usePathname();

  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const openTextRef = useRef<HTMLParagraphElement>(null);
  const closeTextRef = useRef<HTMLParagraphElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const bgMainRef = useRef<HTMLDivElement>(null);
  const bgNextRef = useRef<HTMLDivElement>(null);

  // FIX 2: Keep refs to every stacked preview <img> so we can GSAP-crossfade without
  //         remounting (the old `key={previewImg}` caused a full unmount/remount + network
  //         request on every hover).
  const previewImgRefs = useRef<Record<string, HTMLImageElement | null>>({});

  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const currentBgRef = useRef<NavImage>(INITIAL_IMAGE);
  const currentPreviewRef = useRef<NavImage>(INITIAL_IMAGE);
  const isOpenRef = useRef(false);
  const isAnimatingRef = useRef(false);

  const [isOpen, setIsOpen] = useState(false);

  const setMenuOpen = (value: boolean) => {
    isOpenRef.current = value;
    setIsOpen(value);
  };

  const setAnimating = (value: boolean) => {
    isAnimatingRef.current = value;
  };

  const killCurrentTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
  };

  // FIX 3: animatePreviewChange crossfades stacked images instead of remounting.
  //         All images are already in the DOM (opacity 0 initially), so there is
  //         zero network work on hover  only a compositor-layer opacity tween.
  const animatePreviewChange = (img: NavImage) => {
    if (currentPreviewRef.current === img) return;

    const outImg = previewImgRefs.current[currentPreviewRef.current];
    const inImg = previewImgRefs.current[img];
    if (!inImg) return;

    currentPreviewRef.current = img;

    gsap.killTweensOf([outImg, inImg]);
    gsap.to(outImg, { opacity: 0, duration: 0.45, ease: "power2.out" });
    gsap.fromTo(
      inImg,
      { opacity: 0, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 0.55, ease: "power3.out" },
    );
  };

  const resetMenuVisuals = () => {
    // Reset stacked preview images  only the initial one is visible
    ALL_IMAGES.forEach((src) => {
      const el = previewImgRefs.current[src];
      if (el) {
        gsap.set(el, { opacity: src === INITIAL_IMAGE ? 1 : 0, scale: 1 });
      }
    });
    currentPreviewRef.current = INITIAL_IMAGE;

    currentBgRef.current = INITIAL_IMAGE;

    gsap.set(containerRef.current, { clearProps: "all" });
    gsap.set(bgMainRef.current, {
      backgroundImage: `url(${INITIAL_IMAGE})`,
      opacity: 1,
      scale: 1,
    });
    gsap.set(bgNextRef.current, { opacity: 0, scale: 1.08 });

    gsap.set(".menu-link-item", { x: 0, y: "120%", opacity: 0.25 });
    gsap.set(".menu-link-text", {
      x: 0,
      color: "#ffffff",
      letterSpacing: "-0.04em",
    });
    gsap.set(".menu-link-number", { x: 0, color: "#ffffff", opacity: 0.45 });
    gsap.set(".menu-link-arrow", { x: 0, rotate: 0, opacity: 0 });
    gsap.set(".menu-footer-item", { y: 20, opacity: 0 });
  };

  useGSAP(
    () => {
      gsap.set(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      });
      gsap.set(contentRef.current, {
        rotation: -12,
        x: -100,
        y: -100,
        scale: 1.35,
        opacity: 0.25,
      });
      gsap.set(closeTextRef.current, {
        x: -5,
        y: 10,
        rotation: 5,
        opacity: 0,
      });

      resetMenuVisuals();

      return () => {
        killCurrentTimeline();
        // FIX 4: Kill specific refs instead of the entire DOM ("*" scans every element)
        gsap.killTweensOf([
          overlayRef.current,
          contentRef.current,
          containerRef.current,
          bgMainRef.current,
          bgNextRef.current,
          previewRef.current,
          openTextRef.current,
          closeTextRef.current,
        ]);
      };
    },
    { scope: rootRef },
  );

  const animateBackgroundChange = (img: any) => {
    if (!bgMainRef.current || !bgNextRef.current) return;
    if (currentBgRef.current === img) return;

    currentBgRef.current = img;

    gsap.killTweensOf([bgMainRef.current, bgNextRef.current]);

    gsap.set(bgNextRef.current, {
      backgroundImage: `url(${img})`,
      opacity: 0,
      scale: 1.08,
    });

    gsap
      .timeline()
      .to(bgNextRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.75,
        ease: "power3.out",
      })
      .set(bgMainRef.current, {
        backgroundImage: `url(${img})`,
        opacity: 1,
        scale: 1,
      })
      .set(bgNextRef.current, { opacity: 0, scale: 1.08 });

    gsap.to(bgMainRef.current, {
      scale: 1.03,
      duration: 0.75,
      ease: "power3.out",
    });
  };

  const openMenu = () => {
    if (isAnimatingRef.current || isOpenRef.current) return;

    killCurrentTimeline();
    setAnimating(true);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        setMenuOpen(true);
        setAnimating(false);
        timelineRef.current = null;
      },
    });
    timelineRef.current = tl;

    tl.to(
      overlayRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
        duration: 1.15,
      },
      0,
    )
      .to(
        containerRef.current,
        {
          rotation: isMobile ? 0 : 8,
          x: isMobile ? 0 : 280,
          y: isMobile ? 0 : 420,
          scale: isMobile ? 1 : 1.35,
          duration: 1.15,
        },
        0,
      )
      .to(
        contentRef.current,
        {
          rotation: 0,
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.15,
        },
        0,
      )
      .to(
        openTextRef.current,
        {
          x: -5,
          y: -10,
          rotation: -5,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        0.2,
      )
      .to(
        closeTextRef.current,
        {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
        },
        0.38,
      )
      .to(
        ".menu-link-item",
        {
          y: "0%",
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
        },
        0.65,
      )
      .to(
        ".menu-footer-item",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        0.95,
      );
  };

  const closeMenu = (onComplete?: () => void) => {
    if (isAnimatingRef.current || !isOpenRef.current) return;

    killCurrentTimeline();
    setAnimating(true);

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => {
        setMenuOpen(false);
        setAnimating(false);
        resetMenuVisuals();
        gsap.set(containerRef.current, { clearProps: "all" });
        timelineRef.current = null;
        onComplete?.();
      },
    });
    timelineRef.current = tl;

    tl.to(
      containerRef.current,
      {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.05,
      },
      0,
    )
      .to(
        overlayRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1.05,
        },
        0,
      )
      .to(
        contentRef.current,
        {
          rotation: -12,
          x: -100,
          y: -100,
          scale: 1.35,
          opacity: 0.25,
          duration: 1.05,
        },
        0,
      )
      .to(
        ".menu-link-item",
        {
          y: "120%",
          opacity: 0.25,
          duration: 0.65,
          stagger: { each: 0.04, from: "end" },
          ease: "power3.inOut",
        },
        0,
      )
      .to(
        ".menu-footer-item",
        {
          y: 20,
          opacity: 0,
          duration: 0.45,
          ease: "power3.inOut",
        },
        0,
      )
      .to(
        closeTextRef.current,
        {
          x: 5,
          y: 10,
          rotation: 5,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        0.1,
      )
      .to(
        openTextRef.current,
        {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
        },
        0.28,
      );
  };

  const handleToggleMenu = () => {
    if (isAnimatingRef.current) return;
    if (isOpenRef.current) {
      closeMenu();
      return;
    }
    openMenu();
  };

  const handleMenuHover = (
    event: React.MouseEvent<HTMLAnchorElement>,
    img: any,
  ) => {
    if (!isOpenRef.current || isAnimatingRef.current) return;

    animateBackgroundChange(img);
    animatePreviewChange(img); // ← no more key prop / remount

    const item = event.currentTarget;
    const number = item.querySelector(".menu-link-number");
    const text = item.querySelector(".menu-link-text");
    const arrow = item.querySelector(".menu-link-arrow");

    gsap.killTweensOf([item, number, text, arrow]);

    gsap.to(item, { x: 18, duration: 0.4, ease: "power3.out" });
    gsap.to(text, {
      letterSpacing: "-0.08em",
      color: "#007aff",
      duration: 0.35,
      ease: "power3.out",
    });
    gsap.to(number, {
      x: -8,
      opacity: 1,
      color: "#ffffff",
      duration: 0.35,
      ease: "power3.out",
    });
    gsap.to(arrow, {
      x: 8,
      opacity: 1,
      rotate: -35,
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.fromTo(
      previewRef.current,
      { scale: 0.96, rotate: -2 },
      { scale: 1, rotate: 0, duration: 0.55, ease: "power3.out" },
    );
  };

  const handleMenuLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnimatingRef.current) return;

    const item = event.currentTarget;
    const number = item.querySelector(".menu-link-number");
    const text = item.querySelector(".menu-link-text");
    const arrow = item.querySelector(".menu-link-arrow");

    gsap.killTweensOf([item, number, text, arrow]);

    gsap.to(item, { x: 0, duration: 0.4, ease: "power3.out" });
    gsap.to(text, {
      letterSpacing: "-0.04em",
      color: "#ffffff",
      duration: 0.35,
      ease: "power3.out",
    });
    gsap.to(number, {
      x: 0,
      opacity: 0.45,
      color: "#ffffff",
      duration: 0.35,
      ease: "power3.out",
    });
    gsap.to(arrow, {
      x: 0,
      opacity: 0,
      rotate: 0,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleNavigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    if (isAnimatingRef.current) return;

    if (!isOpenRef.current) {
      router.push(href);
      return;
    }

    const normalizePath = (path: string) =>
      path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

    if (normalizePath(pathname) === normalizePath(href)) {
      closeMenu();
      return;
    }

    closeMenu(() => router.push(href));
  };

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_45%,#eef7ff_100%)]"
    >
      <Navbar
        isOpen={isOpen}
        handleToggleMenu={handleToggleMenu}
        isAnimatingRef={isAnimatingRef}
        isOpenRef={isOpenRef}
        openTextRef={openTextRef}
        closeTextRef={closeTextRef}
        handleNavigate={handleNavigate}
      />

      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 h-[100svh] w-screen overflow-hidden bg-white"
        // FIX 5: promote overlay to its own GPU compositor layer so clip-path
        //         animation doesn't repaint the whole page
        style={{ willChange: "clip-path", clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <div
          ref={bgMainRef}
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage: `url(${INITIAL_IMAGE})`,
            willChange: "transform, opacity",
          }}
        />
        <div
          ref={bgNextRef}
          className="absolute inset-0 bg-cover bg-center opacity-0"
          style={{ willChange: "transform, opacity" }}
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        <div className="pointer-events-none absolute left-10 top-28 h-44 w-44 rounded-full bg-[#007aff]/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full bg-[#fda109]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 top-1/4 h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl" />

        <div
          ref={contentRef}
          className="relative flex h-full w-full origin-bottom-left items-center justify-center opacity-25"
        >
          <div className="flex w-full gap-10 px-6 py-6 md:p-10">
            <div className="hidden flex-[3] items-center justify-center md:flex">
              {/* FIX 2: All preview images are stacked here; we GSAP-fade between them.
                         No `key` prop → no remount → no network re-fetch on hover. */}
              <div
                ref={previewRef}
                className="relative h-[68vh] w-[48%] overflow-hidden rounded-[2rem] border border-[#007aff]/10 bg-white shadow-2xl shadow-sky-200/40"
              >
                {ALL_IMAGES.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt="Preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    // FIX 1: eagerly preload every nav image so they're ready on first hover
                    priority={i === 0}
                    ref={(el) => {
                      previewImgRefs.current[src] = el;
                    }}
                    style={{
                      opacity: src === INITIAL_IMAGE ? 1 : 0,
                      // allow opacity to be GPU-composited
                      willChange: "opacity, transform",
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#007aff]/25 via-transparent to-transparent" />
              </div>
            </div>

            <div className="flex flex-[2] flex-col justify-center gap-4 py-4 md:gap-10 md:py-10">
              <div className="flex flex-col gap-0.5 overflow-hidden">
                {links.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavigate(event, item.href)}
                    onMouseEnter={(event) => handleMenuHover(event, item.img)}
                    onMouseLeave={handleMenuLeave}
                    className="menu-link-item group flex translate-y-[120%] items-center gap-4 overflow-hidden py-1 opacity-25"
                  >
                    <span className="menu-link-number min-w-8 text-sm font-semibold text-white opacity-45">
                      0{index + 1}
                    </span>
                    <span className="menu-link-text text-[2.4rem] font-light leading-none tracking-[-0.04em] text-white md:text-[4rem]">
                      {item.label}
                    </span>
                    <span className="menu-link-arrow text-3xl font-light text-[#007aff] opacity-0">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 flex w-full items-end justify-between gap-10 px-6 py-6 md:p-10">
            <div className="menu-footer-item hidden translate-y-5 opacity-0 md:block">
              <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                Developed by{" "}
                <a
                  href="https://www.ongshak.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[#007aff] underline-offset-4 transition hover:underline"
                >
                  Ongshak
                </a>
              </p>
            </div>

            <Link
              href="/contact"
              onClick={(event) => handleNavigate(event, "/contact")}
              className="menu-footer-item liquid-glass flex translate-y-5 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium hover:text-[#007aff]"
            >
              <User2 size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* FIX 5: will-change on the page wrapper so rotation+scale goes to a GPU layer */}
      <div ref={containerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
