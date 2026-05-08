import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Roselle Healing Podcast — Upcoming Episodes & Talking Points",
  description:
    "Tune in to The Roselle Healing Podcast with Dr. Tom Roselle, DC. Preview upcoming episodes, guest interviews, and talking points on chiropractic care, functional medicine, and holistic wellness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
