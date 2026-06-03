"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureSplit from "../components/templates/FeatureSplit";
import ContentBlock from "../components/templates/ContentBlock";
import StatStrip from "../components/templates/StatStrip";
import ImageCta from "../components/templates/ImageCta";

export default function WebsterTechniquePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Webster Technique · Fairfax, VA"
            title="The Webster Technique: a gentler path through pregnancy."
            subtitle="Chiropractic care designed to balance the pelvis and ease delivery."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Webster Technique" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/services_pregnancy_adjustment.jpg.webp?ad530771e18af6965b4c24192753ce0b"
            imageAlt="Pregnant woman gently cradling her belly."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Pelvic", label: "Balance" },
              { value: "Non-invasive", label: "Care" },
              { value: "Gentle", label: "Adjustments" },
              { value: "All trimesters", label: "Welcome" },
            ]}
          />

          <FeatureSplit
            eyebrow="Prenatal Care"
            title="The Webster Technique."
            body="Pregnancy is exciting, but it can also be overwhelming as your body changes rapidly to grow your baby and prepare for childbirth. While discomfort is common — especially toward the end — chiropractic care can help relieve pain. We provide chiropractic adjustments, including the Webster Technique, at Roselle Center for Healing in Fairfax, VA."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/services_pregnancy_adjustment.jpg.webp?ad530771e18af6965b4c24192753ce0b"
            imageAlt="Prenatal chiropractic care."
          />

          <ContentBlock
            tone="dark"
            eyebrow="Risk Factors"
            title="Factors that Increase Your Risk of Sacral and Pelvic Imbalance."
            body={[
              "Postural changes, weight gain, and hormones can all increase the risk of sacral and pelvic imbalance. Your pelvis supports ligaments, tendons, and muscles that endure more pressure as your body changes — chiropractic alignment helps keep them in the best shape possible for childbirth.",
              "An aligned pelvis gives babies a higher chance of being in the correct position for birth. The Webster Technique helps balance the pelvis and provide room for the baby to develop. It is non-invasive and helps make pregnancy more comfortable.",
            ]}
          />

          <ContentBlock
            eyebrow="Technique"
            title="What is the Webster Technique?"
            body="The Webster Technique focuses on the pelvis, sacrum, ligaments, and muscles around the pelvic region. Dr. Larry Webster developed this chiropractic technique in the 1980s to help ease labor and delivery. His focus was on baby restriction to movement inside the uterus, which causes pain and discomfort for the mother and complications for the baby."
          />

          <ContentBlock
            tone="dark"
            eyebrow="Procedure"
            title="How is the Webster Technique Performed?"
            body="Before applying the Webster Technique, our chiropractor will speak with you about your overall health and the progression of your pregnancy. Then we perform a series of adjustments and help relax the soft tissues. Even though the goal is to create space in the pelvis for your baby, our chiropractor does not attempt to turn the baby — adjustments allow the baby to move naturally."
          />

          <ContentBlock
            eyebrow="Eligibility"
            title="Do I Qualify for the Webster Technique?"
            body="The Webster technique is safe and beneficial for any of our pregnant patients. It is a less invasive method to help turn your baby and ease pressure on your pelvis. It can be helpful if you are worried about a breech baby or have concerns about your pelvis or sacrum during pregnancy."
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact us for treatment today!"
            body="At Roselle Center for Healing in Fairfax, VA, our goal is to help you stay comfortable and healthy during pregnancy. Our comprehensive treatment plans address any concerns you may have to ensure your body is ready for childbirth. Call us at (703) 698-7117 to learn more."
            image="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1600&q=70&auto=format&fit=crop"
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
