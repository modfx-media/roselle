"use client";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0.1 = subtle, 0.3 = strong
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move image slightly opposite to scroll direction
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`hero-parallax-wrap ${className}`} style={{ overflow: "hidden", position: "relative" }}>
      <motion.img
        src={src}
        alt={alt}
        style={{
          y,
          width: "100%",
          height: `${100 + speed * 200}%`,
          objectFit: "cover",
          display: "block",
          willChange: "transform",
        }}
        loading="eager"
      />
    </div>
  );
}
