import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whiplash Treatment | Chiropractor in Fairfax, VA | Roselle Center For Healing",
  description: "Expert whiplash treatment at Roselle Center For Healing in Fairfax, VA. Chiropractic adjustments, massage therapy, acupuncture, and spinal decompression for relief.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
