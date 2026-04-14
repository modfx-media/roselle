"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  src: string;
  alt: string;
  speed?: number;   // 0.1 subtle → 0.4 strong
  className?: string;
  imgClassName?: string;
}

/**
 * GSAP ScrollTrigger parallax — the image moves at a different rate than the page.
 * Works correctly even inside sticky containers.
 */
export default function GsapImageParallax({
  src,
  alt,
  speed = 0.18,
  className = "",
  imgClassName = "",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef  = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const img  = imgRef.current;
    if (!wrap || !img) return;

    // Extra height so the image has room to travel
    const extra = speed * 100;
    gsap.set(img, { yPercent: -extra / 2 });

    const tween = gsap.to(img, {
      yPercent: extra / 2,
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ overflow: "hidden", position: "relative" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="eager"
        className={imgClassName}
        style={{
          width: "100%",
          height: `${100 + speed * 100}%`,
          objectFit: "cover",
          display: "block",
          willChange: "transform",
        }}
      />
    </div>
  );
}
