import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Functional Medicine | Roselle Center For Healing | Chiropractor in Fairfax, VA",
  description:
    "Holistic functional medicine services at Roselle Center for Healing in Fairfax, VA. Treat chronic conditions with chiropractic care, nutrition, corrective exercises, and lifestyle advice.",
};

export default function FunctionalMedicineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
