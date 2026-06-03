import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chiropractic Care in Fairfax, VA | Roselle Center For Healing",
  description: "Chiropractic care at Roselle Center for Healing in Fairfax, VA. Pain relief, improved mobility, and integrative healthcare for patients in Fairfax, Vienna, Falls Church, and Merrifield.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
