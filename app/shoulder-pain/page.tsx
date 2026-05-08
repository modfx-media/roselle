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

export default function ShoulderPainPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Shoulder Pain · Fairfax, VA"
            title="Shoulder pain relief that addresses the root, not just the symptom."
            subtitle="Drug-free, non-invasive chiropractic care designed to restore alignment and stability."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Shoulder Pain" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/shoulder-pain.jpg.webp?87756b3fb4340ccc8f0c5f109a391a36"
            imageAlt="Man experiencing shoulder pain, holding his shoulder."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "All ages", label: "Welcome" },
              { value: "Drug-free", label: "Care" },
              { value: "Non-invasive", label: "Approach" },
              { value: "Holistic", label: "Long-term" },
            ]}
          />

          <FeatureSplit
            eyebrow="Shoulder Pain Treatment"
            title="A complex joint that deserves expert care."
            body="Shoulder pain is a common issue that can affect individuals of all ages. It can range from mild discomfort to severe pain that limits daily activities. The shoulder is a complex joint, and pain in this area can be caused by a variety of factors, including injuries, overuse, and underlying health conditions. Before you visit the Roselle Center for Healing in Fairfax, VA, learn how chiropractic can provide relief."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/shoulder-pain.jpg.webp?87756b3fb4340ccc8f0c5f109a391a36"
            imageAlt="Shoulder care assessment."
          />

          <PillarSection
            tone="dark"
            eyebrow="Common Causes"
            title="Common Causes of Shoulder Pain."
            intro="Several conditions can lead to shoulder pain. Some of these conditions include rotator cuff injuries, bursitis, tendonitis, and arthritis. In some cases, shoulder pain may result from a sudden injury, such as a fall or sports-related incident. Chronic conditions, like osteoarthritis, can also contribute to ongoing discomfort in the shoulder."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Rotator cuff injury", description: "Damage to the muscles and tendons stabilizing the shoulder." },
              { title: "Bursitis & tendonitis", description: "Inflammation of the joint cushions and connective tissue." },
              { title: "Arthritis", description: "Osteoarthritis and other chronic joint conditions." },
              { title: "Sudden injury", description: "Falls, sports incidents, and accidents that strain the joint." },
            ]}
          />

          <ContentBlock
            eyebrow="Chiropractic Care"
            title="Chiropractic Care for Shoulder Pain."
            body="Chiropractic care can effectively alleviate shoulder pain. Through manual adjustments and other techniques, we can help restore proper alignment, reduce inflammation, and improve your range of motion. Additionally, treatment enhances overall shoulder stability, which reduces the likelihood of recurring pain or injury."
          />

          <ContentBlock
            tone="dark"
            eyebrow="Benefits"
            title="The Benefits of Chiropractic Care."
            body="One of the main benefits of chiropractic care for shoulder pain is that it addresses the root cause of the pain, rather than just masking the symptoms. This holistic approach can lead to long-term relief and improved shoulder function. Additionally, chiropractic care is drug-free and non-invasive, making it a safe choice for many patients."
          />

          <ChecklistSplit
            eyebrow="Your First Visit"
            title="What to Expect During Your First Visit."
            body="When you visit us, we will discuss your symptoms with you and perform a physical exam. After, our chiropractors will create a personalized treatment plan for your specific needs. At this time, we can also address any questions or concerns you may have about your care plan."
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Shoulder pain consultation and assessment."
            items={[
              "Symptom discussion and full history review",
              "Hands-on physical examination",
              "Personalized treatment plan for your needs",
              "Open conversation about questions and goals",
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact us for an appointment today."
            body="If you are seeking shoulder pain treatment, let our team at the Roselle Center for Healing in Fairfax, VA, help. To learn more about our techniques and to schedule your consultation, contact our office at (703) 698-7117. When you need a chiropractor near you, we are happy to assist you!"
            image="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1600&q=70&auto=format&fit=crop"
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
