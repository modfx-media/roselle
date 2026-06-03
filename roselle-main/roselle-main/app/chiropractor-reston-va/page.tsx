"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import Testimonials from "../components/Testimonials";
import PageHero from "../components/templates/PageHero";
import StatStrip from "../components/templates/StatStrip";
import FeatureSplit from "../components/templates/FeatureSplit";
import PillarSection from "../components/templates/PillarSection";
import FaqAccordion from "../components/templates/FaqAccordion";
import FeatureGrid from "../components/templates/FeatureGrid";
import ImageCta from "../components/templates/ImageCta";

export default function ChiropractorRestonVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Serving Reston, VA · 20 min via Dulles Toll Road"
            title="Chiropractic & holistic care for Reston, VA — one practice, six specialties."
            subtitle="Reston residents have direct access to Northern Virginia's most complete multidisciplinary wellness center — 20 minutes from Reston Town Center via the Dulles Toll Road. No referral needed. New patients welcome."
            crumbs={[{ label: "Home", href: "/" }, { label: "Locations Served", href: "/sitemap" }, { label: "Chiropractor Near Reston, VA" }]}
            image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Chiropractor near Reston VA at Roselle Center for Healing Fairfax"
            primaryCta={{ label: "Book your visit", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "~20 min", label: "From Reston via Dulles Toll Road" },
            { value: "30+", label: "Years treating Northern VA" },
            { value: "6", label: "Specialties under one roof" },
            { value: "4.7★", label: "110 Google reviews" },
          ]} />
          <FeatureSplit
            eyebrow="Why Reston patients choose Roselle Center"
            title="Reston's tech workforce needs more than a standard chiropractic office."
            body={[
              "Reston Town Center is the epicenter of Northern Virginia's technology corridor — Amazon, Google, Microsoft, and dozens of federal contractors have significant footprints here. The resulting patient profile is predictable: prolonged screen exposure, sedentary desk work, high cognitive load, and a daily Dulles Toll Road commute that compounds spinal compression.",
              "Our clinic handles all of it — cervical dysfunction from tech neck, lumbar strain from commuting, stress-related tension headaches, and the fatigue and hormonal disruption that comes with high-pressure careers. We've been treating this exact patient profile in Fairfax County for over 30 years.",
            ]}
            image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Chiropractic care for Reston tech workers at Roselle Center Fairfax VA"
            bullets={["Neck, shoulder, and wrist care for desk workers", "Stress and fatigue protocols via acupuncture", "Flexible scheduling for Reston commuters"]}
          />
          <PillarSection
            tone="dark"
            eyebrow="What we offer Reston patients"
            title="Six specialties. One coordinated team."
            intro="Every Reston patient who walks through our doors gets a care plan that draws from all six of our disciplines — not just whichever one they booked for."
            cta={{ label: "See all services", href: "/services.html" }}
            pillars={[
              { title: "Chiropractic care", description: "Spinal adjustment and joint mobilization for back pain, neck pain, disc issues, and postural dysfunction from prolonged desk work and commuting." },
              { title: "Acupuncture", description: "Pain relief, stress regulation, immune support, and sleep improvement — particularly valuable for Reston's high-stress, high-performance professional population." },
              { title: "Applied kinesiology", description: "Muscle-response testing that identifies neurological imbalances invisible to imaging — guiding more targeted and effective chiropractic interventions." },
              { title: "Functional medicine & thermography", description: "Root-cause investigation for complex chronic conditions: fatigue, hormonal imbalance, allergy, and inflammatory conditions that haven't resolved with conventional care." },
            ]}
          />
          <FeatureGrid
            eyebrow="Conditions we treat"
            title="What Reston patients bring to us most often."
            cols={3}
            cards={[
              { icon: "🔙", title: "Back & Neck Pain", description: "The Dulles Toll Road commute and Reston's desk-intensive work culture produce consistent cervical and lumbar overload. We address both mechanically.", href: "/back-pain" },
              { icon: "⚡", title: "Sciatica", description: "Sciatic nerve compression from disc herniation or piriformis syndrome — treated with chiropractic decompression and soft-tissue therapy.", href: "/sciatica" },
              { icon: "🤕", title: "Tension Headaches", description: "Upper cervical and suboccipital tension from prolonged screen work — among the most common and most treatable conditions in our Reston patient group.", href: "/headaches" },
              { icon: "💻", title: "Repetitive Strain", description: "Wrist, elbow, and shoulder overuse injuries from keyboard and mouse work — applied kinesiology identifies the neurological component that drives recurrence." },
              { icon: "😴", title: "Fatigue & Stress", description: "Adrenal and hormonal dysregulation from sustained high-performance work environments — addressed through acupuncture and clinical nutrition.", href: "/functional-medicine" },
              { icon: "🚗", title: "Auto Accidents", description: "I-267 and Dulles Toll Road accidents are common. We provide injury assessment, treatment, and full insurance documentation for Reston accident victims.", href: "/auto-accidents" },
            ]}
          />
          <Testimonials />
          <FaqAccordion
            eyebrow="Reston patients ask"
            title="What Reston and Dulles Corridor patients want to know."
            tone="light"
            items={[
              { q: "How do I get to Roselle Center from Reston, VA?", a: "From Reston, take the Dulles Toll Road (Route 267) east to I-66 east, then exit onto Lee Highway toward Fairfax. We're at 8500 Executive Park Ave, Suite 300, Fairfax, VA 22031. The drive is approximately 20 minutes in normal traffic. Free parking on site." },
              { q: "Do you offer early morning or evening appointments for Reston commuters?", a: "Yes. We have early morning appointments starting at 7:00 AM Monday, Wednesday, and Friday, and evening appointments until 7:00 PM Tuesday and Thursday. Saturday morning hours are also available (8:00 AM – 1:00 PM). Call (703) 698-7117 or book online to see current availability." },
              { q: "Can a chiropractor help with wrist and elbow pain from keyboard use?", a: "Absolutely. Carpal tunnel syndrome, cubital tunnel syndrome, and lateral epicondylitis (tennis elbow) from repetitive computer use all have chiropractic components. We adjust the wrist, elbow, and cervical spine, use applied kinesiology to identify neurological inhibition patterns, and prescribe corrective exercises. Many Reston tech workers avoid surgery through conservative care with us." },
              { q: "What is the difference between chiropractic and physical therapy for back pain?", a: "Chiropractors diagnose and treat structural and neurological dysfunction in the spine and joints through manual manipulation. Physical therapists focus on movement rehabilitation through exercise. For most back pain presentations, chiropractic produces faster initial pain relief; PT adds strength and movement quality. At Roselle Center, we often integrate both approaches within a single care plan." },
              { q: "Do you accept insurance for Reston patients?", a: "Yes. We accept most major insurance plans including BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, and Medicare — all common plans for Reston tech and federal employees. We verify your benefits before your first appointment. HSA and FSA payment is always accepted." },
            ]}
          />
          <ImageCta
            eyebrow="Reston, VA · 20 minutes away"
            title="Northern Virginia's most complete wellness practice is closer than you think."
            body="Roselle Center for Healing has served the Reston and Herndon corridor for decades. One drive. Six specialties. 30+ years of results. Book your free consultation today."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book online now", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
