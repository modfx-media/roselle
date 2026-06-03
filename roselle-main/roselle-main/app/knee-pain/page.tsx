"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import StatStrip from "@/app/components/templates/StatStrip";
import ImageCta from "@/app/components/templates/ImageCta";

export default function KneePainPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Knee Pain · Fairfax, VA"
            title="Knee pain shouldn't slow you down."
            subtitle="Address the root cause — sports injury, arthritis, overuse, or misalignment — with personalized chiropractic care."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Knee Pain" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x1023_80/webmgr/0g/5/2/knee-pain.jpg.webp?802c9757dabe90041a2ae21a7536d8e4"
            imageAlt="Man holding knee in pain outdoors, illustrating knee injury."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Non-invasive", label: "Treatment" },
              { value: "Root-cause", label: "Focus" },
              { value: "Long-term", label: "Healing" },
              { value: "5★", label: "Patient rated" },
            ]}
          />

          <FeatureSplit
            eyebrow="Overview"
            title="Knee pain that limits your mobility deserves real care."
            body="Knee pain is a common issue that can limit your mobility and reduce your quality of life. Whether it's from an injury, overuse, or a chronic condition, it's important to seek professional care. At Roselle Center for Healing in Fairfax, VA, we provide chiropractic treatments that address the root causes of knee pain and support long-term healing."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x1023_80/webmgr/0g/5/2/knee-pain.jpg.webp?802c9757dabe90041a2ae21a7536d8e4"
            imageAlt="Knee pain consultation."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Causes"
            title="Common Causes of Knee Pain."
            cols={2}
            cards={[
              {
                title: "Sports Injuries",
                description:
                  "High-impact sports can put immense strain on the knees, leading to tears, sprains, and other injuries.",
              },
              {
                title: "Arthritis",
                description:
                  "Conditions like osteoarthritis and rheumatoid arthritis can cause inflammation, stiffness, and pain in the knee joint.",
              },
              {
                title: "Overuse Injuries",
                description:
                  "Repetitive motions, such as running or bending, can lead to conditions like tendinitis and bursitis.",
              },
              {
                title: "Misalignment",
                description:
                  "Imbalances in the body, such as misalignment in the spine or hips, can contribute to improper knee movement and pain.",
              },
            ]}
          />

          <FeatureGrid
            eyebrow="Treatment"
            title="How Can a Chiropractor Help?"
            cols={2}
            cards={[
              {
                title: "Chiropractic Adjustments",
                description:
                  "Targeted adjustments correct misalignments in the spine and joints, relieving pressure on the knees and promoting better movement patterns.",
              },
              {
                title: "Massage Therapy",
                description:
                  "Soft tissue techniques relax tight muscles around the knee, reduce swelling, and improve blood circulation to speed healing.",
              },
              {
                title: "Physical Therapy",
                description:
                  "Customized exercise programs strengthen the muscles supporting the knee, improve flexibility, and prevent future injuries.",
              },
              {
                title: "Ultrasound Therapy",
                description:
                  "Non-invasive sound waves reduce inflammation and promote tissue repair in the knee area.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Take control"
            title="Take control of your knee pain."
            body="Don't let knee pain hold you back from living your life. At Roselle Center for Healing in Fairfax, VA, we're committed to helping you find relief through effective, non-invasive treatments. Whether your knee pain is caused by an injury, arthritis, or overuse, our experienced team is here to guide you on your path to recovery."
            image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1600&q=70&auto=format&fit=crop"
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
