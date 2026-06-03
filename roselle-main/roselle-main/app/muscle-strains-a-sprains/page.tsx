"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureSplit from "../components/templates/FeatureSplit";
import FeatureGrid from "../components/templates/FeatureGrid";
import StatStrip from "../components/templates/StatStrip";
import ImageCta from "../components/templates/ImageCta";

export default function MuscleStrainsSprainsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Muscle Strains & Sprains · Fairfax, VA"
            title="Muscle strains & sprains — different injuries, same goal: lasting relief."
            subtitle="Personalized treatment plans for sports, auto, and everyday injuries."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Muscle Strains & Sprains" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/pulled-muscle.jpg.webp?2a3d4b1fbda62fc8a368934d9955c646"
            imageAlt="Massage therapy session focused on muscle recovery for strains and sprains."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Drug-free", label: "Care" },
              { value: "Personalized", label: "Plans" },
              { value: "Faster", label: "Recovery" },
              { value: "Re-injury", label: "Prevention" },
            ]}
          />

          <FeatureSplit
            eyebrow="Treatment Options"
            title="Comprehensive Care for Strains & Sprains."
            body="Muscle strains and sprains sound alike, but they are very different. Sprains occur when a ligament is torn or stretched, while a strain happens when a muscle stretches or tears. Both can result in severe pain that limits your mobility and affects your daily activities. At Roselle Center for Healing in Fairfax, VA, we provide various treatments to alleviate your discomfort and help you heal fully — whether your injury is from a sport, auto accident, or daily activity."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/pulled-muscle.jpg.webp?2a3d4b1fbda62fc8a368934d9955c646"
            imageAlt="Muscle therapy session."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Our Approach"
            title="Treatment Methods."
            cols={2}
            cards={[
              {
                title: "Chiropractic Adjustments",
                description:
                  "When the spine is misaligned, it can put pressure on surrounding soft tissues. Chiropractic adjustments correct misalignments to help the body work efficiently and prevent injuries from reoccurring.",
              },
              {
                title: "Acupuncture Therapy",
                description:
                  "Highly effective for strains, sprains, and sore soft tissues. Thin needles inserted into certain body points reduce inflammation and help you feel your best.",
              },
              {
                title: "Massage Therapy",
                description:
                  "Reduces soreness in soft tissues. Different techniques address different injuries — deep pressure for knots, lighter techniques to relax and relieve pain.",
              },
              {
                title: "Hot & Cold Packs",
                description:
                  "For sprains or strains, hot and cold packs slow blood flow in the area, reduce swelling and inflammation, and ease pain.",
              },
              {
                title: "Therapeutic Exercises",
                description:
                  "Specific exercises taught in-office that you can continue at home — to increase strength, range of motion, and prevent further injury.",
              },
              {
                title: "Personalized care plan",
                description:
                  "Every plan is matched to the severity and source of your injury — and adjusted as you heal.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact Roselle Center for Healing."
            body="If you have a muscle strain or sprain due to a sport or auto accident, our team in Fairfax, VA, can help. After an evaluation, we will develop a treatment plan for your unique needs. Call (703) 698-7117 today to schedule an appointment."
            image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=70&auto=format&fit=crop"
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
