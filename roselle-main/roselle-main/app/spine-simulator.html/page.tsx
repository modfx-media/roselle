"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import ContentBlock from "../components/templates/ContentBlock";
import CtaBand from "../components/templates/CtaBand";

export default function SpineSimulatorPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Health Education · Fairfax, VA"
            title="Interactive spine simulator."
            subtitle="Explore the spine in 3D — understand vertebrae, nerves, posture, and how chiropractic care can help you."
            crumbs={[{ label: "Home", href: "/" }, { label: "Health Education", href: "/education-lectures.html" }, { label: "Spine Simulator" }]}
            image="/spine-simulator-1.webp"
            imageAlt="Interactive spine simulator."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <ContentBlock
            eyebrow="3D Spine"
            title="Click anywhere on the graphics below to view our interactive Spine Simulator."
            body="Explore detailed visualizations of spinal anatomy, posture, subluxation, bulging discs, and nerve connections — to better understand your spine and how chiropractic care supports it."
          />

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 flex flex-col gap-s8">
              <div className="rounded-xl overflow-hidden"><Image src="/spine-simulator-1.webp" alt="3D spine simulator showing vertebrae and nerve connections." width={1023} height={952} className="w-full h-auto" priority /></div>
              <div className="rounded-xl overflow-hidden"><Image src="/spine-simulator-2.webp" alt="Driving posture comparison." width={1023} height={954} className="w-full h-auto" /></div>
              <div className="rounded-xl overflow-hidden"><Image src="/spine-simulator-3.webp" alt="Spinal segments and discs." width={1023} height={949} className="w-full h-auto" /></div>
            </div>
          </section>

          <CtaBand tone="gold" eyebrow="Spinal health questions?" title="Schedule a consultation." body="Have questions about spinal health? Call us today to schedule a consultation with our chiropractic team." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
