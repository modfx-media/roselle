import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Tom Roselle, DC | Roselle Center For Healing",
  description: "Meet Dr. Tom Roselle, DC, PAK, PAc, DCCN, DCBCN - integrative health expert, author, talk show host, and facility director at Roselle Center For Healing in Fairfax, VA.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
