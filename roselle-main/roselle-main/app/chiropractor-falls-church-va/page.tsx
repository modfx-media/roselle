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
import ImageCta from "../components/templates/ImageCta";

export default function ChiropractorFallsChurchVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Chiropractor · Near Falls Church, VA · 20 Minutes via Lee Hwy"
            title="Chiropractor near Falls Church, VA — 20 minutes to integrated chiropractic care."
            subtitle="Falls Church residents find integrated chiropractic, acupuncture, and functional medicine at Roselle Center in Fairfax — just 20 minutes via Lee Highway or I-66. Serving Northern Virginia's active, professional community for over 30 years."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/conditions-treated" },
              { label: "Chiropractor Near Falls Church, VA" },
            ]}
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Chiropractor near Falls Church VA at Roselle Center for Healing in Fairfax"
            primaryCta={{ label: "Book your appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "20 min", label: "From Falls Church via Lee Hwy" },
              { value: "30+", label: "Years of Northern Virginia chiropractic" },
              { value: "3 providers", label: "Chiro, acupuncture & massage on-site" },
              { value: "Same-week", label: "New patient scheduling" },
            ]}
          />

          <FeatureSplit
            eyebrow="Who we see from Falls Church"
            title="Falls Church's urban-suburban health profile."
            body={[
              "Falls Church is an independent city with a dense, walkable urban core and a high proportion of government contractors, lawyers, and healthcare professionals. The area's active lifestyle — cycling on the W&OD Trail, tennis, and commuter walking — combined with intense desk work creates a specific combination of overuse and postural injuries that we see consistently.",
              "Falls Church patients typically present with: cervical spine issues from heavy laptop and hybrid work, lower back pain from long I-66 and GW Pkwy commutes, and sports-related overuse injuries from the active lifestyle that the area supports. Our integrated approach addresses all of these effectively.",
            ]}
            image="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Chiropractic care for Falls Church VA commuters and athletes at Roselle Center"
            bullets={[
              "W&OD Trail overuse injury management",
              "Commuter-pattern cervical and lumbar care",
              "Applied kinesiology for precision diagnosis",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Why Falls Church patients choose us"
            title="What Roselle Center offers that neighborhood chiropractors don't."
            intro="The 20-minute drive from Falls Church to Roselle Center is the investment that separates one-size-fits-all adjustments from genuinely integrated, diagnostic-driven care."
            cta={{ label: "Learn about our approach", href: "/chiropractic-care-fairfax-va" }}
            pillars={[
              {
                title: "What we treat",
                description:
                  "Back pain, neck pain, sciatica, headaches, sports and overuse injuries, auto accident injuries, and chronic health conditions through functional medicine. The full musculoskeletal and integrative health spectrum.",
              },
              {
                title: "Multidisciplinary approach",
                description:
                  "Chiropractic, applied kinesiology, acupuncture, therapeutic massage, and functional medicine coordinated in a single care plan. Your providers communicate — so the left hand always knows what the right hand is doing.",
              },
              {
                title: "Clinical credentials and depth",
                description:
                  "30+ years of Northern Virginia practice. Applied kinesiology certification provides diagnostic precision that standard chiropractic assessment doesn't match. Thermography for functional medicine cases. A referral network built on outcomes.",
              },
              {
                title: "Getting here from Falls Church",
                description:
                  "Take Lee Hwy (Route 29) West from Falls Church toward Fairfax — approximately 20 minutes in normal traffic. Alternative: I-66 West to Fairfax exit. From Falls Church city, Route 7 West to Route 29 intersection also works well. Ample parking. Call (703) 698-7117.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="Falls Church patients ask"
            title="Chiropractic questions from the Falls Church community."
            tone="light"
            items={[
              {
                q: "Is there a good chiropractor near Falls Church that takes insurance?",
                a: "Roselle Center accepts most major insurance plans including BCBS, Aetna, Cigna, UnitedHealthcare, and Medicare. Federal employee plans (FEHB) — common in the Falls Church and Arlington area — broadly cover chiropractic. We verify your specific benefits before your first appointment at no charge. Call (703) 698-7117 with your insurance card information.",
              },
              {
                q: "Can chiropractic help with the kind of back pain you get from long commutes?",
                a: "Yes — and it's one of the most common presentations we treat. Falls Church residents commuting into DC via Metrorail, GW Pkwy, or I-66 sit in compressive, asymmetric postures for 60–90 minutes per day. This loads the lumbar discs, inhibits the deep spinal stabilizers, and creates the anterior pelvic tilt that feeds lower back pain. Chiropractic correction of the resulting joint dysfunction, combined with muscle activation exercises and ergonomic guidance, directly addresses this pattern.",
              },
              {
                q: "I've been told I have degenerative disc disease. Can a chiropractor help?",
                a: "Yes. Degenerative disc disease (DDD) sounds alarming but describes a common aging process — disc water content decreases, disc height reduces, and facet loading increases. DDD is not a reason to avoid chiropractic; it's often a reason to pursue it. Maintaining spinal joint mobility reduces the compensatory loading on degenerating discs, and keeping the surrounding muscles properly activated prevents the accelerated degeneration that follows disuse. We adjust technique for DDD presentations — gentler mobilization over high-velocity manipulation in advanced cases.",
              },
              {
                q: "What's the difference between a sports chiropractor and a regular chiropractor?",
                a: "Sports chiropractors extend their assessment and treatment to extremity joints — ankles, knees, hips, shoulders, elbows, and wrists — in addition to the spine. They use functional movement assessment and muscle testing to identify biomechanical contributors to injury, and they understand return-to-sport loading progressions. At Roselle Center, applied kinesiology allows us to identify inhibited muscles contributing to injury patterns — a diagnostic capability that distinguishes our sports care from standard adjustment protocols.",
              },
              {
                q: "How do I know if chiropractic is right for my specific condition?",
                a: "The best way is to call us at (703) 698-7117 and describe your symptoms. We can tell you in a brief phone consultation whether your presentation is likely to benefit from chiropractic care, whether you'd be better served by another modality first, or whether we'd want to see imaging before committing to a care approach. We don't sell treatment plans to people who aren't good candidates — it wastes everyone's time and erodes trust.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Chiropractic care near Falls Church, VA"
            title="20 minutes from Falls Church. 30+ years of results in Northern Virginia."
            body="The drive from Falls Church to Roselle Center is worth it when the alternative is a generic adjustment from a high-volume clinic. Integrated care, real diagnosis, lasting results."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
