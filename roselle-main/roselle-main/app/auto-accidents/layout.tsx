import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Accident Injury Treatment | Chiropractor in Fairfax, VA | Roselle Center For Healing",
  description:
    "Auto accident injury treatment at Roselle Center for Healing in Fairfax, VA. Chiropractic care for whiplash, back pain, and soft tissue injuries from car accidents.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
