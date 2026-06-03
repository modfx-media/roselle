import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teleworking: Ergonomics Survival Guide | Roselle Center For Healing",
  description: "Dr. Scott Lamp presents a thorough teleworking survival guide for home and workplace ergonomics at Roselle Center for Healing in Fairfax, VA.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
