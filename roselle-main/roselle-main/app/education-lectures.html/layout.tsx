import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Education Lectures | Roselle Center For Healing",
  description: "Attend free health education lectures at Roselle Center for Healing in Fairfax, VA. Registration required. Call (703) 698-7117 to reserve your seat.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
