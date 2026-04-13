"use client";
import { useRef, useEffect, useState } from "react";

interface Props {
  value: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, duration = 1.8, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const num = parseFloat(value);
    const isNumber = !isNaN(num) && isFinite(num);

    if (!isNumber) return; // skip non-numeric like "∞"

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          observer.disconnect();

          const start = performance.now();
          const isInt = Number.isInteger(num);

          const tick = (now: number) => {
            const elapsed = (now - start) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * num;

            setDisplay(isInt ? Math.round(current).toString() : current.toFixed(1));

            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref} className={className}>{display}</span>;
}
