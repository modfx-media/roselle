"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";

export default function PodcastPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Podcast · New episodes weekly"
            title="The Roselle Healing Podcast."
            subtitle="Honest conversations on chiropractic care, functional medicine, and the small daily decisions that move the body toward healing. Hosted by Dr. Tom Roselle, DC — recorded in Fairfax, Virginia. Stay updated with upcoming podcasts and connect with Dr. Roselle — click the buttons below to get started."
            crumbs={[{ label: "Home", href: "/" }, { label: "Podcast" }]}
            image="/services/close-up-cupping-therapy-experience.jpg"
            imageAlt="The Roselle Healing Podcast."
            primaryCta={{ label: "Connect with Dr. Roselle", href: "https://www.drtomroselle.com/connect/", external: true }}
            secondaryCta={{ label: "Listen to the podcast", href: "https://www.drtomroselle.com/ageless-health-podcast/", external: true }}
          />

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
