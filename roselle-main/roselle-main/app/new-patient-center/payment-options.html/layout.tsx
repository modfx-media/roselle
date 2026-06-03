import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Options | Roselle Center For Healing | Chiropractor in Fairfax, VA",
  description:
    "Affordable and flexible payment options at Roselle Center for Healing in Fairfax, VA. Cash practice with out-of-network insurance submission, flexible plans for patients with limited or no insurance.",
};

export default function PaymentOptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
