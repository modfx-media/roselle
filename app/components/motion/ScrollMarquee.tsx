"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  items: string[];
  baseSpeed?: number;   // px/s base speed
  direction?: 1 | -1;  // 1 = left, -1 = right
  className?: string;
  tagClassName?: string;
}

export default function ScrollMarquee({
  items,
  baseSpeed = 60,
  direction = 1,
  className = "",
  tagClassName = "bg-card-bg rounded-full py-1.5 px-s3 text-sm text-fg whitespace-nowrap shrink-0",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;

    // Measure one set width
    const children = Array.from(track.children);
    const halfLen = children.length / 2;
    let setWidth = 0;
    for (let i = 0; i < halfLen; i++) {
      setWidth += (children[i] as HTMLElement).offsetWidth + 16; // gap
    }

    let x = 0;
    let speed = baseSpeed * direction;
    let rafId: number;
    let lastTime = performance.now();

    // ScrollTrigger velocity boost
    const st = ScrollTrigger.create({
      trigger: wrap,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const v = self.getVelocity();
        speed = baseSpeed * direction + v * 0.04 * direction;
      },
    });

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      x -= speed * dt;

      // Loop
      if (direction === 1 && x <= -setWidth) x += setWidth;
      if (direction === -1 && x >= 0) x -= setWidth;

      track.style.transform = `translate3d(${x}px, 0, 0)`;

      // Decay speed back to base
      speed += (baseSpeed * direction - speed) * 0.05;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      st.kill();
    };
  }, [items, baseSpeed, direction]);

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      ref={wrapRef}
      className={`overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div ref={trackRef} className="flex gap-4 w-max will-change-transform">
        {doubled.map((t, i) => (
          <span key={i} className={tagClassName}>{t}</span>
        ))}
      </div>
    </div>
  );
}
