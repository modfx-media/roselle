"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureSplit from "../components/templates/FeatureSplit";
import ContentBlock from "../components/templates/ContentBlock";
import StatStrip from "../components/templates/StatStrip";
import PillarSection from "../components/templates/PillarSection";
import ChecklistSplit from "../components/templates/ChecklistSplit";
import ImageCta from "../components/templates/ImageCta";

export default function BackPainPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Where it hurts · Treated naturally"
            title="Back pain, finally explained — and addressed at the source."
            subtitle="A debilitating problem that limits daily life. We help patients in Fairfax, VA pinpoint the root cause and build a personalized plan for lasting relief."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Where is Your Pain? Conditions Treated", href: "/chronic-pain" },
              { label: "Back Pain" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x599_80/webmgr/0g/5/2/backpain2.jpg.webp?5e09f2e65d557a69799049a7fdb7935b"
            imageAlt="Man holding lower back outdoors, illustrating the daily impact of back pain."
            primaryCta={{ label: "Book your assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "30+", label: "Years in Fairfax, VA" },
              { value: "10k+", label: "Patients treated" },
              { value: "100%", label: "Drug-free care" },
              { value: "5★", label: "Patient reviewed" },
            ]}
          />

          <FeatureSplit
            eyebrow="Overview"
            title="Back pain isn't just a back problem."
            body="Back pain can appear as a dull ache or sharp shooting pain. It's often felt in the shoulders, neck, and back. The best way to develop an effective treatment plan is to determine the root cause. If you live in Fairfax, VA, and suffer from back pain, contact the Roselle Center for Healing today to start feeling some relief."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x599_80/webmgr/0g/5/2/backpain2.jpg.webp?5e09f2e65d557a69799049a7fdb7935b"
            imageAlt="Man experiencing back pain while standing outdoors, holding lower back."
            bullets={[
              "Whole-body assessment, not just symptom chasing",
              "Personalized care plans tuned to your lifestyle",
              "Combines chiropractic, applied kinesiology and rehab",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Adjustments"
            title="What is a chiropractic adjustment?"
            intro="Chiropractors diagnose and treat conditions such as back pain. They focus on integrative health and the relationship between the nervous system and overall health. They use non-invasive and drug-free techniques. Chiropractic adjustments gently manipulate the spine and return it to proper alignment to reduce pain, and improve functionality."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Diagnose & treat", description: "Expert assessment to find what's actually driving the pain." },
              { title: "Nervous system focus", description: "Restore healthy nerve communication, not just bone position." },
              { title: "Drug-free care", description: "Non-invasive techniques that work with your body, not against it." },
              { title: "Restore alignment", description: "Gentle spinal manipulation to ease pain and improve function." },
            ]}
          />

          <ContentBlock
            eyebrow="Conditions"
            title="What conditions can chiropractic treat?"
            body={[
              "There are several conditions chiropractors can treat, including sciatica and injuries resulting from an accident. Sciatica causes pain that radiates along the sciatic nerve and is often felt in the lower back, buttocks, and legs.",
              "Our chiropractor's goal is to determine the cause of your condition to create a targeted solution. In some cases, a herniated disc can cause sciatica. Targeted adjustments and therapeutic exercises are a great solution for multiple spinal issues.",
              "Personal injury is common after an accident or sports activity. Some individuals experience whiplash, which primarily causes pain in the neck, but can also cause pain in the back. The focus is on rehabilitation, pain management, and improving mobility.",
            ]}
          />

          <ChecklistSplit
            tone="dark"
            eyebrow="Benefits"
            title="Why chiropractic care works."
            body="Chiropractic care offers alternative treatments for back pain. Chiropractors use manual adjustments, spinal manipulations, and other techniques to realign the spine, reduce pressure on nerves, and promote natural healing, which can result in pain relief. These methods allow the body to heal naturally, providing long-term relief and overall health. We will create treatment plans for each patient, considering goals, lifestyle, and medical history."
            image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Patient receiving a chiropractic spinal adjustment."
            items={[
              "Manual adjustments and spinal manipulations",
              "Reduces pressure on nerves",
              "Promotes natural healing",
              "Personalized to your goals, lifestyle, and history",
            ]}
          />

          <ImageCta
            eyebrow="Ready when you are"
            title="Why choose Roselle Center for Healing?"
            body="Roselle Center for Healing in Fairfax, VA, provides a holistic and integrative approach to treating back pain — promoting overall health and well-being. Schedule today and start your path to pain-free living."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
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
