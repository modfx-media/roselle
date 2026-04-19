import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acupuncture in Fairfax, VA: Pain Relief & Wellness at Roselle Center",
  description:
    "Acupuncture services at Roselle Center for Healing in Fairfax, VA. Natural pain relief for back pain, sciatica, and more. Call (703) 698-7117 for an appointment.",
};

export default function AcupunctureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
