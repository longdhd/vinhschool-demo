"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  interval?: number;
};

export default function HeroCarousel({ images, interval = 4500 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(t);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  const visibleIndexes = new Set([
    (index - 1 + images.length) % images.length,
    index,
    (index + 1) % images.length,
  ]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[1.25rem] opacity-20">
      {images.map((src, i) =>
        visibleIndexes.has(i) ? (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            fetchPriority={i === 0 ? "high" : "auto"}
            quality={75}
            sizes="100vw"
            className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null,
      )}

      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" aria-hidden />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-8 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
