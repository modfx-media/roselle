import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spine Simulator | Roselle Center For Healing",
  description:
    "Explore our interactive spine simulator to learn about spinal anatomy, vertebrae, nerve connections, and posture at Roselle Center for Healing in Fairfax, VA.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
