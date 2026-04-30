"use client";

import { Music, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/audio/bg-audio.wav";
const MAX_VOLUME = 0.45;
const FADE_DURATION = 1200;

export default function SiteEffects() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isCursorReady, setIsCursorReady] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) return;

    setIsCursorReady(true);

    const moveCursor = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const animateRing = () => {
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * 0.18;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * 0.18;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameRef.current = requestAnimationFrame(animateRing);
    };

    const handleHoverIn = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-hover",
        )
      ) {
        document.body.classList.add("is-cursor-hovering");
      }
    };

    const handleHoverOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-hover",
        )
      ) {
        document.body.classList.remove("is-cursor-hovering");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverIn);
    window.addEventListener("mouseout", handleHoverOut);

    animationFrameRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverIn);
      window.removeEventListener("mouseout", handleHoverOut);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      document.body.classList.remove("is-cursor-hovering");
    };
  }, []);

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_SRC);
    audioRef.current.loop = true;
    audioRef.current.volume = 0;
    audioRef.current.preload = "auto";

    return () => {
      if (fadeIntervalRef.current) {
        window.clearInterval(fadeIntervalRef.current);
      }

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  const fadeVolume = (
    from: number,
    to: number,
    onComplete?: () => void,
  ) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) {
      window.clearInterval(fadeIntervalRef.current);
    }

    const steps = 30;
    const stepTime = FADE_DURATION / steps;
    const volumeChange = (to - from) / steps;
    let currentStep = 0;

    audio.volume = from;

    fadeIntervalRef.current = window.setInterval(() => {
      currentStep += 1;

      const nextVolume = from + volumeChange * currentStep;
      audio.volume = Math.min(Math.max(nextVolume, 0), MAX_VOLUME);

      if (currentStep >= steps) {
        audio.volume = to;

        if (fadeIntervalRef.current) {
          window.clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = null;
        }

        onComplete?.();
      }
    }, stepTime);
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isMusicPlaying) {
      try {
        audio.volume = 0;
        await audio.play();

        setIsMusicPlaying(true);
        fadeVolume(0, MAX_VOLUME);
      } catch (error) {
        console.error("Audio play failed:", error);
      }

      return;
    }

    fadeVolume(audio.volume, 0, () => {
      audio.pause();
      audio.currentTime = 0;
      setIsMusicPlaying(false);
    });
  };

  return (
    <>
      {isCursorReady && (
        <>
          <div ref={cursorDotRef} className="custom-cursor-dot" />
          <div ref={cursorRingRef} className="custom-cursor-ring" />
        </>
      )}

      <button
        type="button"
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:scale-105 hover:bg-white/25"
        aria-label={isMusicPlaying ? "Stop music" : "Start music"}
      >
        {isMusicPlaying ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}

        <span className="absolute -left-32 hidden rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md md:block">
          {isMusicPlaying ? "Stop music" : "Play music"}
        </span>

        <Music className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#fda109] p-0.5 text-white" />
      </button>
    </>
  );
}