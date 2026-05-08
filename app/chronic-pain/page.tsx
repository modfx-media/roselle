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

export default function ChronicPainPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Chronic Pain · Fairfax, VA"
            title="Chronic pain relief that goes beyond temporary fixes."
            subtitle="Natural, non-invasive treatments designed to identify the root cause and improve your overall health."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Chronic Pain" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/pain-management.jpg.webp?b6e51fcaa5995df4c0fb73d9f79cd160"
            imageAlt="Man experiencing lower back pain in a chiropractic clinic setting."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Drug-free", label: "Treatment" },
              { value: "Non-invasive", label: "Care" },
              { value: "Whole-body", label: "Plans" },
              { value: "Long-term", label: "Relief" },
            ]}
          />

          <FeatureSplit
            eyebrow="Pain Management"
            title="Chronic Pain Relief in Fairfax, VA."
            body="If you have chronic pain due to an injury or a condition, the discomfort can limit your mobility and significantly affect your quality of life. At Roselle Center for Healing in Fairfax, VA, we provide chiropractic treatments to reduce your symptoms and improve your overall health."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/pain-management.jpg.webp?b6e51fcaa5995df4c0fb73d9f79cd160"
            imageAlt="Chronic pain consultation."
          />

          <PillarSection
            tone="dark"
            eyebrow="Understanding Your Pain"
            title="Understanding Chronic Pain."
            intro="Sometimes, it can be hard to determine the cause of chronic pain. You may be living with chronic injury, posture distortion, and autoimmune disease that flares up without warning. Along with that, the physical effects of chronic pain can affect your mental health. However, our chiropractors offer natural and non-invasive treatments to help alleviate your discomfort and improve your well-being."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Hidden causes", description: "Pain often stems from sources hard to identify alone." },
              { title: "Posture distortion", description: "Chronic misalignments place ongoing stress on the body." },
              { title: "Autoimmune flares", description: "Inflammatory conditions that flare without warning." },
              { title: "Mental impact", description: "Long-term physical pain affects emotional well-being too." },
            ]}
          />

          <ChecklistSplit
            eyebrow="Treatment Approach"
            title="Chiropractic Care for Chronic Pain."
            body="Chiropractic care can be highly effective in easing chronic pain. When you visit us for your first appointment, we will speak with you about the symptoms you are experiencing and review your health history. You will receive a very thorough structural and neurological exam. These details can help us learn more about your condition. Afterward we will develop an individualized treatment plan for your specific needs. Your treatment may consist of chiropractic adjustments, acupuncture, physical therapy with lifestyle changes. We will regularly talk with you about your progress to ensure that treatment is helping reduce your pain. If needed, our chiropractors can adjust your care plan to help you achieve your desired results."
            image="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Chronic pain treatment session."
            items={[
              "Symptom and health history review",
              "Thorough structural and neurological exam",
              "Adjustments, acupuncture, PT, and lifestyle changes",
              "Regular check-ins to refine your care plan",
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact us for an appointment today."
            body="At Roselle Center for Healing in Fairfax, VA, we understand how chronic pain can affect your body and our team is here to help. Whether you're dealing with lingering pain from an old injury, headaches, back pain, or shoulder pain, we'll identify the root cause and help you heal."
            image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&q=70&auto=format&fit=crop"
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
