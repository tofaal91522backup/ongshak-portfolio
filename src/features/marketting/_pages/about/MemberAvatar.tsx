"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * next/image gives up on an upstream image after 7s and returns a 500, which
 * renders as broken alt text. Two of the profile photos are 1.7-1.8MB PNGs on a
 * slow host and trip that every time, so fall back to initials instead of
 * showing a broken image.
 */
export default function MemberAvatar({
  src,
  name,
  initials,
  sizes = "64px",
  textClassName = "text-sm",
  priority = false,
}: {
  src: string | null;
  name: string;
  initials: string;
  sizes?: string;
  textClassName?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span className={`flex h-full w-full items-center justify-center font-semibold text-white/70 ${textClassName}`}>
        {initials}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
