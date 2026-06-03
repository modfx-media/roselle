"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import ContentBlock from "@/app/components/templates/ContentBlock";
import StatStrip from "@/app/components/templates/StatStrip";
import PillarSection from "@/app/components/templates/PillarSection";
import ChecklistSplit from "@/app/components/templates/ChecklistSplit";
import ImageCta from "@/app/components/templates/ImageCta";

export default function LowerBackPainPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Lower Back Pain · Fairfax, VA"
            title="Finding relief from lower back pain in Fairfax, VA."
            subtitle="Personalized chiropractic care from Dr. Tom Roselle, designed to find lasting relief — not just temporary fixes."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Lower Back Pain" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/man-lower-back-pain.jpg.webp?b51ba65f6ffa89b768063c3dac3003bb"
            imageAlt="Man experiencing lower back pain, highlighting spinal discomfort."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "30+", label: "Years experience" },
              { value: "Personalized", label: "Care plans" },
              { value: "Whole-body", label: "Approach" },
              { value: "5★", label: "Patient rated" },
            ]}
          />

          <FeatureSplit
            eyebrow="Overview"
            title="A common reason patients reach out — and what makes our care different."
            body="Lower back pain is one of the most common reasons people seek care from a chiropractor near you. Whether caused by an injury, poor posture, or a condition like sciatica, this type of pain can interfere with daily life and make even simple activities a challenge. At Roselle Center for Healing in Fairfax, VA, Dr. Tom Roselle and his team provide personalized care to help patients find lasting relief."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/man-lower-back-pain.jpg.webp?b51ba65f6ffa89b768063c3dac3003bb"
            imageAlt="Lower back pain consultation."
          />

          <PillarSection
            tone="dark"
            eyebrow="Understanding"
            title="Understanding Lower Back Pain."
            intro="The lower back is made up of muscles, ligaments, discs, and joints that all work together to support the body. When any of these structures are strained or misaligned, pain and stiffness can develop. Without proper lower back pain treatment, symptoms often worsen, making it difficult to sit, stand, or move comfortably."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Muscles & ligaments", description: "Soft tissues that support the spine and stabilize movement." },
              { title: "Discs", description: "Cushions between vertebrae that absorb daily impact." },
              { title: "Joints", description: "Connection points that allow flexibility and range of motion." },
              { title: "Alignment", description: "Misalignments cause stiffness, pain, and worsening symptoms." },
            ]}
          />

          <ContentBlock
            eyebrow="Causes"
            title="Causes of Lower Back Pain."
            body="Some of the most common causes of lower back discomfort include:"
          >
            <ul className="mt-s4 max-w-[720px] space-y-2 list-disc pl-6 text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.7)" }}>
              <li>Muscle strain or overuse</li>
              <li>Herniated or bulging discs</li>
              <li>Poor posture from sitting too long</li>
              <li>Stress on the spine from injuries or accidents</li>
              <li>Conditions such as sciatica</li>
            </ul>
            <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
              If your pain radiates into the leg or hip, you may benefit from specialized sciatica treatment near you, designed to reduce nerve compression and restore mobility.
            </p>
          </ContentBlock>

          <ContentBlock
            tone="dark"
            eyebrow="Treatment"
            title="Chiropractic Care for Back Pain Relief."
            body="Chiropractic care focuses on correcting spinal alignment to relieve pressure, reduce inflammation, and restore function. Dr. Tom Roselle uses a comprehensive approach that may include adjustments, soft tissue therapy, and lifestyle recommendations. By addressing the root cause, chiropractic care provides effective lower back pain treatment near you that goes beyond temporary symptom relief."
          />

          <ChecklistSplit
            eyebrow="Holistic"
            title="A Holistic Approach to Healing."
            body="At Roselle Center for Healing, patients receive more than standard chiropractic care. The team combines integrative therapies to support healing, reduce stress, and prevent future flare-ups. Whether you need customized sciatica treatment or ongoing support for chronic pain, you'll find comprehensive solutions tailored to your unique needs."
            image="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Patient receiving holistic lower back care."
            items={[
              "Integrative therapies for healing",
              "Stress reduction support",
              "Customized sciatica treatment available",
              "Comprehensive solutions for chronic pain",
            ]}
          />

          <ImageCta
            eyebrow="Take the first step"
            title="Take the first step toward relief."
            body="Don't let lower back pain control your life. If you're searching for a trusted chiropractor near you in Fairfax, VA, Dr. Tom Roselle and the team at Roselle Center for Healing are here to help. Call us today at (703) 698-7117 to schedule your consultation and begin your journey toward lasting relief."
            image="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=70&auto=format&fit=crop"
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
