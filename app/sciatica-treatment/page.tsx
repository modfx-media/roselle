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

export default function SciaticaTreatmentPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Sciatica Treatment · Fairfax, VA"
            title="Sciatica relief that addresses the root cause."
            subtitle="Chiropractic adjustments, massage, and acupuncture for lasting recovery."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Sciatica Treatment" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x1248_80/webmgr/0g/5/2/sciatica%202.jpg.webp?f80d02944ad87609efdb12accdf9c39b"
            imageAlt="Sciatica anatomy diagram."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Drug-free", label: "Care" },
              { value: "Root-cause", label: "Focus" },
              { value: "Personalized", label: "Plans" },
              { value: "Long-term", label: "Relief" },
            ]}
          />

          <FeatureSplit
            eyebrow="Overview"
            title="Sciatica & how we treat it."
            body="Sciatica can cause debilitating pain that originates in your lower back and travels to the buttocks and legs — and the discomfort can become chronic when left untreated. At Roselle Center for Healing in Fairfax, VA, we provide various treatments to alleviate your symptoms and prevent further complications."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x1248_80/webmgr/0g/5/2/sciatica%202.jpg.webp?f80d02944ad87609efdb12accdf9c39b"
            imageAlt="Sciatica diagram."
          />

          <PillarSection
            tone="dark"
            eyebrow="Causes"
            title="Common Causes of Sciatica: Discs, Posture & Spinal Issues."
            intro="Sciatica occurs when the sciatic nerve becomes irritated or compressed. The condition can develop due to several factors that lead to lower back pain, numbness, and muscle weakness."
            cta={{ label: "Book a consultation", href: "/appointment" }}
            pillars={[
              { title: "Bulging discs", description: "Discs that press on the sciatic nerve cause shooting pain." },
              { title: "Poor posture", description: "Long-term postural strain compresses the lower spine." },
              { title: "Excess weight", description: "Adds load and pressure to the lumbar region." },
              { title: "Spinal stenosis", description: "Narrowing of the spinal canal squeezes the nerve." },
            ]}
          />

          <ChecklistSplit
            eyebrow="Treatment"
            title="Treatments for Sciatica."
            body="Chiropractic care can be highly beneficial for sciatica. Our chiropractors can treat leg pain and back pain by manipulating the spine and reducing sciatic nerve pressure. Along with that, we can also offer nutritional advice on which foods to consume and avoid to help you heal. We'll also teach you exercises that you can implement into your routine that are designed to ease your symptoms. Muscles play an important role in reducing lower back pain as well — stronger muscles are designed to help support your spine. It's also beneficial to stretch certain muscles, such as the ones in your hips, since stretching can decrease any pressure you may be experiencing in your lower back. We can guide you through any necessary exercises that can help you heal and ensure you're doing them correctly to prevent straining yourself. At our practice, we are dedicated to addressing the root cause of your pain rather than masking the symptoms — and to helping you recover properly."
            image="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Sciatica treatment session."
            items={[
              "Spinal manipulation to reduce nerve pressure",
              "Nutritional guidance to support healing",
              "Hip and core stretches to strengthen support",
              "Form coaching to prevent re-injury",
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact us for an appointment today."
            body="If you're experiencing any symptoms of sciatica, our team in Fairfax, VA, can help. We provide chiropractic adjustments, massage therapy, and acupuncture to reduce your pain and improve your health."
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
