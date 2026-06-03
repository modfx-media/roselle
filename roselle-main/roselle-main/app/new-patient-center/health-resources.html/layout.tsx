import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Resources | Roselle Center For Healing",
  description: "Health and wellness resources from Roselle Center For Healing in Fairfax, VA. Links to chiropractic, nutrition, fitness, and wellness organizations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
