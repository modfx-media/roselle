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

export default function PrenatalChiropracticPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Prenatal Chiropractic · Fairfax, VA"
            title="Prenatal chiropractic care for a healthier pregnancy."
            subtitle="Reduce pain, ease stress, and prepare your body for childbirth."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Prenatal Chiropractic" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/services_pregnancy_adjustment.jpg.webp?ad530771e18af6965b4c24192753ce0b"
            imageAlt="Pregnant woman cradling her belly."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Less", label: "Back pain" },
              { value: "Better", label: "Sleep" },
              { value: "Improved", label: "Mobility" },
              { value: "Lower", label: "Stress" },
            ]}
          />

          <FeatureSplit
            eyebrow="Prenatal Care"
            title="What Are the Benefits of Prenatal Chiropractic Care?"
            body="Prenatal physical therapy is widely seen as beneficial for expectant mothers, but many women are unaware of just how many advantages it offers. At Roselle Center for Healing in Fairfax, VA, prenatal chiropractic care has the potential to provide a wide range of benefits."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/services_pregnancy_adjustment.jpg.webp?ad530771e18af6965b4c24192753ce0b"
            imageAlt="Prenatal care."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Benefits"
            title="What prenatal chiropractic care can do."
            cols={2}
            cards={[
              {
                title: "Reduced Lower Back Pain",
                description:
                  "Using the Webster Technique, our chiropractor focuses on pelvic alignment to reduce discomfort and prepare your body for childbirth — helping prevent complications that can arise from misalignment.",
              },
              {
                title: "Stress Reduction",
                description:
                  "Gentle manipulations release tension in the body, lower stress levels before, during, and after childbirth, and improve circulation to keep both mother and baby healthy.",
              },
              {
                title: "Increased Comfort & Mobility",
                description:
                  "Improves range of motion and comfort during pregnancy so you can stay active and prepare your body for the most comfortable delivery possible.",
              },
              {
                title: "Enhanced Body Posture",
                description:
                  "Supports an ideal posture throughout pregnancy — helping prevent posture-related medical issues and reducing pain and discomfort.",
              },
              {
                title: "Promotes Healthy Sleep",
                description:
                  "Adjustments and exercises improve sleep patterns, ensuring restful, restorative sleep that gives mothers the energy they need each day.",
              },
              {
                title: "Whole-Pregnancy Support",
                description:
                  "Care customized to your trimester and changing body — from early support through late-stage preparation for delivery.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Contact us"
            title="Call for prenatal chiropractic care."
            body="Our expert chiropractic team in Fairfax, VA, can help pregnant women enjoy a comfortable and healthy pregnancy. Contact us at (703) 698-7117 to learn more about our prenatal chiropractic care."
            image="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1600&q=70&auto=format&fit=crop"
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
