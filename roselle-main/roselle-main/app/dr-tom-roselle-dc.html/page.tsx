"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import StatStrip from "@/app/components/templates/StatStrip";
import CtaBand from "@/app/components/templates/CtaBand";

export default function DrTomRosellePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Meet our founder · Fairfax, VA"
            title="Dr. Tom Roselle, DC."
            subtitle="Integrative health & wellness expert, author, talk-show host, and Chairman of the International College of Applied Kinesiology."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Dr. Tom Roselle, DC" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x1280_80/webmgr/0g/5/2/dr-tom-roselle.jpg.webp?fa178234dda07451880b4bb658b158fe"
            imageAlt="Dr. Tom Roselle, DC."
            primaryCta={{ label: "Schedule an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Email Dr. Roselle", href: "/contact-staff-member.html" }}
          />

          <StatStrip
            stats={[
              { value: "Since 1977", label: "Doctor of Chiropractic" },
              { value: "Since 1983", label: "Radio Talk-Show Host" },
              { value: "Emmy®", label: "Nominated" },
              { value: "Chairman", label: "ICAK" },
            ]}
          />

          <ContentBlock
            eyebrow="Background"
            title="Decades of integrative healthcare experience."
            body="In 1977, Dr. Tom Roselle DC, PAK, PAc, DCCN, DCBCN received a Doctor of Chiropractic Degree from the National College of Chiropractic in Lombard, Illinois — and his certifications to practice acupuncture and nutrition in New York and Virginia. He has served on the Boards of Directors of the Northern Virginia Chiropractic Society and New York State Chiropractic Association and held multiple local and state offices."
          />

          <ContentBlock
            tone="dark"
            eyebrow="Radio & Media"
            title="Dr. Tom Roselle Live!®"
            body={[
              "Since 1983, Dr. Roselle has hosted a radio talk show — Dr. Tom Roselle Live!® — providing listeners with the latest information on integrative, holistic, and wellness healthcare methods. He also hosts an informative podcast and livestream titled Ageless Health® with Dr. Tom Roselle, DC.",
              "Dr. Roselle is the Founder of Caring For Others Ltd, a charity that provides alternative healthcare services and education for those in need.",
            ]}
          />

          <ContentBlock
            eyebrow="Full Biography"
            title="Author, Chairman, and integrative health expert."
            body="Dr. Tom Roselle, DC, PAK, PAc, DCCN, DCBCN is an integrative health & wellness expert, author, talk-show host, practicing health care professional, facility director, philanthropist, and Chairman of the International College of Applied Kinesiology. He is well known for his mid-Atlantic radio talk show, his acclaimed self-health book Ageless Health®: Health Is A Do-It-To-Yourself Program, and his twice Emmy®-nominated television broadcast Ageless Health® The Special."
          />

          <CtaBand
            tone="gold"
            eyebrow="Schedule"
            title="Schedule your appointment."
            body="Contact Dr. Tom Roselle and the team at Roselle Center For Healing in Fairfax, VA to schedule your consultation today."
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
