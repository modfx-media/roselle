"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import SmoothScroll from "../../components/motion/SmoothScroll";
import PageHero from "../../components/templates/PageHero";
import FeatureSplit from "../../components/templates/FeatureSplit";
import ContentBlock from "../../components/templates/ContentBlock";
import FeatureGrid from "../../components/templates/FeatureGrid";
import StatStrip from "../../components/templates/StatStrip";
import PillarSection from "../../components/templates/PillarSection";
import ChecklistSplit from "../../components/templates/ChecklistSplit";
import ImageCta from "../../components/templates/ImageCta";

export default function AppliedKinesiologyPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Applied Kinesiology · Fairfax, VA"
            title="Applied Kinesiology at Roselle Center for Healing."
            subtitle="A specialized assessment that helps restore balance, function, and well-being."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Applied Kinesiology" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x578_80/webmgr/0g/5/2/68950206e498b_AppliedKinesiology.png.webp?fe0223bb81434c67b13f30eca32771ff"
            imageAlt="Applied Kinesiology technique demonstration."
            primaryCta={{ label: "Book an evaluation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Holistic", label: "Approach" },
              { value: "Hands-on", label: "Method" },
              { value: "Personalized", label: "Care" },
              { value: "Whole-body", label: "Balance" },
            ]}
          />

          <FeatureSplit
            eyebrow="Holistic Assessment"
            title="Discover the benefits of kinesiology."
            body="When it comes to understanding how the body works and finding natural solutions for pain and stress, kinesiology is a powerful tool. At Roselle Center for Healing, Dr. Tom Roselle and his team offer specialized care, including Applied Kinesiology, to help patients achieve balance, restore function, and improve overall well-being."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x578_80/webmgr/0g/5/2/68950206e498b_AppliedKinesiology.png.webp?fe0223bb81434c67b13f30eca32771ff"
            imageAlt="Kinesiology evaluation."
          />

          <PillarSection
            tone="dark"
            eyebrow="About"
            title="What is kinesiology?"
            intro="Kinesiology is the study of human movement and how muscles, joints, and the nervous system work together. In chiropractic care, it goes beyond anatomy to assess how the body responds to stress, injuries, or imbalances — offering a unique way to identify underlying issues that may not show up in standard medical tests."
            cta={{ label: "Book an evaluation", href: "/appointment" }}
            pillars={[
              { title: "Movement science", description: "The study of how muscles, joints, and the nervous system function together." },
              { title: "Beyond anatomy", description: "Assesses how your body responds to stress, injury, and imbalances." },
              { title: "Hidden issues", description: "Surfaces underlying problems that standard tests often miss." },
              { title: "Whole-body lens", description: "A unique perspective that informs every adjustment and recommendation." },
            ]}
          />

          <ChecklistSplit
            eyebrow="How It Works"
            title="How Applied Kinesiology works."
            body="Applied Kinesiology is a hands-on method used to evaluate muscle function and its relationship to the body's systems. Through gentle muscle testing, a chiropractor can detect imbalances that may be contributing to pain, fatigue, or other health concerns."
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Chiropractor performing a hands-on muscle assessment."
            items={[
              "Hands-on, gentle muscle testing",
              "Detects imbalances behind pain and fatigue",
              "Personalized care plans built around your results",
              "Adjustments, nutrition, and kinesiology combined",
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Key Benefits"
            title="Benefits of kinesiology therapy."
            intro="Patients turn to kinesiology therapy for a wide range of reasons:"
            cols={2}
            cards={[
              { title: "Chronic pain relief", description: "Relief from chronic pain and muscle tension." },
              { title: "Posture & flexibility", description: "Improved posture and flexibility for daily comfort." },
              { title: "Injury recovery", description: "Support for injury recovery and rebuilding strength." },
              { title: "Stress management", description: "Better stress management and nervous system balance." },
              { title: "Energy & wellness", description: "Enhanced overall energy and whole-body wellness." },
            ]}
          />

          <ContentBlock
            eyebrow="Why Us"
            title="Why choose Roselle Center for Healing?"
            body="Dr. Tom Roselle and his team take time to understand each patient's unique needs. With a blend of chiropractic techniques and applied kinesiology, they help restore balance and empower patients to take charge of their health — proven solutions in a supportive environment."
          />

          <ImageCta
            eyebrow="Take the first step"
            title="Take the first step toward better health."
            body="Whether you're struggling with discomfort, recovering from an injury, or simply want to feel stronger and more balanced, kinesiology may be the key."
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
