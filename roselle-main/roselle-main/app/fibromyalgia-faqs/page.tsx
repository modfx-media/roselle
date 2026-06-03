"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FaqAccordion from "../components/templates/FaqAccordion";
import CtaBand from "../components/templates/CtaBand";

export default function FibromyalgiaFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Fibromyalgia FAQs · Fairfax, VA"
            title="Fibromyalgia FAQs: symptoms, causes & care."
            subtitle="Understanding fibromyalgia is the first step toward reclaiming your health."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Fibromyalgia", href: "/fibromyalgia" },
              { label: "FAQs" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/elbowpain.jpg.webp?3e133dc321a6cb3315ba317476add68a"
            imageAlt="Patient consulting with chiropractor about fibromyalgia."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <FaqAccordion
            eyebrow="Frequently asked"
            title="Fibromyalgia FAQs."
            intro="It's one of the most frustrating diagnoses a patient can receive — you look fine on the outside, but feel like you have the flu every day. We look past the symptoms to understand why your body is sounding the alarm."
            items={[
              {
                q: "What is fibromyalgia?",
                a: "Fibromyalgia is a complex, chronic disorder that affects millions of people, yet it remains widely misunderstood. Patients experience widespread musculoskeletal pain, severe fatigue, and other symptoms — often with normal blood work and no visible signs.",
              },
              {
                q: "What causes fibromyalgia? (The \"Volume Knob\" Theory)",
                a: [
                  "Most experts agree that fibromyalgia is a problem with how the brain and spinal cord process pain signals. Think of your nervous system like a stereo. In a healthy body, the volume is set to a normal level. In a body with fibromyalgia, that volume knob is turned all the way up.",
                  "This process — called \"central sensitization\" — means things that shouldn't hurt (like a gentle touch or a change in weather) are interpreted by your brain as intense pain. Triggers often include physical trauma (like a car accident), surgery, infection, or significant psychological stress.",
                ],
              },
              {
                q: "What are the most common symptoms?",
                a: [
                  "The hallmark symptom is widespread musculoskeletal pain. But it rarely stops there. Patients often experience:",
                  "• Severe fatigue — waking up tired even after sleeping for ten hours.",
                  "• \"Fibro fog\" — difficulty concentrating or remembering details.",
                  "• Sleep disturbances — restless legs or sleep apnea.",
                  "• Sensory sensitivity — strong reactions to bright lights, noise, or odors.",
                ],
              },
              {
                q: "How does Roselle Center for Healing treat fibromyalgia?",
                a: "Because this is a multi-system issue, a single pill is rarely the answer. As a holistic clinic, we combine chiropractic care, acupuncture, and nutrition to address the root dysfunction. You need a team that understands how to calm a hypersensitive nervous system.",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="There is hope"
            title="You don't have to navigate this alone."
            body="If you're looking for effective fibromyalgia treatment near you, we're ready to help you lower the volume on your pain."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book online", href: "/appointment" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
