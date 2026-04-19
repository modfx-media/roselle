import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muscle Strains & Sprains | Roselle Center For Healing",
  description:
    "Muscle strains and sprains treatment at Roselle Center for Healing in Fairfax, VA. Chiropractic adjustments, acupuncture, massage therapy, and more.",
};

export default function MuscleStrainsSprainLayout({ children }: { children: React.ReactNode }) {
  return children;
}
