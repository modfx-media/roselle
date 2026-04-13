"use client";
import { useRef, useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

interface Props {
  text: string;
  className?: string;
  speed?: number;  // ms per character resolve
  as?: "span" | "p" | "h2" | "h3";
}

export default function TextScramble({ text, className = "", speed = 35, as: Tag = "span" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(text);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.disconnect();

          let resolved = 0;
          const chars = text.split("");
          let rafId: number;

          const scramble = () => {
            const out = chars.map((c, i) => {
              if (c === " ") return " ";
              if (i < resolved) return c;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            });
            setDisplay(out.join(""));

            if (resolved < chars.length) {
              rafId = requestAnimationFrame(scramble);
            }
          };

          // Resolve one character at a time
          const interval = setInterval(() => {
            resolved++;
            if (resolved >= chars.length) clearInterval(interval);
          }, speed);

          rafId = requestAnimationFrame(scramble);

          return () => {
            clearInterval(interval);
            cancelAnimationFrame(rafId);
          };
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, speed]);

  return (
    <Tag ref={ref as React.RefObject<HTMLElement & HTMLSpanElement & HTMLParagraphElement & HTMLHeadingElement>} className={className}>
      {display}
    </Tag>
  );
}
