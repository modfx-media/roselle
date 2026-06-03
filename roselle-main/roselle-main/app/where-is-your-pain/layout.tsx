import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where is Your Pain? Conditions Treated | Roselle Center For Healing",
  description:
    "Learn about chiropractic conditions treated at Roselle Center for Healing in Fairfax, VA including back pain, neck pain, sciatica, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
