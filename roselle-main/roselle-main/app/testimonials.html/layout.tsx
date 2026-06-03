import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Roselle Center For Healing",
  description: "Read patient testimonials from Roselle Center For Healing in Fairfax, VA. See what our patients say about their chiropractic care experience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
