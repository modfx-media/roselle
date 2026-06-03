import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herniated Disc Treatment | Chiropractor in Fairfax, VA | Roselle Center For Healing",
  description:
    "Herniated disc treatment at Roselle Center for Healing in Fairfax, VA. Non-surgical chiropractic care including spinal decompression and adjustments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
