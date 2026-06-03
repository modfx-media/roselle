"use client";
// Exact port of the webuild.io floating-gradient-background-container
// Source uses: --background-accent (#c6b180 gold) and --accent (#fff white) circles
// with hard-light blend mode, blur(40px), vertical mask
export default function FloatingBackground() {
  const gold = "#c6b180";   // --background-accent / --accent in source
  const circle = (
    bg: string,
    opacity: number,
    w: string,
    h: string,
    top: string,
    left: string,
    origin: string,
    anim: string,
  ) => ({
    position: "absolute" as const,
    opacity,
    background: `radial-gradient(circle at center, ${bg} 0, transparent 50%) no-repeat`,
    mixBlendMode: "hard-light" as const,
    width: w, height: h,
    top, left,
    transformOrigin: origin,
    animation: anim,
  });

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0, bottom: 0, left: 0, right: 0,
        width: "100%", height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(40px)",
        maskImage: "linear-gradient(to bottom, transparent, #010101 20%, #010101 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, #010101 20%, #010101 80%, transparent)",
        maskComposite: "intersect",
        WebkitMaskComposite: "destination-in",
      }}
    >
      <div style={circle(gold, 0.18, "80%", "80%", "calc(50% - 30%)", "calc(50% - 30%)", "50% center", "fgMoveVertical 20s ease infinite")} />
      <div style={circle(gold, 0.22, "80%", "80%", "calc(50% - 30%)", "calc(50% - 30%)", "calc(50% - 400px) center", "fgMoveInCircle 20s ease infinite reverse")} />
      <div style={circle(gold, 0.12, "60%", "60%", "calc(50% - 40% + 200px)", "calc(50% - 40% - 500px)", "calc(50% + 400px) center", "fgMoveInCircle 30s linear infinite")} />
      <div style={circle(gold, 0.20, "60%", "60%", "calc(50% - 40%)", "calc(50% - 40%)", "calc(50% - 200px) center", "fgMoveHorizontal 30s ease infinite")} />
      <div style={circle(gold, 0.10, "120%", "120%", "calc(50% - 80%)", "calc(50% - 80%)", "calc(50% - 800px) calc(50% + 200px)", "fgMoveInCircle 20s ease infinite")} />
    </div>
  );
}
