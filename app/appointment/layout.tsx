import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Appointment | Roselle Center For Healing",
  description: "Request an appointment at Roselle Center For Healing in Fairfax, VA. Schedule your chiropractic care consultation today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
