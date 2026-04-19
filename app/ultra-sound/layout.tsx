import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultrasound Therapy | Roselle Center For Healing",
  description:
    "Therapeutic ultrasound therapy at Roselle Center for Healing in Fairfax, VA. Reduce inflammation, restore injured tissue, and relieve pain.",
};

export default function UltraSoundLayout({ children }: { children: React.ReactNode }) {
  return children;
}
