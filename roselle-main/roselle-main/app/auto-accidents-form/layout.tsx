import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auto Accidents Form | Roselle Center For Healing",
  description: "Auto accident information and injury report form for Roselle Center For Healing.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
