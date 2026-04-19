import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Office Hours | Roselle Center For Healing",
  description: "View office hours and contact information for Roselle Center For Healing in Fairfax, VA. Call (703) 698-7117 for available appointments.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
