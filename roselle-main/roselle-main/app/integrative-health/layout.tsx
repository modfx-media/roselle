import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrative Health | Roselle Center For Healing",
  description:
    "Learn about our integrative health approach combining chiropractic care, functional medicine, and holistic therapies at Roselle Center for Healing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
