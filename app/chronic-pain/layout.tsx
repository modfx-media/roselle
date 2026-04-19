import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronic Pain Relief in Fairfax, VA at Roselle Center for Healing",
  description:
    "Find chronic pain relief at Roselle Center for Healing in Fairfax, VA. Our chiropractors provide natural, non-invasive treatments for lasting comfort.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
