import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "New Patient Welcome Form | Roselle Center For Healing",
  description: "New patient welcome form for Roselle Center For Healing. Personal information, health history, and consent.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
