import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiropractic Adjustments FAQs | Roselle Center for Healing",
  description: "Common questions about chiropractic adjustments answered by the team at Roselle Center for Healing in Fairfax, VA. Safe, effective, personalized care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
