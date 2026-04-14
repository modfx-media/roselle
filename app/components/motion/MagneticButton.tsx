"use client";
import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit";
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "btn-primary",
  style,
  onClick,
  type = "button",
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });

  // Subtle scale on hover
  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      className={className}
      style={{ ...style, x: springX, y: springY, scale: springScale }}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}
