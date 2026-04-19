import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Purpose & Mission | Roselle Center For Healing",
  description:
    "The Roselle Center for Healing is a natural integrative healthcare practice with the purpose to serve, educate and empower individuals on their path to create extraordinary health.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
