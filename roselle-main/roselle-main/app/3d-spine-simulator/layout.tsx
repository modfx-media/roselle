import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Spine Simulator | Roselle Center For Healing",
  description:
    "Explore our interactive 3D Spine Simulator to understand how your spine and nerve system connect to every aspect of your health and wellness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
