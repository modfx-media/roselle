import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chiropractic Conditions Treated: Roselle Center for Healing in Fairfax",
  description: "Conditions treated at Roselle Center for Healing in Fairfax, VA. Expert chiropractic care for back pain, neck pain, shoulder pain, sciatica, whiplash, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
