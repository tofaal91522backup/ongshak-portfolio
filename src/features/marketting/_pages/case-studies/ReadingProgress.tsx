"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ReadingProgress({ color }: { color: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left"
      style={{ scaleX, backgroundColor: color }}
    />
  );
}
