"use client";

import { useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/audio/ongshak-bg.wav";

const MAX_VOLUME = 0.45;
const HOLD_DELAY = 220;

const FADE_IN_DURATION = 700;
const FADE_OUT_DURATION = 500;

export default function HoldMusicController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeAnimationRef = useRef<number | null>(null);
  const holdTimerRef = useRef<number | null>(null);

  const isPointerDownRef = useRef(false);
  const isMusicActiveRef = useRef(false);
  const quickClickStartTimeRef = useRef(0);

  const labelRef = useRef<HTMLDivElement | null>(null);
  const labelAnimationRef = useRef<number | null>(null);

  const mouseRef = useRef({ x: -9999, y: -9999 });
  const labelPosRef = useRef({ x: -9999, y: -9999 });
  const visibleRef = useRef(false);
  const hasFirstMouseMoveRef = useRef(false);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const stopFadeAnimation = () => {
    if (fadeAnimationRef.current) {
      cancelAnimationFrame(fadeAnimationRef.current);
      fadeAnimationRef.current = null;
    }
  };

  const clearHoldTimer = () => {
    if (holdTimerRef.current) {
      window.clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  };

  const fadeVolume = (
    from: number,
    to: number,
    duration: number,
    onComplete?: () => void,
  ) => {
    const audio = audioRef.current;
    if (!audio) return;

    stopFadeAnimation();

    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      audio.volume = Math.max(
        0,
        Math.min(MAX_VOLUME, from + (to - from) * eased),
      );

      if (progress < 1) {
        fadeAnimationRef.current = requestAnimationFrame(animate);
      } else {
        audio.volume = to;
        fadeAnimationRef.current = null;
        onComplete?.();
      }
    };

    fadeAnimationRef.current = requestAnimationFrame(animate);
  };

  const silentlyPrepareAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0;
      await audio.play();

      if (!isPointerDownRef.current && !isMusicActiveRef.current) {
        audio.pause();
        audio.currentTime = quickClickStartTimeRef.current;
      }
    } catch (error) {
      console.error("Audio play failed:", error);
    }
  };

  const activateMusicAfterHold = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!isPointerDownRef.current) return;

    isMusicActiveRef.current = true;
    setIsPlaying(true);

    fadeVolume(audio.volume, MAX_VOLUME, FADE_IN_DURATION);
  };

  const stopMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    clearHoldTimer();
    setIsHolding(false);

    if (!isMusicActiveRef.current) {
      audio.pause();
      audio.currentTime = quickClickStartTimeRef.current;
      return;
    }

    isMusicActiveRef.current = false;

    fadeVolume(audio.volume, 0, FADE_OUT_DURATION, () => {
      audio.pause();
      setIsPlaying(false);
    });
  };

  useEffect(() => {
    const desktop = window.matchMedia("(pointer: fine)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDesktop(desktop);

    if (!desktop) return;

    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";

    audioRef.current = audio;

    const moveLabel = () => {
      // Skip lerp until first mouse move so label doesn't start at (0,0)
      if (!hasFirstMouseMoveRef.current) {
        labelAnimationRef.current = requestAnimationFrame(moveLabel);
        return;
      }

      // On the very first frame after mouse enters, snap instantly
      if (labelPosRef.current.x === -9999) {
        labelPosRef.current.x = mouseRef.current.x;
        labelPosRef.current.y = mouseRef.current.y;
      } else {
        labelPosRef.current.x +=
          (mouseRef.current.x - labelPosRef.current.x) * 0.45;
        labelPosRef.current.y +=
          (mouseRef.current.y - labelPosRef.current.y) * 0.45;
      }

      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${
          labelPosRef.current.x + 22
        }px, ${labelPosRef.current.y + 22}px, 0)`;
      }

      labelAnimationRef.current = requestAnimationFrame(moveLabel);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;

      if (!hasFirstMouseMoveRef.current) {
        hasFirstMouseMoveRef.current = true;
        // Snap label position immediately to avoid initial lag
        labelPosRef.current.x = event.clientX;
        labelPosRef.current.y = event.clientY;
      }

      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      if (event.button !== 0) return;

      const audio = audioRef.current;
      if (!audio) return;

      isPointerDownRef.current = true;
      setIsHolding(true);

      quickClickStartTimeRef.current = audio.currentTime;

      void silentlyPrepareAudio();

      clearHoldTimer();

      holdTimerRef.current = window.setTimeout(() => {
        activateMusicAfterHold();
      }, HOLD_DELAY);
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      isPointerDownRef.current = false;
      stopMusic();
    };

    const handleForceStop = () => {
      isPointerDownRef.current = false;
      stopMusic();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handleForceStop);
    window.addEventListener("blur", handleForceStop);
    window.addEventListener("contextmenu", handleForceStop);

    labelAnimationRef.current = requestAnimationFrame(moveLabel);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handleForceStop);
      window.removeEventListener("blur", handleForceStop);
      window.removeEventListener("contextmenu", handleForceStop);

      clearHoldTimer();
      stopFadeAnimation();

      if (labelAnimationRef.current) {
        cancelAnimationFrame(labelAnimationRef.current);
      }

      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      ref={labelRef}
      style={{ willChange: "transform" }}
      className={`pointer-events-none fixed left-0 top-0 z-[99999] flex items-center gap-3 rounded-full text-white shadow-2xl shadow-black/30 backdrop-blur-xl transition-opacity duration-300 ${
        isVisible && !isPlaying ? "opacity-100" : "opacity-0"
      } ${isHolding ? "scale-105 border-[#fda109]/60" : "scale-100"}`}
    >
      <span className="text-sm uppercase tracking-[0.16em]">Click & Hold</span>
    </div>
  );
}