"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import CtaBand from "@/app/components/templates/CtaBand";

export default function BackPainFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Patient questions, answered"
            title="Back pain — your questions, answered."
            subtitle="If you have back pain due to an auto accident or a medical condition, the discomfort can limit your mobility and prevent you from completing certain tasks. Before you schedule, take a look at the questions we hear most often."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Where is Your Pain? Conditions Treated", href: "/chronic-pain" },
              { label: "Back Pain", href: "/back-pain" },
              { label: "Back Pain FAQs" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x599_80/webmgr/0g/5/2/backpain2.jpg.webp?5e09f2e65d557a69799049a7fdb7935b"
            imageAlt="Man holding lower back outdoors, illustrating common back pain experiences."
            primaryCta={{ label: "Schedule a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7177", href: "tel:+17036987177" }}
          />

          <FaqAccordion
            title="Everything patients ask us about back pain."
            intro="A quick reference to the questions we hear in the office every week. Don't see yours? Call us — we'll talk it through."
            items={[
              {
                q: "Why is back pain so common?",
                a: "The back is comprised of various bones, joints, muscles, discs, nerves, ligaments, and tendons. These components are involved in every movement of the day. Due to this, they can easily be injured or damaged. Even if you are sitting with poor posture, you may experience back pain.",
              },
              {
                q: "Can a chiropractor really help with back pain?",
                a: "Chiropractic care specializes in the musculoskeletal system. Our chiropractors can provide natural, non-invasive methods that address the causes of upper back pain and lower back pain, such as misalignments, herniated discs, and nerve compression.",
              },
              {
                q: "Can natural methods actually relieve back pain?",
                a: "The natural methods that our chiropractors utilize are designed to treat the source of the pain. For example, if you have back pain due to a misalignment, correcting the misalignment can eliminate your discomfort. Along with that, if the pain is from nerve compression, we can help relieve the compression to help you feel better.",
              },
              {
                q: "How do adjustments help?",
                a: "Adjustments are a fundamental part of chiropractic care. When a misalignment is present, it puts undue pressure on the nerves, muscles, discs, and other spinal column components. As a result, you may experience intense pain and discomfort. The adjustments are used to restore alignment, which relieves the issue causing you pain.",
              },
              {
                q: "Comprehensive back pain treatments — more than just adjustments?",
                a: "While adjustments are commonly used, they are often combined with other treatments to help you heal faster. For example, spinal decompression may be used in conjunction with the adjustments to treat sciatica.",
              },
              {
                q: "How many sessions will I need to feel better?",
                a: "The number of sessions that is needed will depend on what is causing your pain. If you are experiencing lower back pain due to a lifting injury, you may not need as many sessions as someone who has been injured in an auto accident. Additionally, someone with a chronic condition like degenerative disc disease will typically need more appointments than someone who is recovering from an injury. However, most people will begin to feel relief within the first few sessions.",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Schedule today"
            title="Contact us for an appointment today."
            body="If you are experiencing back pain that is not subsiding, let our team at Roselle Center for Healing in Fairfax, VA, help. With the right care, we can ease your symptoms so you can return to your active lifestyle."
            primaryCta={{ label: "Call (703) 698-7177", href: "tel:+17036987177" }}
            secondaryCta={{ label: "Book online", href: "/appointment" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
