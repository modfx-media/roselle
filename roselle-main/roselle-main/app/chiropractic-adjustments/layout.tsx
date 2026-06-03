import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fairfax, VA Chiropractic Adjustments at Roselle Center for Healing",
  description: "Experience chiropractic adjustments at Roselle Center for Healing in Fairfax, VA. Dr. Tom Roselle provides personalized care for pain relief and wellness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
