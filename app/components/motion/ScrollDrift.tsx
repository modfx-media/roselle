"use client";
import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  distance?: number;   // px to drift downward as section scrolls
  className?: string;
}

/**
 * Drifts the entire wrapped element downward as the page scrolls.
 * The element starts at its natural position and moves down by `distance`px
 * over the full scroll range of the parent section.
 */
export default function ScrollDrift({ children, distance = 120, className = "" }: Props) {
  const elRef      = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<Element | null>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Find the nearest section ancestor to use as the scroll trigger
    sectionRef.current = el.closest("section") ?? el.parentElement;

    gsap.set(el, { y: 0 });

    const tween = gsap.to(el, {
      y: distance,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current ?? el,
        start: "top center",
        end: "bottom bottom",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [distance]);

  return (
    <div ref={elRef} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
