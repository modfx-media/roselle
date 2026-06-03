"use client";
import { useEffect, useRef, ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props { children: ReactNode }

export default function SmoothScroll({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Init Lenis
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Hook Lenis into GSAP ticker so ScrollTrigger stays in sync
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Auto-parallax all [data-parallax] elements
    const ctx = gsap.context(() => {
      const els = document.querySelectorAll<HTMLElement>("[data-parallax]");
      els.forEach(el => {
        const speed = parseFloat(el.dataset.parallaxSpeed ?? "0.12");
        const dir   = el.dataset.parallaxDir === "down" ? 1 : -1;
        const dist  = speed * 120 * dir;

        gsap.fromTo(el,
          { y: -dist / 2 },
          {
            y: dist / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, ref);

    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      ctx.revert();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
