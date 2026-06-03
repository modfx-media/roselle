"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import ContentBlock from "../components/templates/ContentBlock";
import FeatureGrid from "../components/templates/FeatureGrid";
import StatStrip from "../components/templates/StatStrip";
import ImageCta from "../components/templates/ImageCta";

export default function TeleworkingErgonomicsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Health Education · Fairfax, VA"
            title="Teleworking: ergonomics survival guide."
            subtitle="Dr. Scott Lamp, DC, CCSP presents a 3-part series on home & workplace ergonomics."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Health Education", href: "/education-lectures.html" },
              { label: "Teleworking Ergonomics" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Ergonomic workplace setup."
            primaryCta={{ label: "Watch on Vimeo", href: "https://vimeo.com/showcase/6960732" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "3-Part", label: "Series" },
              { value: "DC, CCSP", label: "Expert" },
              { value: "Home + Office", label: "Setup" },
              { value: "Injury", label: "Prevention" },
            ]}
          />

          <ContentBlock
            eyebrow="Ergonomics"
            title="Home & Workplace Ergonomics."
            body={[
              "Dr. Scott Lamp, DC, CCSP of the Roselle Center for Healing presents a thorough teleworking survival guide for home and workplace ergonomics.",
              "In this 3-part series, Dr. Lamp covers improvement processes that may remove risk factors that lead to musculoskeletal injuries. Following his recommendations allows for improved performance and productivity, and helps avoid ergonomics-related injuries and stress.",
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Video Series"
            title="3-part ergonomics series."
            cols={3}
            cards={[
              {
                title: "Part 1: Introduction",
                description:
                  "Dr. Scott Lamp introduces the teleworking ergonomics survival guide and covers the foundations of proper workplace setup.",
              },
              {
                title: "Part 2: Teleworking Basics",
                description:
                  "Peripheral devices, keyboard, laptop surfaces, keyboard size, lumbar support, mouse, wristpads and more.",
              },
              {
                title: "Part 3: Memory Pegs",
                description:
                  "Memory pegs to help you remember and apply key ergonomic principles throughout your workday.",
              },
            ]}
          />

          <ContentBlock
            eyebrow="Disclaimer"
            title="A note on this education."
            body="Health care information and lectures provided at the Roselle Center for Healing are not intended or implied to be a substitute for professional medical advice, diagnosis, or treatment; it is for general information and educational purposes only. Always consult your own physician prior to changing any current medical directive or prescription."
          />

          <ImageCta
            eyebrow="Contact Dr. Lamp"
            title="Have questions about ergonomics?"
            body="Contact Roselle Center For Healing in Fairfax, VA for a consultation with Dr. Scott Lamp, DC, CCSP."
            image="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Contact us", href: "/contact" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
