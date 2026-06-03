"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureSplit from "../components/templates/FeatureSplit";
import ContentBlock from "../components/templates/ContentBlock";
import FeatureGrid from "../components/templates/FeatureGrid";
import StatStrip from "../components/templates/StatStrip";
import PillarSection from "../components/templates/PillarSection";
import ImageCta from "../components/templates/ImageCta";

export default function WhiplashPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Whiplash · Fairfax, VA"
            title="From sudden impact to full recovery."
            subtitle="Chiropractic care that calms the symptoms and treats the root cause of whiplash — naturally."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Whiplash" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/whiplash3.jpg.webp?e196ad42c18aa45d0e7d4062ea76df38"
            imageAlt="Woman experiencing neck pain after auto accident."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Auto", label: "Accidents" },
              { value: "Sports", label: "Injuries" },
              { value: "Slip & fall", label: "Trauma" },
              { value: "Drug-free", label: "Recovery" },
            ]}
          />

          <FeatureSplit
            eyebrow="Whiplash Treatment"
            title="A common injury — with serious long-term effects if untreated."
            body="Whiplash is a common injury that can occur from an auto accident or a fall and significantly affect the quality of your life. Along with that, the pain due to the condition can become chronic and lead to long-term effects if not treated on time. At Roselle Center For Healing in Fairfax, VA, we offer chiropractic treatments to reduce your symptoms and improve your health."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/whiplash3.jpg.webp?e196ad42c18aa45d0e7d4062ea76df38"
            imageAlt="Whiplash care consultation."
          />

          <PillarSection
            tone="dark"
            eyebrow="Understanding Whiplash"
            title="What is Whiplash?"
            intro="Whiplash happens when your neck and head are moved forward and backward forcefully. The most common cause of whiplash is a car accident. When the car stops suddenly, your head continues to move in one direction and then the other, which can strain the muscles in your neck. Whiplash can also be caused by sports injury or a slip and fall accident."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Sudden impact", description: "Forceful forward-and-back movement of the head and neck." },
              { title: "Auto accidents", description: "The most common cause — sudden stops strain neck muscles." },
              { title: "Sports injuries", description: "Contact and high-impact sports can produce the same trauma." },
              { title: "Slip & falls", description: "Even non-vehicle falls can result in whiplash injury." },
            ]}
          />

          <ContentBlock
            eyebrow="Symptoms"
            title="Symptoms of Whiplash."
            body="The most common symptoms of whiplash are neck pain and stiffness. The pain can be more intense when moving your head and you may have difficulty moving your head and neck. Not only that, but you might experience pain and stiffness in your shoulders, upper back, and lower back. You can also have pain in your arms and hands; blurry vision, migraines, and difficulty concentrating are also common."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Treatment Options"
            title="Chiropractic Whiplash Treatment."
            intro="While conventional medicine offers temporary relief, chiropractic care effectively treats the root cause."
            cols={3}
            cards={[
              {
                title: "Chiropractic Adjustment",
                description:
                  "Gentle pressure and thrusts correct misalignments caused by impact or lifestyle. Proper spinal alignment relieves pain, reduces inflammation, and improves nervous system function.",
              },
              {
                title: "Physiotherapy",
                description:
                  "Laser therapy penetrates deep into tissues to speed recovery, reduce inflammation, and alleviate pain at its source.",
              },
              {
                title: "Spinal Decompression",
                description:
                  "A specialized table creates negative pressure in the spine, helping bulging or herniated discs return to place and relieving spinal tension.",
              },
              {
                title: "Massage Therapy",
                description:
                  "Releases muscle tension, restores range of motion, and decreases inflammation — addressing the muscular strain that drives whiplash pain.",
              },
              {
                title: "Acupuncture",
                description:
                  "A complementary approach to decrease tension, improve nervous system function, and eliminate residual discomfort.",
              },
              {
                title: "Personalized care plan",
                description:
                  "Every treatment is matched to the severity of your injury, your goals, and your timeline — built collaboratively with Dr. Roselle.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact us for an appointment today."
            body="If you have any symptoms of whiplash, our team at Roselle Center For Healing in Fairfax, VA, can help. We offer a range of treatments, such as chiropractic adjustments, massage therapy, acupuncture, and laser therapy, to provide relief and help you return to your normal routine quickly. To schedule your appointment, call our office at (703) 698-7117 today."
            image="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=70&auto=format&fit=crop"
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
