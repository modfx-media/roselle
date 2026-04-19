import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headache Relief | Chiropractor in Fairfax, VA | Roselle Center For Healing",
  description:
    "Natural headache relief at Roselle Center for Healing in Fairfax, VA. Chiropractic care for tension headaches, migraines, and cervicogenic headaches.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
