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
import ChecklistSplit from "../components/templates/ChecklistSplit";
import FaqAccordion from "../components/templates/FaqAccordion";
import ImageCta from "../components/templates/ImageCta";

export default function ChiropractorBurkeVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Serving Burke & Burke Centre, VA"
            title="Holistic chiropractic care for Burke, VA families."
            subtitle="Roselle Center for Healing is the closest multidisciplinary wellness center to Burke — offering chiropractic, acupuncture, massage therapy, applied kinesiology, and functional medicine in one practice."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Locations Served", href: "/sitemap" },
              { label: "Chiropractor Near Burke, VA" },
            ]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Chiropractic wellness care serving Burke and Burke Centre Virginia"
            primaryCta={{ label: "Schedule your visit", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "~12 min", label: "From Burke Centre via Braddock Rd" },
              { value: "30+", label: "Years in Fairfax County" },
              { value: "Drug-free", label: "Approach to pain relief" },
              { value: "4.7★", label: "Patient-rated on Google" },
            ]}
          />

          <FeatureSplit
            eyebrow="Whole-family care"
            title="One practice. Every age. Every condition."
            body={[
              "Burke families deserve care that grows with them — pediatric chiropractic for student athletes at Lake Braddock, prenatal care for expectant mothers, and chronic pain management for professionals commuting to the Pentagon or Amazon HQ2 in Crystal City.",
              "Our clinic at 8500 Executive Park Ave, Fairfax is easily accessible from Burke via Braddock Road or Rolling Road, with ample parking. We've been a Fairfax County institution since the 1990s, and we're taking new patients.",
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/450x600_80/webmgr/0g/5/2/2024/rtr-bio-photo-2016.jpg.webp?60de3fe80a9047a9c27cf25f1300a844"
            imageAlt="Dr. Tom Roselle DC treating patients from Burke and surrounding Fairfax County communities"
            bullets={[
              "Pediatric through senior care — all ages welcome",
              "Free 20-minute new patient consultation",
              "Accepts BlueCross, Aetna, Cigna, UnitedHealthcare, Medicare",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Why Burke residents choose us"
            title="What makes Roselle Center different."
            intro="Burke sits at the intersection of several major Fairfax County commuting corridors — Braddock Road, Rolling Road, I-495. The physical demands of that daily grind compound over time. We address what's driving your pain, not just where it hurts."
            cta={{ label: "Meet our team", href: "/about-us/meet-the-doctors---therapists.html" }}
            pillars={[
              {
                title: "Root-cause diagnosis",
                description:
                  "Every new patient undergoes a comprehensive intake assessment including orthopedic and neurological testing to identify what's actually causing your symptoms.",
              },
              {
                title: "Integrated care plans",
                description:
                  "Your chiropractor, acupuncturist, and massage therapist coordinate directly. No duplicated effort, no conflicting advice — one unified plan.",
              },
              {
                title: "Dr. Roselle's 30+ year record",
                description:
                  "Facility Director Dr. Tom Roselle, DC (PAK, PAc, DCCN, DCBCN) has treated thousands of Fairfax County residents with a reputation built on results, not volume.",
              },
              {
                title: "Education-first philosophy",
                description:
                  "We explain what we find and why we recommend each treatment. Informed patients make better decisions and heal faster.",
              },
            ]}
          />

          <ChecklistSplit
            eyebrow="Conditions we treat"
            title="What Burke patients bring to us most often."
            body="Burke's demographics — families, federal employees, contractors, veterans — present a predictable cluster of musculoskeletal and wellness concerns. We've refined our protocols around exactly this patient profile."
            image="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Burke VA patient receiving chiropractic treatment at Roselle Center"
            tone="light"
            items={[
              "Lower back pain from desk work and commuting",
              "Neck pain and tension headaches",
              "Sciatica and herniated discs",
              "Auto accident injuries and whiplash",
              "Sports injuries (shoulder, knee, ankle)",
              "Prenatal and postnatal care",
              "Chronic fatigue, stress, and immune support",
              "Allergies and sinus conditions via acupuncture",
            ]}
          />

          <Testimonials />

          <FaqAccordion
            eyebrow="Burke patients ask"
            title="Questions we hear from Burke and Burke Centre residents."
            tone="dark"
            items={[
              {
                q: "How do I get to Roselle Center from Burke, VA?",
                a: "From Burke Centre, take Braddock Road west to Rolling Road, then head north toward Fairfax. We're at 8500 Executive Park Ave, Suite 300, off Lee Highway. The drive is approximately 12 minutes in normal traffic. Google Maps directions: search 'Roselle Center for Healing Fairfax VA'.",
              },
              {
                q: "Can a chiropractor help with rotator cuff issues?",
                a: [
                  "Yes. Chiropractors can treat rotator cuff problems through shoulder joint manipulation, soft-tissue mobilization, and applied kinesiology to restore normal movement patterns and reduce impingement.",
                  "We differentiate between rotator cuff tendinopathy (treatable conservatively), partial tears (manageable with integrated care), and full-thickness tears (typically requiring surgical referral). Our assessment will tell you which category you're in and what the realistic treatment path looks like.",
                ],
              },
              {
                q: "Is holistic medicine covered by insurance?",
                a: "Chiropractic care is covered by most major health insurance plans, including Medicare and Medicaid. Acupuncture coverage varies by plan — many BlueCross BlueShield, Aetna, and Cigna plans now include acupuncture benefits, especially for chronic pain. Massage therapy is often covered when prescribed for a medical condition. Our billing team verifies your specific benefits before your first appointment.",
              },
              {
                q: "What is the difference between a holistic doctor and a naturopathic doctor?",
                a: "A holistic doctor (like a chiropractic physician with integrative training) works within evidence-based clinical frameworks while addressing the whole person — physical, nutritional, and lifestyle factors. A naturopathic doctor holds a ND degree and may prescribe botanical medicines and other natural therapies. Both are valuable; at Roselle Center our team's integrative approach draws from chiropractic, traditional Chinese medicine, applied kinesiology, and functional nutrition.",
              },
              {
                q: "Do you offer same-week appointments for Burke residents?",
                a: "Yes. We typically have same-week availability, and in many cases same-day appointments for acute conditions. Call (703) 698-7117 or use our online booking system at rosellecare.com/appointment.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Burke families welcome"
            title="Your Burke-area chiropractic team is ready."
            body="From student athletes to seniors, from new moms to federal employees — Roselle Center for Healing has treated every stage of life in Fairfax County. We're accepting new patients from Burke, Burke Centre, and the surrounding area."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book online", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
