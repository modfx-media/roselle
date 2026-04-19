import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctors & Specialists | Roselle Center For Healing | Chiropractor in Fairfax, VA",
  description:
    "Meet the doctors, therapists and specialists at Roselle Center for Healing in Fairfax, VA. Our team includes chiropractors, acupuncturists, naturopathic doctors, nutritionists and wellness coaches.",
};

export default function MeetTheDoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
