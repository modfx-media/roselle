import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roselle Center For Healing: Fairfax, VA Clinic Hours | Chiropractor in Fairfax, VA",
  description:
    "View clinic hours for Roselle Center for Healing in Fairfax, VA. Open Monday–Saturday with flexible scheduling. Call (703) 698-7117 for available appointments and a free 20-minute consultation.",
};

export default function CenterHoursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
