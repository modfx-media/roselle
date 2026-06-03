"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import Testimonials from "@/app/components/Testimonials";
import PageHero from "@/app/components/templates/PageHero";
import StatStrip from "@/app/components/templates/StatStrip";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import PillarSection from "@/app/components/templates/PillarSection";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import ImageCta from "@/app/components/templates/ImageCta";

export default function PrenatalChiropractorFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Prenatal Chiropractic · Fairfax, VA · Webster Technique"
            title="Prenatal chiropractic care in Fairfax, VA — safe, gentle, and effective."
            subtitle="Pregnancy puts unique structural demands on the spine and pelvis. Our Webster Technique certified prenatal chiropractic care in Fairfax relieves back pain, round ligament tension, and pelvic imbalance — safely, throughout all trimesters."
            crumbs={[{ label: "Home", href: "/" }, { label: "Prenatal Chiropractic", href: "/prenatal-chiropractic" }, { label: "Prenatal Chiropractor Fairfax, VA" }]}
            image="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Prenatal chiropractic Webster Technique Fairfax VA"
            primaryCta={{ label: "Book prenatal consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "Webster", label: "Technique certified" },
            { value: "All trimesters", label: "Safe prenatal care" },
            { value: "30+", label: "Years of family care in Fairfax" },
            { value: "Gentle", label: "Pregnancy-adapted techniques" },
          ]} />
          <FeatureSplit
            eyebrow="Why pregnancy changes your spine"
            title="The structural reality of pregnancy — and why chiropractic helps."
            body={[
              "As pregnancy progresses, the growing uterus shifts the center of gravity forward, increasing lumbar lordosis and loading the SI joints asymmetrically. Relaxin (the pregnancy hormone) loosens all ligaments to prepare for delivery — which increases spinal and pelvic instability. Round ligament pain, pubic symphysis discomfort, and sciatic symptoms are all direct consequences of these mechanical changes.",
              "Webster Technique is a specific chiropractic analysis and gentle adjustment method developed for pregnant patients. It analyzes and corrects sacral and pelvic alignment — reducing torsion on the uterine ligaments and creating optimal space for fetal positioning. It's gentle, safe at all stages of pregnancy, and produces consistent relief of pregnancy-related back and pelvic pain.",
            ]}
            image="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Webster Technique prenatal chiropractic Fairfax VA"
            bullets={["Webster Technique for sacropelvic alignment", "Safe from first trimester through 40 weeks", "Round ligament and sciatica relief protocols"]}
          />
          <PillarSection
            tone="dark"
            eyebrow="What prenatal chiropractic addresses"
            title="Common pregnancy complaints we treat in Fairfax."
            intro="These are the presentations our pregnant patients bring to us most often. Each has a specific chiropractic and soft-tissue approach adapted for pregnancy."
            cta={{ label: "Book prenatal consultation", href: "/appointment" }}
            pillars={[
              { title: "Low back & pelvic pain", description: "Lumbar and SI joint pain from increased anterior pelvic tilt and ligamentous laxity — the most common pregnancy complaint and the most responsive to Webster Technique." },
              { title: "Round ligament pain", description: "Sharp, stabbing pain in the lower abdomen or groin from round ligament tension. Gentle myofascial release and sacropelvic correction significantly reduces severity and frequency." },
              { title: "Sciatica in pregnancy", description: "Sciatic nerve compression from piriformis tension or direct fetal pressure — addressed with gentle adjustments, soft-tissue therapy, and safe stretching protocols." },
              { title: "Postnatal recovery", description: "The postpartum period involves its own structural demands — nursing posture, carrying patterns, and hormonal changes continue affecting the spine. We support recovery through all stages." },
            ]}
          />
          <Testimonials />
          <FaqAccordion
            eyebrow="Prenatal patients ask"
            title="What expecting mothers in Fairfax want to know."
            tone="light"
            items={[
              { q: "Is chiropractic care safe during pregnancy?", a: "Yes. Chiropractic care during pregnancy is safe throughout all trimesters when provided by a trained practitioner using pregnancy-adapted techniques. We use specialized positioning (side-lying or with wedge pillows) to avoid pressure on the abdomen, and only use low-force, gentle adjustment techniques. Contraindications to prenatal chiropractic include: placenta previa, ectopic pregnancy, vaginal bleeding, and pre-eclampsia — all of which we screen for at intake." },
              { q: "What is the Webster Technique and why is it recommended in pregnancy?", a: "The Webster Technique is a specific chiropractic analysis and adjustment of the sacrum and pelvis, developed by Dr. Larry Webster for use during pregnancy. It reduces sacroiliac joint dysfunction and balances the tension on the round and broad uterine ligaments. The result is a more symmetrically balanced pelvis — which optimizes space for fetal development and positioning, and reduces pregnancy-related pelvic and back pain." },
              { q: "When during pregnancy should I start chiropractic care?", a: "You can start at any point, including the first trimester. Many patients begin when back or pelvic discomfort starts (typically 12–20 weeks). Starting earlier means you're managing structural changes before they become painful, rather than trying to catch up once significant dysfunction has set in. We see patients through 40 weeks and then transition to postnatal care." },
              { q: "Can prenatal chiropractic help with round ligament pain?", a: "Yes, this is one of our most consistent results. Round ligament pain (sharp, stabbing, groin or lower abdominal pain) is driven by asymmetric tension on the round ligaments — which attach from the uterine horns to the labia. Sacropelvic correction via Webster Technique balances ligament tension and provides significant relief, often within 2–3 sessions." },
              { q: "Do you offer postnatal chiropractic care too?", a: "Absolutely. The postpartum period — especially for breastfeeding mothers — creates new postural demands: prolonged flexed-forward nursing positions, carrying and lifting patterns, and the ongoing effects of relaxin as hormones normalize. We transition prenatal patients seamlessly into postnatal care and adjust the treatment plan for the new structural demands of new parenthood." },
            ]}
          />
          <ImageCta
            eyebrow="Prenatal chiropractic · Fairfax, VA"
            title="Comfortable pregnancy is possible. Let us help."
            body="Roselle Center's Webster Technique certified prenatal chiropractic care has helped hundreds of Fairfax families have more comfortable pregnancies. New prenatal patients welcome — call or book online."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book prenatal consultation", href: "/appointment" }}
            secondaryCta={{ label: "View prenatal chiropractic page", href: "/prenatal-chiropractic" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
