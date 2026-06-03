import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ageless Health Store | Roselle Center For Healing",
  description:
    "Shop supplements, wellness products, and health media from Ageless Health® at Roselle Center for Healing in Fairfax, VA.",
};

export default function IStoreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
