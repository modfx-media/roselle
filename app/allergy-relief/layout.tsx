import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roselle Center for Healing: Natural Allergy Relief in Fairfax, VA",
  description:
    "Get natural allergy relief at Roselle Center for Healing in Fairfax, VA. Our chiropractors address the root cause of allergic reactions with holistic care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
