import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Offers | Roselle Center For Healing",
  description:
    "View special offers and promotions from Roselle Center for Healing in Fairfax, VA.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
