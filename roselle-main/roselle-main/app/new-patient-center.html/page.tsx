"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureSplit from "../components/templates/FeatureSplit";
import FeatureGrid from "../components/templates/FeatureGrid";
import ContentBlock from "../components/templates/ContentBlock";
import StatStrip from "../components/templates/StatStrip";
import CtaBand from "../components/templates/CtaBand";

export default function NewPatientCenterPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="New Patient Experience · Fairfax, VA"
            title="Welcome to the Roselle Center for Healing."
            subtitle="Comfortable, friendly, and ready to serve. As a new patient, you are family — and your wellness journey begins here."
            crumbs={[{ label: "Home", href: "/" }, { label: "New Patient Experience" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x488_80/webmgr/0g/5/2/2024/new%20patient%20exp.png.webp?b9279124930bfdb3279d708f6feb93d2"
            imageAlt="New patient consultation at Roselle Center for Healing."
            primaryCta={{ label: "Schedule appointment", href: "/appointment" }}
            secondaryCta={{ label: "Online forms", href: "/online-forms.html" }}
          />

          <StatStrip
            stats={[
              { value: "90 min", label: "First Visit" },
              { value: "5+ tests", label: "Initial Assessments" },
              { value: "40+ yrs", label: "Of Care" },
              { value: "All ages", label: "Welcome" },
            ]}
          />

          <FeatureSplit
            eyebrow="Welcome"
            title="A warm welcome awaits you."
            body={[
              "We make every effort to make you, our patient, feel comfortable. Prepare to be greeted with a warm smile, relaxing music, and a calming atmosphere. You will find our staff friendly, knowledgeable, and ready to serve.",
              "As a new patient, you will experience teaming with our practitioners and staff to reach your optimal level of health and wellness through total body balance — structurally, chemically, and emotionally — using Chiropractic, Applied Kinesiology, Acupuncture, Massage Therapy and Nutritional Functional Medicine.",
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x488_80/webmgr/0g/5/2/2024/new%20patient%20exp.png.webp?b9279124930bfdb3279d708f6feb93d2"
            imageAlt="Patient consultation."
          />

          <ContentBlock
            tone="dark"
            eyebrow="Getting Started"
            title="Scheduling your new patient appointment."
            body={[
              "To schedule your new patient appointment, which is 90 minutes, simply call our office at (703) 698-7117 or use our online form. Our staff will assist in finding a time with the practitioner of your choice that works well with your schedule.",
              "We will also review new patient fees, deposit requirements, and cancellation policy. New Patient Forms should be completed prior to your appointment arrival — they are available on our website for online completion.",
            ]}
          />

          <FeatureGrid
            eyebrow="First Visit"
            title="What to expect at your first visit."
            intro="Initial assessments designed to give your practitioner a complete picture of your health."
            cols={3}
            cards={[
              { title: "Acugraph", description: "Used to analyze and document the energetic status of your acupuncture meridians — invisible energy pathways used therapeutically for over 5,000 years." },
              { title: "Blood Pressure (3 Positions)", description: "Lying, sitting, and standing blood pressure to assess adrenal and physiological function." },
              { title: "Gate Scan", description: "An assessment of the way you stand, walk, and run. Like the foundation of a house, your feet support everything above them." },
              { title: "pH Testing", description: "A test strip is placed in saliva to determine alkaline or acidity level. An alkaline body is more conducive to health and well-being." },
              { title: "Zinc Testing", description: "Zinc is required for several bodily functions involving energy, metabolism, and immune health. The test reveals whether levels are sufficient." },
              { title: "Examination", description: "Your doctor may conduct a neuro-physical applied kinesiological examination, nutritional assessment or energetic evaluation to find the root cause." },
            ]}
          />

          <FeatureSplit
            tone="light"
            reverse
            eyebrow="Second Visit"
            title="Report of findings."
            body="Your doctor will review the assessment of your condition based on your initial examination, review of records, and lab test results. They'll design and present an individualized projection of care or treatment plan — typically taking you from acute condition through repair and into a wellness program. You'll meet with one of our Patient Advocates to review your financial breakdown and schedule appointments that minimally interrupt your routine."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x567_80/webmgr/0g/5/2/2024/rcfh-desk.png.webp?69ad103845fefe6b7f70b54853f523bb"
            imageAlt="Doctor reviewing report of findings."
          />

          <CtaBand
            tone="gold"
            eyebrow="Begin your journey"
            title="Ready to begin your wellness journey?"
            body="Schedule your 90-minute new patient appointment today. Call us or complete our online forms to get started."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Online forms", href: "/online-forms.html" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
