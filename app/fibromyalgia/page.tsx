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

export default function FibromyalgiaPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Fibromyalgia · Fairfax, VA"
            title="Fibromyalgia: looking beyond the pain for answers."
            subtitle="A multidimensional, compassionate approach for an invisible illness — chiropractic, nutrition, and acupuncture."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Fibromyalgia" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x585_80/webmgr/0g/5/2/Fibromyalgia.jpg.webp?c6831588c496b42009df99493853e10f"
            imageAlt="Diagram illustrating symptoms and tender points of fibromyalgia."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Whole-body", label: "Approach" },
              { value: "Drug-free", label: "Care" },
              { value: "Personalized", label: "Plans" },
              { value: "Chiro + Nutrition + Acupuncture", label: "Toolkit" },
            ]}
          />

          <FeatureSplit
            eyebrow="Understanding"
            title="An invisible illness that's anything but imaginary."
            body="Fibromyalgia is an invisible illness — a condition without visible wounds or bruises that can be dismissed by those who don't understand it. Yet, for those living with it, the experience is anything but imaginary. Constant widespread pain, crushing fatigue, difficulty concentrating, and sleeping difficulties can turn every day into an unpredictable challenge. At Roselle Center for Healing in Fairfax, VA, we understand the depth of what fibromyalgia patients endure. Our approach goes beyond surface-level symptom management to address the root mechanisms behind your pain — using a combination of chiropractic care, nutrition counseling, and acupuncture."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x585_80/webmgr/0g/5/2/Fibromyalgia.jpg.webp?c6831588c496b42009df99493853e10f"
            imageAlt="Fibromyalgia care consultation."
          />

          <PillarSection
            tone="dark"
            eyebrow="Science"
            title="The Body on High Alert."
            intro={`Central sensitization is a key feature of fibromyalgia. In simple terms, your nervous system becomes "turned up" — amplifying pain signals and reacting intensely to stimuli that wouldn't bother most people. A light touch might feel painful. A mild stressor might trigger widespread discomfort. You may feel like your body has turned against you.`}
            cta={{ label: "Book a consultation", href: "/appointment" }}
            pillars={[
              { title: "Central sensitization", description: "The nervous system amplifies normal signals into pain." },
              { title: "Calm the system", description: "Treatment focuses on calming overactive nerve pathways." },
              { title: "Reduce inflammation", description: "Lower the underlying inflammation driving symptoms." },
              { title: "Restore function", description: "Holistic care that goes beyond chasing single symptoms." },
            ]}
          />

          <ContentBlock
            eyebrow="Solution"
            title="A Multi-Dimensional Solution."
            body="There is no one-size-fits-all answer for fibromyalgia. That's why we use a multidimensional approach — combining hands-on treatment, lifestyle support, and natural therapies to create a personalized plan for each patient. Our goal is not just to reduce your pain, but to help you reclaim your energy, mental clarity, and quality of life."
          />

          <ContentBlock
            tone="dark"
            eyebrow="Chiropractic"
            title="The Role of Chiropractic Care."
            body={[
              "Chiropractic care plays a central role in our fibromyalgia treatment. The spine serves as the highway of the nervous system. When spinal misalignments — known as subluxations — are present, they can interfere with the body's ability to manage pain signals effectively.",
              "Our chiropractor uses gentle, precise adjustments to restore proper alignment, which can help reduce nerve irritation and improve communication between the brain and body. Many fibromyalgia patients experience decreased pain, better sleep, and improved mood after regular chiropractic sessions.",
            ]}
          />

          <ChecklistSplit
            eyebrow="Integrative"
            title="Nutrition and Acupuncture."
            body="What you eat can either fuel inflammation or fight it. Our nutrition counseling helps patients identify food sensitivities, reduce inflammatory triggers, and develop eating plans that support healing. Acupuncture is another powerful tool that stimulates the release of natural pain-relieving chemicals, promotes circulation, and helps regulate the nervous system."
            image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Acupuncture and nutritional support for fibromyalgia."
            items={[
              "Identify food sensitivities and inflammatory triggers",
              "Anti-inflammatory eating plans that support healing",
              "Acupuncture for natural pain relief and circulation",
              "Calming, restorative care for body and nervous system",
            ]}
          />

          <ImageCta
            eyebrow="Your path to relief"
            title="Your path to relief starts with a call."
            body="Living with fibromyalgia is hard. But you don't have to face it alone. We offer compassionate, comprehensive care that addresses the full picture — body, mind, and lifestyle. Call (703) 698-7117 today to schedule your consultation. Let's build a care plan that helps you move beyond just surviving — and start thriving."
            image="https://images.unsplash.com/photo-1540206395-68808572332f?w=1600&q=70&auto=format&fit=crop"
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
