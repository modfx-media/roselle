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

export default function ChiropractorSpringfieldVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Chiropractor · Near Springfield, VA · 15 Minutes via I-495"
            title="Chiropractor near Springfield, VA — drug-free pain relief 15 minutes away."
            subtitle="Springfield residents find integrated chiropractic, acupuncture, and functional medicine at Roselle Center in Fairfax — just 15 minutes via I-495 or Braddock Road. Serving Southern Fairfax County for over 30 years."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/conditions-treated" },
              { label: "Chiropractor Near Springfield, VA" },
            ]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Chiropractor near Springfield VA at Roselle Center for Healing in Fairfax"
            primaryCta={{ label: "Book your appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "15 min", label: "From Springfield via I-495 or Braddock Rd" },
              { value: "30+", label: "Years of Southern Fairfax chiropractic" },
              { value: "Integrated", label: "Chiro, acupuncture & functional medicine" },
              { value: "Same-week", label: "New patient appointments" },
            ]}
          />

          <FeatureSplit
            eyebrow="What Springfield patients deal with"
            title="The Springfield Interchange and its impact on the spine."
            body={[
              "Springfield is one of the highest-traffic interchange areas in Northern Virginia — I-95, I-395, I-495, and the Fairfax County Pkwy all converge here. Extended commuting in stop-and-go traffic, combined with the significant military and federal civilian workforce that calls Springfield home, produces the predictable pattern of lumbar and cervical strain we see from this area.",
              "Springfield also has a younger, active demographic with military families and youth athletes. We see a significant portion of active duty and veteran patients from the Fort Belvoir and military contractor population — a group that benefits enormously from drug-free musculoskeletal care.",
            ]}
            image="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Chiropractic care for Springfield VA patients including military families at Roselle Center"
            bullets={[
              "Tricare and VA-coordinated care for military patients",
              "Auto accident injuries from I-95 and I-495 corridors",
              "Sports injury care for Fairfax County's active families",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Why Springfield patients choose Roselle Center"
            title="What sets our practice apart for the Springfield community."
            intro="The 15-minute drive from Springfield to Fairfax gives access to a depth of integrative care that a neighborhood high-volume chiro clinic simply can't match."
            cta={{ label: "Learn about our clinical approach", href: "/chiropractic-care-fairfax-va" }}
            pillars={[
              {
                title: "What we treat",
                description:
                  "Back and neck pain, sciatica, sports injuries, auto accident injuries, and chronic health conditions. Our practice covers the full musculoskeletal spectrum plus functional medicine for systemic health conditions.",
              },
              {
                title: "Multidisciplinary approach",
                description:
                  "Chiropractic with applied kinesiology, acupuncture, therapeutic massage, and functional medicine — coordinated as one team. For military patients accustomed to team-based care, this model is familiar and effective.",
              },
              {
                title: "Clinical experience and credentials",
                description:
                  "30+ years in Northern Virginia. Applied kinesiology certification. Thermographic imaging for functional medicine cases. A clinical reputation built on outcomes rather than advertising, and longstanding referral relationships with area specialists.",
              },
              {
                title: "Getting here from Springfield",
                description:
                  "Take I-495 North to I-66 West, then exit to Fairfax — approximately 15 minutes. Alternatively, take Braddock Rd West from Springfield directly to Fairfax. From the Springfield Metro area, the Route 1 / Backlick Rd corridor heading northwest also connects efficiently. Call (703) 698-7117 for specific directions.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="Springfield patients ask"
            title="Chiropractic questions from Springfield and South Fairfax."
            tone="light"
            items={[
              {
                q: "Can a chiropractor prescribe prednisone or other medications?",
                a: "No — chiropractors are not licensed to prescribe medications in Virginia or any US state. Chiropractic is a drug-free profession by philosophy and licensure. For patients who require anti-inflammatory medication concurrent with chiropractic care, we coordinate with your primary care physician. In our clinical experience, the need for medication often decreases as chiropractic care reduces the underlying inflammation and joint dysfunction driving the pain.",
              },
              {
                q: "What are the red flags that mean I need a doctor, not a chiropractor?",
                a: [
                  "Red flags that warrant immediate medical evaluation over chiropractic include: back or neck pain with loss of bladder or bowel control (possible cauda equina syndrome — a surgical emergency); progressive leg or arm weakness rather than pain; back pain with unexplained fever, night sweats, or unintended weight loss (possible systemic pathology); severe pain following significant trauma; and back pain in patients with a history of cancer.",
                  "These are also the red flags we screen for at every intake. If any are present, we don't treat — we refer. Being honest about when chiropractic is not the right next step is fundamental to ethical practice.",
                ],
              },
              {
                q: "Why do some doctors discourage chiropractic care?",
                a: "Some physicians discourage chiropractic based on outdated perceptions (primarily regarding cervical manipulation risk, which when properly assessed is extremely low) and training that didn't include evidence-based chiropractic outcomes. The current evidence — including guidelines from the American College of Physicians, the Joint Commission, and the VA — recommends chiropractic as a first-line conservative treatment for back and neck pain. Most MDs who have seen their patients improve with chiropractic become comfortable referrers.",
              },
              {
                q: "Does chiropractic help with blood flow or circulation?",
                a: "Chiropractic adjustment has documented effects on autonomic nervous system regulation — specifically, influencing sympathetic tone and peripheral vasomotor activity. Some studies show improvements in cervical artery blood flow following upper cervical adjustments. Applied kinesiology protocols specifically target organ-system regulation through the spine-organ reflex arcs. These are not the primary reasons most patients seek chiropractic care, but they are real physiological effects of spinal manipulation.",
              },
              {
                q: "Does Roselle Center accept Tricare for military families in Springfield?",
                a: "Yes. We accept Tricare for eligible active duty, dependents, and retirees. Tricare covers chiropractic care at authorized providers. The large military family population in the Springfield / Fort Belvoir corridor is one we serve regularly. Call (703) 698-7117 with your Tricare beneficiary information and we'll confirm coverage details before your first appointment.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Chiropractor near Springfield, VA"
            title="Springfield and South Fairfax County: Roselle Center is 15 minutes away."
            body="Drug-free chiropractic, acupuncture, and functional medicine for Springfield's active families, military community, and working professionals. Same-week appointments available. Call (703) 698-7117."
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
