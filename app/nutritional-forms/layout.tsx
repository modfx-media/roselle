import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nutritional Forms | Roselle Center For Healing",
  description: "Metabolic screening and nutritional assessment form for Roselle Center For Healing.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
