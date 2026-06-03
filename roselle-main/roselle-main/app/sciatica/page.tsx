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

export default function SciaticaPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Sciatica · Fairfax, VA"
            title="Pain that runs from your back to your leg? Let's calm the nerve."
            subtitle="Roselle Center For Healing offers gentle, drug-free sciatica treatment that targets the cause — not just the symptom."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Sciatica" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/sciatica.jpg.webp?1038246deefd907bb2866e34b800ee33"
            imageAlt="Person in a white shirt holding lower back, indicating pain associated with sciatica."
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
            eyebrow="Chiropractic Sciatica Treatment Options"
            title="Relief from leg pain, numbness, and nerve discomfort."
            body="If you have ever experienced pain that runs from your lower back to your leg, it may be due to sciatica. The condition can cause pain and numbness in both legs, as both legs have a bundle of sciatic nerves. At Roselle Center For Healing in Fairfax, VA, we provide treatment that can offer relief from sciatica and help you heal."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/sciatica.jpg.webp?1038246deefd907bb2866e34b800ee33"
            imageAlt="Sciatica patient consultation."
          />

          <PillarSection
            tone="dark"
            eyebrow="Understanding the Condition"
            title="Causes of Sciatica."
            intro="Sciatica can be caused by a variety of factors. The nerve may be pinched due to a herniated disk or bone spur. Other medical conditions, such as diabetes and tumors may also compress the nerve."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Excessive weight", description: "Excess weight puts additional stress on your spine and presses on the sciatic nerve." },
              { title: "Occupation", description: "Desk work, twisting, or moving heavy items can lead to sciatica." },
              { title: "Age", description: "Herniated disks and bone spurs become more likely with age." },
              { title: "Personal injury", description: "Car accidents, slips, falls, and sports injuries can cause sciatica pain." },
            ]}
          />

          <ChecklistSplit
            eyebrow="Seeking Care"
            title="When to Seek Treatment."
            body="It is important to seek treatment as soon as you notice any back pain. While over-the-counter medications can provide temporary relief, the pain tends to come back. When you visit us, our chiropractors will perform an evaluation to learn more about your condition and determine the root cause of your discomfort."
            image="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Sciatica treatment evaluation."
            items={[
              "Spinal adjustments to relieve nerve pressure",
              "Therapeutic massage therapy",
              "Hot and cold therapies",
              "Ultrasound therapy and gentle techniques",
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact us for an appointment today."
            body="If you are experiencing symptoms of sciatica, let our team at Roselle Center For Healing in Fairfax, VA, help. We will create an individualized treatment plan that will alleviate your pain and help you heal. To learn more about our services and to schedule your appointment, call our office at (703) 698-7117 today."
            image="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1600&q=70&auto=format&fit=crop"
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
