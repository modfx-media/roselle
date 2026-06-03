import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter Library | Roselle Center For Healing",
  description: "Browse our collection of informative chiropractic and wellness newsletters covering health tips, injury prevention, nutrition, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
