"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  stagger?: number;
  children?: React.ReactNode;
}

export default function SplitReveal({ text, className = "", as: Tag = "h2", stagger = 0.04, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll(".sr-word");
    if (!words.length) return;

    if (prefersReducedMotion) {
      gsap.set(words, { clearProps: "all" });
      return;
    }

    gsap.set(words, { y: 40, opacity: 0, rotateX: -40 });

    const tl = Tag === "h1"
      ? gsap.to(words, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.82,
          delay: 0.14,
          stagger,
          ease: "power3.out",
        })
      : gsap.to(words, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [Tag, prefersReducedMotion, stagger]);

  // Split text into words, preserve children (like <span> for gradient-text)
  const words = text.split(" ");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={className}
      style={{ perspective: "600px" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="sr-word inline-block"
          style={{ willChange: "transform, opacity" }}
        >
          {word}{i < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
      {children}
    </Tag>
  );
}
