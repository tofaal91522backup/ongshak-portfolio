"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu, User2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const links = [
  { label: "Home", href: "/", img: "/images/nav/1.jpg" },
  { label: "About", href: "/about", img: "/images/nav/2.jpg" },
  { label: "Services", href: "/services", img: "/images/nav/3.jpg" },
  { label: "Work", href: "/work", img: "/images/nav/4.jpg" },
  { label: "AI Innovation", href: "/ai-innovation", img: "/images/nav/5.jpg" },
  { label: "Industries", href: "/industries", img: "/images/nav/6.jpg" },
];

const INITIAL_IMAGE = links[0].img;

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

  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const currentBgRef = useRef(INITIAL_IMAGE);
  const isOpenRef = useRef(false);
  const isAnimatingRef = useRef(false);

  const [isOpen, setIsOpen] = useState(false);
  const [previewImg, setPreviewImg] = useState(INITIAL_IMAGE);

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

  const resetMenuVisuals = () => {
    setPreviewImg(INITIAL_IMAGE);
    currentBgRef.current = INITIAL_IMAGE;
    gsap.set(containerRef.current, { clearProps: "all" });
    gsap.set(bgMainRef.current, {
      backgroundImage: `url(${INITIAL_IMAGE})`,
      opacity: 1,
      scale: 1,
    });

    gsap.set(bgNextRef.current, {
      opacity: 0,
      scale: 1.08,
    });

    gsap.set(".menu-link-item", {
      x: 0,
      y: "120%",
      opacity: 0.25,
    });

    gsap.set(".menu-link-text", {
      x: 0,
      color: "#ffffff",
      letterSpacing: "-0.04em",
    });

    gsap.set(".menu-link-number", {
      x: 0,
      color: "#ffffff",
      opacity: 0.45,
    });

    gsap.set(".menu-link-arrow", {
      x: 0,
      rotate: 0,
      opacity: 0,
    });

    gsap.set(".menu-footer-item", {
      y: 20,
      opacity: 0,
    });
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
        gsap.killTweensOf("*");
      };
    },
    { scope: rootRef },
  );

  const animateBackgroundChange = (img: string) => {
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
      .set(bgNextRef.current, {
        opacity: 0,
        scale: 1.08,
      });

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

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
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
          rotation: 8,
          x: 280,
          y: 420,
          scale: 1.35,
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
      defaults: {
        ease: "power4.inOut",
      },
      onComplete: () => {
        setMenuOpen(false);
        setAnimating(false);
        resetMenuVisuals();
        gsap.set(containerRef.current, { clearProps: "all" }); // ← এটা add করো
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
          stagger: {
            each: 0.04,
            from: "end",
          },
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
    img: string,
  ) => {
    if (!isOpenRef.current || isAnimatingRef.current) return;

    setPreviewImg(img);
    animateBackgroundChange(img);

    const item = event.currentTarget;
    const number = item.querySelector(".menu-link-number");
    const text = item.querySelector(".menu-link-text");
    const arrow = item.querySelector(".menu-link-arrow");

    gsap.killTweensOf([item, number, text, arrow, previewRef.current]);

    gsap.to(item, {
      x: 18,
      duration: 0.4,
      ease: "power3.out",
    });

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
      {
        scale: 0.96,
        rotate: -2,
      },
      {
        scale: 1,
        rotate: 0,
        duration: 0.55,
        ease: "power3.out",
      },
    );
  };

  const handleMenuLeave = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnimatingRef.current) return;

    const item = event.currentTarget;
    const number = item.querySelector(".menu-link-number");
    const text = item.querySelector(".menu-link-text");
    const arrow = item.querySelector(".menu-link-arrow");

    gsap.killTweensOf([item, number, text, arrow]);

    gsap.to(item, {
      x: 0,
      duration: 0.4,
      ease: "power3.out",
    });

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

    const normalizePath = (path: string) => {
      if (path.length > 1 && path.endsWith("/")) {
        return path.slice(0, -1);
      }

      return path;
    };

    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(href);

    if (currentPath === targetPath) {
      closeMenu();
      return;
    }

    closeMenu(() => {
      router.push(href);
    });
  };

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_45%,#eef7ff_100%)]"
    >
      <nav className="fixed left-0 top-0 z-50 flex w-screen items-center justify-between px-6 pt-5 md:px-10 md:pt-6">
        <Link
          href="/"
          onClick={(event) => {
            if (isOpenRef.current) {
              handleNavigate(event, "/");
            }
          }}
          className="liquid-glass group relative z-50 flex cursor-pointer items-center gap-3 rounded-full px-4 py-2 text-base text-foreground backdrop-blur-2xl transition-transform hover:scale-[1.03]"
        >
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full">
            <Image
              src="/logo.jpg"
              alt="Ongshak Logo"
              width={30}
              height={30}
              unoptimized
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </span>

          <span className="text-2xl font-bold tracking-[-0.04em] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.65)]">
            Ongshak
          </span>
        </Link>

        <button
          onClick={handleToggleMenu}
          // eslint-disable-next-line react-hooks/refs
          disabled={isAnimatingRef.current}
          className="liquid-glass relative z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full disabled:pointer-events-none disabled:opacity-80"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <p
            ref={openTextRef}
            className="absolute flex items-center justify-center text-current"
          >
            <Menu size={26} />
          </p>

          <p
            ref={closeTextRef}
            className="absolute flex items-center justify-center text-current opacity-0"
          >
            <X size={24} />
          </p>
        </button>
      </nav>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 h-[100svh] w-screen overflow-hidden bg-white"
      >
        <div
          ref={bgMainRef}
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage: `url(${INITIAL_IMAGE})`,
          }}
        />

        <div
          ref={bgNextRef}
          className="absolute inset-0 bg-cover bg-center opacity-0"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        <div className="pointer-events-none absolute left-10 top-28 h-44 w-44 rounded-full bg-[#007aff]/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full bg-[#fda109]/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 top-1/4 h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl" />

        <div
          ref={contentRef}
          className="relative flex h-full w-full origin-bottom-left items-center justify-center opacity-25"
        >
          <div className="flex w-full gap-10 px-6 py-20 md:p-10">
            <div className="hidden flex-[3] items-center justify-center md:flex">
              <div
                ref={previewRef}
                className="relative h-[68vh] w-[48%] overflow-hidden rounded-[2rem] border border-[#007aff]/10 bg-white shadow-2xl shadow-sky-200/40"
              >
                <Image
                  key={previewImg}
                  src={previewImg}
                  alt="Preview"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#007aff]/25 via-transparent to-transparent" />
              </div>
            </div>

            <div className="flex flex-[2] flex-col justify-center gap-10 py-10">
              <div className="flex flex-col gap-1 overflow-hidden">
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

                    <span className="menu-link-text text-[3rem] font-light leading-none tracking-[-0.04em] text-white md:text-[4rem]">
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

      <div
        ref={containerRef}
        // className="relative z-0 min-h-screen w-full origin-top-right bg-[linear-gradient(180deg,#ffffff_0%,#f6fbff_45%,#eef7ff_100%)]"
      >
        {children}
      </div>
    </div>
  );
}
