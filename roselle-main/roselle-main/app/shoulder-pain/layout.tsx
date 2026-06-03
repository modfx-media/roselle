import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoulder Pain Treatment | Chiropractor in Fairfax, VA | Roselle Center For Healing",
  description: "Shoulder pain treatment at Roselle Center for Healing in Fairfax, VA. Our chiropractors address rotator cuff injuries, bursitis, and shoulder pain with holistic care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
