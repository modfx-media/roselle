import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Forms | Roselle Center For Healing",
  description: "Complete Roselle Center For Healing chiropractic forms online. Download and print patient health history forms before your appointment.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
