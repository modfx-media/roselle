"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureGrid from "../components/templates/FeatureGrid";
import ContentBlock from "../components/templates/ContentBlock";
import CtaBand from "../components/templates/CtaBand";

export default function IStorePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Ageless Health Store · Fairfax, VA"
            title="Ageless Health® Store."
            subtitle="Your source for professional-grade supplements, wellness products, and health education media curated by Dr. Tom Roselle, DC."
            crumbs={[{ label: "Home", href: "/" }, { label: "Ageless Health Store" }]}
            image="/services/online-store.jpg"
            imageAlt="Ageless Health Store."
            primaryCta={{ label: "Shop Fullscript", href: "https://us.fullscript.com/welcome/rosellecenter" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <FeatureGrid
            eyebrow="Shop by Brand"
            title="Ageless Health® products."
            cols={3}
            cards={[
              { title: "Ageless Health® Media", description: "Podcasts, interviews, and educational health media from Dr. Tom Roselle, DC.", href: "https://www.drtomroselle.com/" },
              { title: "Dr. Tom Roselle Live!® Media", description: "Watch Dr. Tom Roselle Live!® health and wellness show episodes and clips.", href: "https://www.youtube.com/playlist?list=PLSD_TAHzW2viKc2panFxkNwbGcfKwOnoS" },
              { title: "Ageless Health® Wellness", description: "Professional-grade supplements and wellness products recommended by our practitioners.", href: "https://us.fullscript.com/welcome/rosellecenter" },
            ]}
          />

          <ContentBlock
            tone="dark"
            eyebrow="Trademark"
            title="Federally registered trademarks."
            body={[
              "Ageless Health® and logos are federally registered trademarks.",
              "Dr. Tom Roselle Live!® and logos are federally protected trademarks.",
            ]}
          />

          <FeatureGrid
            eyebrow="Recommended"
            title="Partner products."
            intro="Dr. Roselle recommends these trusted health and wellness brands to support your journey."
            cols={3}
            cards={[
              { title: "Fullscript — Order Supplements", description: "Order supplements through our Fullscript store. Free shipping on orders over $50.", href: "https://us.fullscript.com/welcome/rosellecenter" },
              { title: "Lotus Wei — Flower Essences", description: "Premium flower essence elixirs for emotional wellness and stress relief.", href: "https://www.lotuswei.com/?sca_ref=5562388.gogdYBefi6" },
              { title: "AirTamer — Air Purifiers", description: "Best-selling rechargeable personal air purifiers. Use promo code Roselle for a discount.", href: "https://www.airtamer.com/products/personal-air-purifiers/a310-rechargeable-air-purifier/" },
            ]}
          />

          <CtaBand tone="gold" eyebrow="Personalized recommendations" title="Questions about supplements?" body="Our practitioners can help you choose the right supplements for your specific health needs." primaryCta={{ label: "Book a consultation", href: "/appointment" }} secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
