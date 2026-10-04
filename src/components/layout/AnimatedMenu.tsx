"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
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
    label: "Case Studies",
    href: "/case-studies",
    img: NavbarImagePath.menu5,
  },
  { label: "Industries", href: "/industries", img: NavbarImagePath.menu6 },
];

const INITIAL_IMAGE = links[0].img;

type NavImage = (typeof links)[number]["img"];

const ALL_IMAGES = Array.from(new Set(links.map((l) => l.img)));

// Module scope so add/removeEventListener always see the same function identity.
const preventScroll = (event: Event) => event.preventDefault();

const OPEN_DURATION = 0.9;
const CLOSE_DURATION = 0.7;

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

  // Stacked <Image> layers for both the full-bleed backdrop and the side preview.
  // Everything lives in the DOM from the start and we only tween opacity, so a
  // hover never triggers a mount or a network request.
  const bgImgRefs = useRef<Record<string, HTMLImageElement | null>>({});
  const previewImgRefs = useRef<Record<string, HTMLImageElement | null>>({});

  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const currentImageRef = useRef<NavImage>(INITIAL_IMAGE);
  const isOpenRef = useRef(false);
  const isAnimatingRef = useRef(false);

  const [isOpen, setIsOpen] = useState(false);
  // The preview column is desktop-only; keeping it out of the mobile tree avoids
  // eagerly downloading a second copy of all six images on phones.
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(query.matches);

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  const setMenuOpen = (value: boolean) => {
    isOpenRef.current = value;
    setIsOpen(value);
  };

  const setAnimating = (value: boolean) => {
    isAnimatingRef.current = value;
  };

  // Block page scrolling for the whole open..close window without touching body
  // overflow, which would shift the layout and disturb the pinned hero.
  const setScrollLocked = (locked: boolean) => {
    window.removeEventListener("wheel", preventScroll);
    window.removeEventListener("touchmove", preventScroll);

    if (locked) {
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    }
  };

  const killCurrentTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
  };

  const q = (selector: string) =>
    gsap.utils.toArray<HTMLElement>(selector, rootRef.current);

  // gsap warns on the console for a null target or an empty selector result.
  // Both are expected here: the preview column only exists on desktop, and the
  // scoped queries come back empty once rootRef is unmounted mid route change.
  const setIfPresent = (
    target: Element | Element[] | null,
    vars: gsap.TweenVars,
  ) => {
    if (!target || (Array.isArray(target) && target.length === 0)) return;
    gsap.set(target, vars);
  };

  // will-change is only useful while something is actually moving. Leaving it on
  // the page wrapper permanently keeps a full-viewport GPU layer alive and makes
  // ordinary scrolling janky.
  const setWillChange = (value: string) => {
    if (containerRef.current) {
      containerRef.current.style.willChange = value;
    }
    if (overlayRef.current) {
      overlayRef.current.style.willChange = value ? "clip-path" : "";
    }
  };

  // Rotating + translating the page wrapper pulls its corners inside the viewport,
  // and the root's light gradient shows through the gap as a white wedge before the
  // overlay's clip-path sweeps over it. Swap the root to the menu's own base colour
  // for the duration so anything revealed reads as part of the menu.
  const setRootBackdrop = (active: boolean) => {
    if (!rootRef.current) return;
    rootRef.current.style.backgroundImage = active ? "none" : "";
    rootRef.current.style.backgroundColor = active ? "#05070d" : "";
  };

  // While the menu is open the page behind it is fully covered, so let it stop
  // painting entirely — that also parks the home page's pinned ScrollTrigger.
  const setPageHidden = (hidden: boolean) => {
    if (!containerRef.current) return;
    containerRef.current.style.visibility = hidden ? "hidden" : "";
    containerRef.current.style.pointerEvents = hidden ? "none" : "";
  };

  const crossfade = (
    refs: React.RefObject<Record<string, HTMLImageElement | null>>,
    from: NavImage,
    to: NavImage,
  ) => {
    const outImg = refs.current?.[from];
    const inImg = refs.current?.[to];
    if (!inImg) return;

    gsap.killTweensOf([outImg, inImg].filter(Boolean));
    if (outImg) {
      gsap.to(outImg, { opacity: 0, duration: 0.4, ease: "power2.out" });
    }
    gsap.fromTo(
      inImg,
      { opacity: 0, scale: 1.04 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" },
    );
  };

  const animateImageChange = (img: NavImage) => {
    const from = currentImageRef.current;
    if (from === img) return;

    currentImageRef.current = img;

    crossfade(bgImgRefs, from, img);
    crossfade(previewImgRefs, from, img);
  };

  const resetMenuVisuals = () => {
    [bgImgRefs, previewImgRefs].forEach((refs) => {
      ALL_IMAGES.forEach((src) => {
        const el = refs.current?.[src];
        if (el) {
          gsap.killTweensOf(el);
          gsap.set(el, { opacity: src === INITIAL_IMAGE ? 1 : 0, scale: 1 });
        }
      });
    });
    currentImageRef.current = INITIAL_IMAGE;

    // clearProps (not rotation:0/scale:1) — leaving any transform on the wrapper
    // would make it the containing block for position:fixed children and break the
    // home page's pinned ScrollTrigger.
    setIfPresent(containerRef.current, { clearProps: "all" });
    setIfPresent(previewRef.current, { scale: 1, rotate: 0 });

    setIfPresent(q(".menu-link-item"), { x: 0, y: "120%", opacity: 0.25 });
    setIfPresent(q(".menu-link-text"), {
      x: 0,
      color: "#ffffff",
      letterSpacing: "-0.04em",
    });
    setIfPresent(q(".menu-link-arrow"), { x: 0, rotate: 0, opacity: 0 });
    setIfPresent(q(".menu-footer-item"), { y: 20, opacity: 0 });
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
        setScrollLocked(false);
        setRootBackdrop(false);
        gsap.killTweensOf([
          overlayRef.current,
          contentRef.current,
          containerRef.current,
          previewRef.current,
          openTextRef.current,
          closeTextRef.current,
        ]);
      };
    },
    { scope: rootRef },
  );

  const openMenu = () => {
    if (isAnimatingRef.current || isOpenRef.current) return;

    killCurrentTimeline();
    setAnimating(true);
    setWillChange("transform");
    setScrollLocked(true);
    setRootBackdrop(true);

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        setMenuOpen(true);
        setAnimating(false);
        setWillChange("");
        setPageHidden(true);
        timelineRef.current = null;
      },
    });
    timelineRef.current = tl;

    tl.to(
      overlayRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
        duration: OPEN_DURATION,
      },
      0,
    )
      .to(
        containerRef.current,
        {
          rotation: isMobile ? 0 : 8,
          x: isMobile ? 0 : 280,
          y: isMobile ? 0 : 420,
          scale: isMobile ? 1 : 1.2,
          duration: OPEN_DURATION,
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
          duration: OPEN_DURATION,
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
          duration: 0.3,
          ease: "power2.out",
        },
        0.1,
      )
      .to(
        closeTextRef.current,
        {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        0.26,
      )
      .to(
        q(".menu-link-item"),
        {
          y: "0%",
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        },
        0.42,
      )
      .to(
        q(".menu-footer-item"),
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        0.66,
      );
  };

  const closeMenu = (onComplete?: () => void) => {
    if (isAnimatingRef.current || !isOpenRef.current) return;

    killCurrentTimeline();
    setAnimating(true);
    setPageHidden(false);
    setWillChange("transform");

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        setMenuOpen(false);
        setAnimating(false);
        setWillChange("");
        setScrollLocked(false);
        resetMenuVisuals();
        setRootBackdrop(false);
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
        duration: CLOSE_DURATION,
      },
      0,
    )
      .to(
        overlayRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: CLOSE_DURATION,
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
          duration: CLOSE_DURATION,
        },
        0,
      )
      .to(
        q(".menu-link-item"),
        {
          y: "120%",
          opacity: 0.25,
          duration: 0.5,
          stagger: { each: 0.03, from: "end" },
          ease: "power3.inOut",
        },
        0,
      )
      .to(
        q(".menu-footer-item"),
        {
          y: 20,
          opacity: 0,
          duration: 0.35,
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
          duration: 0.3,
          ease: "power2.out",
        },
        0.05,
      )
      .to(
        openTextRef.current,
        {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        0.2,
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
    img: NavImage,
  ) => {
    if (!isOpenRef.current || isAnimatingRef.current) return;

    animateImageChange(img);

    const item = event.currentTarget;
    const text = item.querySelector(".menu-link-text");
    const arrow = item.querySelector(".menu-link-arrow");

    gsap.killTweensOf([item, text, arrow]);

    gsap.to(item, { x: 18, duration: 0.4, ease: "power3.out" });
    gsap.to(text, {
      letterSpacing: "-0.08em",
      color: "#007aff",
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

    if (previewRef.current) {
      gsap.fromTo(
        previewRef.current,
        { scale: 0.98, rotate: -1 },
        { scale: 1, rotate: 0, duration: 0.5, ease: "power3.out" },
      );
    }
  };

  const handleMenuLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnimatingRef.current) return;

    const item = event.currentTarget;
    const text = item.querySelector(".menu-link-text");
    const arrow = item.querySelector(".menu-link-arrow");

    gsap.killTweensOf([item, text, arrow]);

    gsap.to(item, { x: 0, duration: 0.4, ease: "power3.out" });
    gsap.to(text, {
      letterSpacing: "-0.04em",
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
      className="relative min-h-screen overflow-clip bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_45%,#eef7ff_100%)]"
    >
      <Navbar
        isOpen={isOpen}
        handleToggleMenu={handleToggleMenu}
        isOpenRef={isOpenRef}
        openTextRef={openTextRef}
        closeTextRef={closeTextRef}
        handleNavigate={handleNavigate}
      />

      <div
        ref={overlayRef}
        // A dark base colour means the sliver revealed before the artwork paints
        // reads as part of the menu instead of a white flash.
        className="fixed inset-0 z-40 h-[100svh] w-screen overflow-hidden bg-[#05070d]"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        {/* Backdrop artwork goes through next/image so it is optimised, cached and
            eagerly fetched. The old CSS background-image pulled the raw 300-400KB
            JPEGs on first open, which is what showed up as a white screen. */}
        <div className="absolute inset-0">
          {ALL_IMAGES.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              aria-hidden
              fill
              sizes="100vw"
              loading="eager"
              // The first frame of the menu uses INITIAL_IMAGE, so that one takes a
              // normal queue slot; the rest stay low so they never compete with the
              // hero on initial page load.
              fetchPriority={src === INITIAL_IMAGE ? "auto" : "low"}
              className="object-cover"
              ref={(el) => {
                bgImgRefs.current[src] = el;
              }}
              style={{ opacity: src === INITIAL_IMAGE ? 1 : 0 }}
            />
          ))}
        </div>

        {/* Plain alpha scrim instead of backdrop-blur: a backdrop-filter over the
            whole viewport has to re-sample the page on every frame of the
            clip-path animation, which was the bulk of the jank. */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="pointer-events-none absolute left-10 top-28 h-44 w-44 rounded-full bg-[#007aff]/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full bg-[#fda109]/20 blur-3xl" />

        <div
          ref={contentRef}
          className="relative flex h-full w-full origin-bottom-left items-center justify-center opacity-25"
        >
          <div className="flex w-full gap-10 px-6 py-6 md:p-10">
            {isDesktop && (
              <div className="hidden flex-[3] items-center justify-center md:flex">
                <div
                  ref={previewRef}
                  className="relative h-[68vh] w-[48%] overflow-hidden rounded-[2rem] border border-[#007aff]/10 bg-[#05070d] shadow-2xl shadow-sky-200/40"
                >
                  {ALL_IMAGES.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      aria-hidden
                      fill
                      // Deliberately the same `sizes` as the backdrop. next/image
                      // logs a dev-only warning that this box is not full-width,
                      // but matching it makes both stacks resolve to the same
                      // optimised URL, so each image is fetched once instead of
                      // twice. The sources are only 1280px wide, so the "too
                      // large" variant is the 1280px one either way.
                      sizes="100vw"
                      loading="eager"
                      fetchPriority="low"
                      className="object-cover"
                      ref={(el) => {
                        previewImgRefs.current[src] = el;
                      }}
                      style={{ opacity: src === INITIAL_IMAGE ? 1 : 0 }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#007aff]/25 via-transparent to-transparent" />
                </div>
              </div>
            )}

            <div className="flex flex-[2] flex-col justify-center gap-4 py-4 md:gap-10 md:py-10">
              <div className="flex flex-col gap-0.5 overflow-hidden">
                {links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavigate(event, item.href)}
                    onMouseEnter={(event) => handleMenuHover(event, item.img)}
                    onMouseLeave={handleMenuLeave}
                    className="menu-link-item group flex translate-y-[120%] items-center gap-4 overflow-hidden py-1 opacity-25"
                  >
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
                  ongshak
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

      <div ref={containerRef}>{children}</div>
    </div>
  );
}
