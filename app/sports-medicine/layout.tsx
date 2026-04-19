import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Sports Medicine & Rehabilitation at Roselle Center for Healing",
  description: "Sports medicine, physical therapy, and injury rehabilitation in Fairfax, VA. Roselle Center for Healing offers tailored treatment plans for athletes.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
