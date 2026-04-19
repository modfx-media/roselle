import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Patient Experience | Roselle Center For Healing | Chiropractor in Fairfax, VA",
  description:
    "Welcome to the Roselle Center for Healing new patient center. Learn what to expect during your first and second visits, schedule your 90-minute appointment, and complete online forms.",
};

export default function NewPatientCenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
