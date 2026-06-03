import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roselle Center For Healing Blog: Chiropractic Care & Wellness Tips",
  description:
    "Read the latest blog posts, chiropractic care tips, and wellness news from Roselle Center for Healing in Fairfax, VA.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
