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

export default function ChiropractorCentrevilleVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Chiropractor · Near Centreville, VA · 18 Minutes Away"
            title="Chiropractor near Centreville, VA — 18 minutes to integrated pain relief."
            subtitle="Centreville residents with back pain, neck pain, sciatica, or sports injuries find genuine integrative chiropractic care at Roselle Center in Fairfax — 18 minutes via Route 66 or Centreville Rd. Serving Western Fairfax County for over 30 years."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/conditions-treated" },
              { label: "Chiropractor Near Centreville, VA" },
            ]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Chiropractor near Centreville VA at Roselle Center for Healing in Fairfax"
            primaryCta={{ label: "Book your appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "18 min", label: "From Centreville via I-66 or Centreville Rd" },
              { value: "30+", label: "Years serving Western Fairfax County" },
              { value: "Drug-free", label: "Chiropractic and integrative care" },
              { value: "Same-week", label: "New patient appointments" },
            ]}
          />

          <FeatureSplit
            eyebrow="Centreville's health profile"
            title="Young families, long commutes, and active recreation."
            body={[
              "Centreville is one of Fairfax County's largest and most family-oriented communities — with young families, active children, and a significant commuter population facing I-66 and Route 29 traffic daily. The combination of youth sports injuries from Centreville's extensive rec leagues, auto accident injuries from the Route 29 and I-66 corridor, and commuter-driven spinal conditions produces the exact range of presentations our practice is equipped to address.",
              "Centreville also has one of the higher densities of Fairfax County's military and government contractor families — populations that strongly prefer drug-free care and respond well to the integrated approach we offer.",
            ]}
            image="https://images.unsplash.com/photo-1559757175-7cb036e0e749?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Chiropractic care for Centreville VA families and athletes at Roselle Center"
            bullets={[
              "Youth sports injury care for Centreville's active families",
              "I-66 corridor auto accident injury treatment",
              "Commuter-pattern back and neck pain management",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Why Centreville patients choose Roselle Center"
            title="Integrated care that Centreville's community trusts."
            intro="The 18-minute drive from Centreville to Fairfax accesses clinical depth that standard neighborhood chiropractic cannot provide. Here's what makes the difference."
            cta={{ label: "See all conditions we treat", href: "/conditions-treated" }}
            pillars={[
              {
                title: "What we treat",
                description:
                  "Back and neck pain, sciatica, headaches, sports and youth injuries, auto accident injuries, and systemic health conditions through functional medicine and acupuncture. Complete musculoskeletal and integrative health care.",
              },
              {
                title: "Multidisciplinary approach",
                description:
                  "Chiropractic with applied kinesiology, acupuncture, therapeutic massage, and functional medicine — all coordinated in a single care plan. For Centreville families who need multiple family members addressed, our practice handles diverse age groups and conditions.",
              },
              {
                title: "Clinical credentials",
                description:
                  "30+ years of Northern Virginia practice. Applied kinesiology certification for precision diagnosis. Thermographic imaging capability. A clinical track record built on referral relationships with Northern Virginia's medical community.",
              },
              {
                title: "Getting here from Centreville",
                description:
                  "Take I-66 East from Centreville to the Fairfax exit, or take Centreville Rd (Route 657) south toward Fairfax — approximately 18 minutes in normal traffic. Route 28 South to Route 29 West also works well. Call (703) 698-7117 for specific directions from your address.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="Centreville patients ask"
            title="Common questions from Centreville and Western Fairfax County."
            tone="light"
            items={[
              {
                q: "My child plays travel soccer and has been having recurring ankle sprains. Can a chiropractor help?",
                a: "Yes. Recurring ankle sprains indicate residual ankle joint dysfunction — specifically, reduced talar mobility following the initial sprain that increases susceptibility to re-injury. Chiropractic manipulation of the talocrural and subtalar joints restores normal joint mechanics, and applied kinesiology identifies inhibited peroneals and hip stabilizers that are contributing to ankle instability. Combined with proprioceptive rehabilitation, this approach significantly reduces re-sprain risk. We treat youth athletes from Centreville's rec league and travel programs regularly.",
              },
              {
                q: "I was in an accident on I-66. How soon should I come in?",
                a: "Within 72 hours if possible — ideally within 24 hours. The inflammatory cascade peaks 24–48 hours post-accident, and early intervention reduces chronic scar tissue formation and speeds overall recovery. It also creates a contemporaneous medical record that supports your insurance claim. Virginia's at-fault system means your insurance documentation is important from day one. We offer same-week (often same-day for acute injuries) appointments for accident patients. Call (703) 698-7117.",
              },
              {
                q: "Does Roselle Center treat children and teenagers?",
                a: "Yes. We adapt our techniques for pediatric and adolescent patients: lower-force adjustments, shorter session durations, and age-appropriate communication about what's being done and why. Common pediatric presentations we address include: sports injuries, postural problems from heavy school backpacks, scoliosis screening and monitoring, recurring headaches, and growing pains that actually reflect treatable musculoskeletal dysfunction.",
              },
              {
                q: "Can chiropractic help with numbness and tingling in my hands?",
                a: "Numbness and tingling in the hands can originate from the cervical spine (nerve root compression at C6-C8), the thoracic outlet (brachial plexus compression between the collarbone and first rib), the elbow (ulnar nerve), or the wrist (carpal tunnel). Our examination differentiates these sources using nerve tension tests, Adson's maneuver, and dermatomal pattern assessment. The most common source in desk workers — cervical nerve root compression — responds directly to chiropractic care. Thoracic outlet syndrome responds to specific rib and clavicle adjustment combined with scalene release. We treat the source, not the symptom.",
              },
              {
                q: "Is the drive from Centreville to Roselle Center worth it compared to local options?",
                a: "That's a fair question, and we'll answer it honestly: for simple acute back or neck pain, a closer chiro office may serve you adequately. For complex, recurring, or multiple-system presentations — which is most of what we see — the integration of chiropractic, AK, acupuncture, and functional medicine in a coordinated plan produces outcomes that single-modality neighborhood offices can't match. Centreville patients who've tried other providers before coming to us consistently say they wish they'd made the drive sooner.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Chiropractor near Centreville, VA"
            title="Serving Centreville families and professionals from Fairfax — 18 minutes away."
            body="Integrated chiropractic, acupuncture, and wellness care for Centreville's active community. From youth sports injuries to commuter back pain — 30+ years of drug-free results. Same-week appointments available."
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=70&auto=format&fit=crop"
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
