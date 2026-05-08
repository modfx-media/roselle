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

export default function RotatorCuffPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Rotator Cuff · Fairfax, VA"
            title="Restore shoulder mobility — without invasive procedures."
            subtitle="Chiropractic adjustments, soft tissue therapy, and guided exercises to support long-term shoulder health."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Rotator Cuff" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/shoulder-treatment2.jpg.webp?48899552cd81d63a3d9d51f4bcd3b6df"
            imageAlt="Woman receiving shoulder treatment from a chiropractor."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Non-invasive", label: "Care" },
              { value: "Drug-free", label: "Approach" },
              { value: "Targeted", label: "Adjustments" },
              { value: "Sustained", label: "Mobility" },
            ]}
          />

          <FeatureSplit
            eyebrow="Rotator Cuff Treatment"
            title="A complex group of muscles that needs precise care."
            body="The rotator cuff is a group of muscles and tendons that stabilize the shoulder and allow for a wide range of motion. Injuries to this area often result from overuse, sudden trauma, or repetitive movements, leading to pain and restricted mobility. At Roselle Center For Healing in Fairfax, VA, our team evaluates shoulder function thoroughly to identify the source of discomfort and provide effective treatment options. Addressing rotator cuff injuries early can prevent chronic issues and improve overall shoulder performance."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/shoulder-treatment2.jpg.webp?48899552cd81d63a3d9d51f4bcd3b6df"
            imageAlt="Rotator cuff assessment."
          />

          <PillarSection
            tone="dark"
            eyebrow="Symptoms"
            title="Common Symptoms of Rotator Cuff Damage."
            intro="Rotator cuff injuries can manifest through several noticeable symptoms. Shoulder pain, particularly when lifting or rotating the arm, weakness in the shoulder, and a clicking or popping sensation are common indicators. Some patients may experience difficulty performing daily activities such as reaching overhead or carrying objects. Our chiropractors incorporate these observations into a comprehensive assessment to guide personalized shoulder pain treatment."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Lifting pain", description: "Sharp pain when lifting or rotating the arm overhead." },
              { title: "Weakness", description: "Reduced strength in the shoulder and arm." },
              { title: "Clicking & popping", description: "Audible or felt sensations during movement." },
              { title: "Daily limits", description: "Difficulty reaching, carrying, or doing routine tasks." },
            ]}
          />

          <ContentBlock
            eyebrow="Treatment"
            title="Chiropractic Approaches to Shoulder Pain Treatment."
            body="Chiropractic care can play a significant role in managing rotator cuff injuries. Techniques such as targeted chiropractic adjustments, soft tissue therapy, and guided exercises help restore proper joint alignment, reduce inflammation, and strengthen supporting muscles. These methods often provide relief without the need for invasive procedures, improving function and minimizing discomfort. Our team emphasizes combining adjustments with rehabilitative exercises to support long-term recovery."
          />

          <ContentBlock
            tone="dark"
            eyebrow="Prevention"
            title="Preventing Rotator Cuff Strain."
            body="Preventing rotator cuff injuries involves maintaining strength, flexibility, and proper movement patterns in the shoulder. Incorporating stretching routines, resistance training, and posture correction into daily activities can reduce the risk of strain. Our chiropractors educate patients on proper techniques and exercises to maintain shoulder health. Consistent care, combined with awareness of body mechanics, contributes to sustained mobility and reduced pain."
          />

          <ChecklistSplit
            eyebrow="Recovery"
            title="Recovery and Ongoing Care."
            body="Recovery from a rotator cuff injury varies depending on severity, but most patients respond well to a structured chiropractic program. Regular visits allow our chiropractors to monitor progress, adjust treatment strategies, and support ongoing healing. In addition to in-office care, we provide guidance for home exercises that strengthen the shoulder and prevent future issues."
            image="https://images.unsplash.com/photo-1544991875-5dc1b05f607d?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Rotator cuff rehabilitation exercise."
            items={[
              "Structured chiropractic recovery program",
              "Ongoing progress monitoring",
              "Adjusted treatment strategies as you heal",
              "Guided home exercises for shoulder strength",
            ]}
          />

          <ImageCta
            eyebrow="Optimizing shoulder health"
            title="Start improving your shoulder health."
            body="Addressing rotator cuff injuries early can prevent long-term discomfort and restore optimal function. If you are seeking a chiropractor near you for shoulder pain treatment or rehabilitation, call Roselle Center For Healing today."
            image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=70&auto=format&fit=crop"
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
