"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import ContentBlock from "../components/templates/ContentBlock";
import FeatureGrid from "../components/templates/FeatureGrid";
import CtaBand from "../components/templates/CtaBand";

export default function EducationLecturesPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Health Education · Fairfax, VA"
            title="Free health education lectures."
            subtitle="Attend a free health education lecture or workshop at the Roselle Center for Healing."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Health Education" },
            ]}
            image="/services/learning.jpg"
            imageAlt="Health education lecture."
            primaryCta={{ label: "Call to register", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Register online", href: "https://www.drtomroselle.com/health-education-class-registration/", external: true }}
          />

          <ContentBlock
            eyebrow="Education"
            title="Free health education lectures."
            body="Attend a free health education lecture at the Roselle Center for Healing. Lectures are free of charge unless otherwise indicated. Registration is required for all lectures and workshops. Please call (703) 698-7117 or register online."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Upcoming Events"
            title="Upcoming lectures & events."
            cols={2}
            cards={[
              {
                title: "Putting Your Best Foot Forward",
                description:
                  "Your foundation matters! Every step you take sends a kinetic chain reaction from your arches all the way to your neck. Learn how to fortify your foundation with Dr. Harlan Browning, DC. Wednesday, April 29 at 6:00 PM. Space is limited — call (703) 698-7117 or register online.",
                href: "https://www.drtomroselle.com/health-education-class-registration/",
                external: true,
              },
              {
                title: "Blooms & Bowls",
                description:
                  'A special and "souper" afternoon dedicated to your health and convenience. Looking to move more easily or eat better without the kitchen stress? Wednesday, May 13 from 12–6 PM. Register or call (703) 698-7117.',
              },
            ]}
          />

          <ContentBlock
            eyebrow="Radio & Podcasts"
            title="Ageless Health® with Dr. Tom Roselle, DC."
            body={[
              "Listen to Ageless Health® with Dr. Tom Roselle, DC live on WMAL 105.9 FM and WMAL.com on Sundays at 12:00 PM ET in Virginia, Maryland, and Washington, D.C. — followed by live stream and podcasts at drtomroselle.com.",
              "Tune in to Ageless Health® with Dr. Tom Roselle, DC on the John Fredericks Media Network Saturday mornings at 7:00 AM.",
              "Webinar Library: Access our library of past health education webinars and video lectures on Vimeo.",
            ]}
          />

          <ContentBlock
            tone="dark"
            eyebrow="Disclaimer"
            title="Educational information only."
            body="Health care information and lectures provided at the Roselle Center for Healing are not intended or implied to be a substitute for professional medical advice, diagnosis, or treatment — for general information and educational purposes only. Always consult your physician prior to changing any current medical directive or prescription."
          />

          <CtaBand
            tone="gold"
            eyebrow="Register today"
            title="Want to attend a health education lecture?"
            body="Contact Roselle Center For Healing in Fairfax, VA to register for upcoming lectures and workshops."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Register online", href: "https://www.drtomroselle.com/health-education-class-registration/", external: true }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
