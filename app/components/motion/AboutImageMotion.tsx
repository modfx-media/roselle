"use client";
import { motion } from "framer-motion";

/**
 * Decorative motion-graphics overlay placed on top of the About image.
 * Pointer-events disabled so it never blocks the image / caption chip.
 */
export default function AboutImageMotion() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-1 overflow-hidden rounded-xl"
      aria-hidden="true"
    >
      {/* Soft gold glow — drifts slowly bottom-right */}
      <motion.div
        className="absolute"
        style={{
          width: 260,
          height: 260,
          right: -60,
          bottom: -60,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(198,177,128,0.45) 0%, rgba(198,177,128,0) 70%)",
          filter: "blur(8px)",
          mixBlendMode: "screen",
        }}
        animate={{ x: [0, -18, 6, 0], y: [0, -12, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cool blue glow — drifts top-left */}
      <motion.div
        className="absolute"
        style={{
          width: 220,
          height: 220,
          left: -50,
          top: -50,
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(74,158,255,0.35) 0%, rgba(74,158,255,0) 70%)",
          filter: "blur(10px)",
          mixBlendMode: "screen",
        }}
        animate={{ x: [0, 14, -8, 0], y: [0, 10, -6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pulsing accent ring — top-right */}
      <div className="absolute top-4 right-4">
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ border: "1px solid rgba(198,177,128,0.55)" }}
          animate={{ scale: [1, 2.4], opacity: [0.65, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ border: "1px solid rgba(198,177,128,0.55)" }}
          animate={{ scale: [1, 2.4], opacity: [0.65, 0] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1.3,
          }}
        />
        <span
          className="block w-2.5 h-2.5 rounded-full relative"
          style={{
            background: "#c6b180",
            boxShadow: "0 0 12px rgba(198,177,128,0.9)",
          }}
        />
      </div>

      {/* Floating "30+ Years" badge — gentle bob */}
      <motion.div
        className="absolute"
        style={{ top: 22, left: 22 }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: [0, -4, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
          style={{
            background: "rgba(10,22,40,0.6)",
            border: "1px solid rgba(198,177,128,0.45)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#c6b180" }}
          />
          <span
            className="text-[10px] tracking-[0.22em] uppercase font-sans"
            style={{ color: "rgba(245,244,239,0.85)" }}
          >
            30+ Years
          </span>
        </div>
      </motion.div>

      {/* Sweeping gradient sheen across the image */}
      <motion.div
        className="absolute inset-y-0"
        style={{
          width: "40%",
          background:
            "linear-gradient(110deg, rgba(245,244,239,0) 0%, rgba(245,244,239,0.10) 50%, rgba(245,244,239,0) 100%)",
          mixBlendMode: "overlay",
        }}
        initial={{ x: "-120%" }}
        animate={{ x: ["-120%", "260%"] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1.4,
        }}
      />

      {/* Orbiting dot — slow rotation around image center */}
      <motion.div
        className="absolute top-1/2 left-1/2"
        style={{ width: 0, height: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <span
          className="absolute block rounded-full"
          style={{
            width: 6,
            height: 6,
            top: "-44%",
            left: "38%",
            background: "#c6b180",
            boxShadow: "0 0 10px rgba(198,177,128,0.8)",
          }}
        />
        <span
          className="absolute block rounded-full"
          style={{
            width: 4,
            height: 4,
            top: "42%",
            left: "-40%",
            background: "rgba(74,158,255,0.9)",
            boxShadow: "0 0 8px rgba(74,158,255,0.7)",
          }}
        />
      </motion.div>
    </div>
  );
}
