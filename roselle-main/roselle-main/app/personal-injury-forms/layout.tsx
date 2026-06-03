import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Personal Injury Forms | Roselle Center For Healing",
  description: "Personal injury forms including accident report, medical records lien, assignment of payment, and insurance information.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
