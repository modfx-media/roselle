"use client";
import ScrollMarquee from "./motion/ScrollMarquee";

const WORDS = [
  "Chiropractic", "Acupuncture", "Massage", "Nutrition",
  "Functional Medicine", "Kinesiology", "Thermography",
  "Holistic Care", "Wellness", "Healing",
];

interface Props {
  dark?: boolean;
  direction?: 1 | -1;
}

export default function SectionMarquee({ dark = false, direction = 1 }: Props) {
  return (
    <div className={`py-s4 ${dark ? "bg-fg" : "bg-bg"}`}>
      <ScrollMarquee
        items={WORDS}
        baseSpeed={40}
        direction={direction}
        tagClassName={
          dark
            ? "rounded-full py-1.5 px-s3 text-sm whitespace-nowrap shrink-0 border border-white/10 text-white/40"
            : "bg-card-bg rounded-full py-1.5 px-s3 text-sm text-fg whitespace-nowrap shrink-0"
        }
      />
    </div>
  );
}
