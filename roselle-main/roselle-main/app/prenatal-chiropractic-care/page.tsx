"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import StatStrip from "@/app/components/templates/StatStrip";
import ImageCta from "@/app/components/templates/ImageCta";

export default function PrenatalChiropracticCarePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Prenatal Chiropractic Care · Fairfax, VA"
            title="Prenatal chiropractic care for a more enjoyable pregnancy."
            subtitle="Relief from pelvic pain, sciatica, nausea, and stress — for you and your baby."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Prenatal Chiropractic Care" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x723_80/webmgr/0g/5/2/pre-natal.jpg.webp?75968df221e7e79b6f8de19c71e96499"
            imageAlt="Pregnant woman receiving chiropractic care."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Webster", label: "Technique" },
              { value: "Sciatica", label: "Relief" },
              { value: "Better", label: "Sleep" },
              { value: "Lower", label: "Stress" },
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Benefits of Prenatal Care"
            title="How chiropractic care helps during pregnancy."
            cols={2}
            cards={[
              {
                title: "Prenatal Pelvic Pain Relief (Webster Technique)",
                description:
                  "Pelvic pain is common as the body accommodates a growing baby. The Webster technique gently relaxes and opens the pelvis, providing more room and increasing comfort for both mom and baby.",
              },
              {
                title: "Sciatica Treatment",
                description:
                  "As the abdomen grows, pressure increases on the sciatic nerve. Our chiropractors massage surrounding muscles and relieve nerve pressure to reduce pain, numbness, and discomfort.",
              },
              {
                title: "Nausea Relief",
                description:
                  "Chiropractic treatment provides relief from morning sickness, motion sickness, and general nausea — without prescription pills. Techniques also help rebalance the inner ear.",
              },
              {
                title: "Reduced Anxiety & Stress",
                description:
                  "Adjustments, massage, and manual therapy help mothers relax and adapt to body changes. Regular visits also improve sleep quality, which is important for the baby's development.",
              },
              {
                title: "Optimal Fetal Position",
                description:
                  "Care that helps the baby reach the optimal position for delivery — supporting smoother delivery and reduced labor time.",
              },
              {
                title: "Whole-Pregnancy Support",
                description:
                  "Care customized to your trimester and unique needs — from early support through preparation for delivery.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact us for an appointment today."
            body="At Roselle Center for Healing in Fairfax, VA, we'll discuss your specific needs and recommend a personalized treatment plan for you and your baby. Schedule your initial consultation today."
            image="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1600&q=70&auto=format&fit=crop"
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
