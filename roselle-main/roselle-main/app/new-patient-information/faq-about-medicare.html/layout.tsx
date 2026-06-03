import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ about Medicare | Roselle Center For Healing",
  description: "Medicare chiropractic coverage FAQs at Roselle Center For Healing in Fairfax, VA. Learn about deductibles, claims, and treatment costs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
