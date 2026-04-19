import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Feedback | Roselle Center For Healing",
  description: "Share your patient feedback at Roselle Center For Healing in Fairfax, VA. Download our Client Experience Questionnaire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
