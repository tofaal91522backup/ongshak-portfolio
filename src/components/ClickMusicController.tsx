"use client";

import { useEffect, useRef } from "react";

const MUSIC_SRC = "/audio/ongshak-bg.wav";
const MAX_VOLUME = 0.45;
const FADE_DURATION = 1200;

export default function ClickMusicController() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);
  const animationRef = useRef<number | null>(null);

  const fadeVolume = (
    from: number,
    to: number,
    onComplete?: () => void,
  ) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / FADE_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      audio.volume = from + (to - from) * eased;

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        audio.volume = to;
        animationRef.current = null;
        onComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.volume = 0;
      await audio.play();

      isPlayingRef.current = true;
      fadeVolume(0, MAX_VOLUME);
    } catch (error) {
      console.error("Music play failed:", error);
    }
  };

  const stopMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    isPlayingRef.current = false;

    fadeVolume(audio.volume, 0, () => {
      audio.pause();
      audio.currentTime = 0;
    });
  };

  const toggleMusic = () => {
    if (isPlayingRef.current) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "auto";

    audioRef.current = audio;

    const handleClick = () => {
      toggleMusic();
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  return null;
}