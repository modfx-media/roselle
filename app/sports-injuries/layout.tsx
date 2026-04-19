import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Injury Treatment | Chiropractor in Fairfax, VA | Roselle Center For Healing",
  description:
    "Sports injury treatment at Roselle Center for Healing in Fairfax, VA. Chiropractic rehabilitation for sprains, strains, and athletic injuries.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
