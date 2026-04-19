import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Map | Roselle Center For Healing",
  description: "Complete site map for Roselle Center For Healing in Fairfax, VA. Navigate all pages including services, conditions treated, and patient resources.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
