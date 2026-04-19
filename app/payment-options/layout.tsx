import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Options | Roselle Center For Healing",
  description:
    "Learn about affordable and flexible payment options at Roselle Center for Healing including insurance, no insurance, and budget-friendly plans.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
