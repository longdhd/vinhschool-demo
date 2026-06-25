"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const canAnimate = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    ).matches;

    if (!canAnimate || !("IntersectionObserver" in window)) {
      element.classList.remove("is-pending");
      element.classList.add("is-visible");
      return;
    }

    let revealFrame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealFrame = window.requestAnimationFrame(() => {
            element.classList.remove("is-pending");
            element.classList.add("is-visible");
          });
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(revealFrame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal is-pending ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
