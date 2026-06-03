"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import ContentBlock from "@/app/components/templates/ContentBlock";
import StatStrip from "@/app/components/templates/StatStrip";
import PillarSection from "@/app/components/templates/PillarSection";
import ChecklistSplit from "@/app/components/templates/ChecklistSplit";
import ImageCta from "@/app/components/templates/ImageCta";

export default function NeckPainPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Neck Pain · Fairfax, VA"
            title="Neck pain that gets in the way? Let's get it out of the way."
            subtitle="Restore your range of motion with personalized chiropractic care that targets the source of the discomfort — not just the symptom."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Neck Pain" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1340x894_80/webmgr/0g/5/2/neck-pain.jpg.webp?d3c5bbdd071a9181bbd17b820ba3b48c"
            imageAlt="Close-up of a person's neck area, illustrating neck pain symptoms and the need for chiropractic treatment."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "30+", label: "Years experience" },
              { value: "Drug-free", label: "Approach" },
              { value: "Whole-body", label: "Care plans" },
              { value: "5★", label: "Patient rated" },
            ]}
          />

          <FeatureSplit
            eyebrow="Overview"
            title="Restore mobility, comfort, and quality of life."
            body="If you have neck pain due to an injury or a condition, it can affect daily activities and your quality of life. At Roselle Center for Healing in Fairfax, VA, we provide a variety of chiropractic treatments to help alleviate the discomfort and improve your range of motion."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1340x894_80/webmgr/0g/5/2/neck-pain.jpg.webp?d3c5bbdd071a9181bbd17b820ba3b48c"
            imageAlt="Patient receiving neck pain assessment."
            bullets={[
              "Comprehensive evaluation to find the root cause",
              "Gentle adjustments and therapeutic exercises",
              "Personalized care for injury or chronic conditions",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Causes"
            title="Causes of Neck Pain."
            intro="Neck pain can result from a variety of issues, including poor posture, prolonged screen time, and stress. However, in many cases, neck pain can also be the result of traumatic incidents, such as whiplash from a car accident injury or a personal injury. Since the discomfort can affect accomplishing tasks at work or enjoying hobbies, it is important to seek treatment."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Poor posture", description: "Forward-head posture and slouching strain the cervical spine." },
              { title: "Screen time", description: "Prolonged hours at a screen create chronic upper-body tension." },
              { title: "Stress", description: "Stress lives in the neck and shoulders — silently building up." },
              { title: "Trauma", description: "Whiplash from car accidents and personal injuries can linger for years." },
            ]}
          />

          <ContentBlock
            eyebrow="Treatment"
            title="Chiropractic Treatment for Neck Pain."
            body="At Roselle Center for Healing, we believe in identifying and addressing the root causes of your neck pain, not just the symptoms. Our team utilizes a range of chiropractic techniques, from spinal adjustments to therapeutic exercises, which are designed to relieve your pain, restore your mobility, and improve your overall health. Whether your neck pain is due to an inflamed muscle or stress, we will create an individualized treatment plan to meet your specific needs. Our chiropractors are dedicated to helping you return to your normal routine and enjoy a pain-free life."
          />

          <ChecklistSplit
            tone="dark"
            eyebrow="Integrative"
            title="Integrative Health."
            body="At our practice, we incorporate the principles of integrative health, which utilizes a variety of natural techniques to provide comprehensive and holistic care. Some services we offer include nutritional counseling, stress management techniques, and massage therapy to promote healing and prevent future pain."
            image="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Integrative chiropractic and wellness consultation."
            items={[
              "Nutritional counseling for healing",
              "Stress management techniques",
              "Therapeutic massage therapy",
              "Holistic, whole-body care",
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact us for treatment today."
            body="At Roselle Center for Healing in Fairfax, VA, we provide a variety of treatments that can help eliminate your neck pain and allow you to enjoy day-to-day activities without being hindered. To learn more about the treatments that we offer or to schedule your initial consultation, contact us at (703) 698-7117 today."
            image="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1600&q=70&auto=format&fit=crop"
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
