import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Care Orientation | Roselle Center For Healing",
  description: "Watch the Health Care Orientation video and complete the post-viewing confirmation as part of your wellness plan at Roselle Center for Healing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
