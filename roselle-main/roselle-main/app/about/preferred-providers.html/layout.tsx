import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preferred Providers | Roselle Center For Healing",
  description: "View our preferred chiropractic providers at Roselle Center For Healing in Fairfax, VA. Trusted partners in health and wellness.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
