"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import SmoothScroll from "../../components/motion/SmoothScroll";
import PageHero from "../../components/templates/PageHero";
import ContentBlock from "../../components/templates/ContentBlock";
import CtaBand from "../../components/templates/CtaBand";

const SECTIONS = [
  { title: "Chiropractic Directory", links: [["www.Chiropractor-Pages.com", "https://www.chiropractor-pages.com/"]] },
  { title: "Chiropractic Organizations", links: [["www.AmerChiro.org","https://www.amerchiro.org/"],["www.Chiro.org","https://www.chiro.org/"],["www.Chiropractic.org","https://www.chiropractic.org/"],["www.ChiropracticIsSafe.org","https://www.chiropracticissafe.org/"],["www.ChiropracticResearchReview.com","https://www.chiropracticresearchreview.com/"],["www.WorldChiropracticAlliance.com","https://www.worldchiropracticalliance.com/"]] },
  { title: "Wellness Coaching", links: [["www.DiscoverWellnessCoaching.com","https://www.discoverwellnesscoaching.com/"]] },
  { title: "Wellness for Kids", links: [["www.BAM.gov","https://www.bam.gov/"],["www.ChiroPediatrics.com","https://www.chiropediatrics.com/"],["www.ICPA4kids.org","https://www.icpa4kids.org/"],["www.JWTumbles.com","https://www.jwtumbles.com/"],["www.KidsHealth.org","https://www.kidshealth.org/"],["www.My-Gym.com","https://www.my-gym.com/"]] },
  { title: "Exercise & Nutrition", links: [["www.BodyForLife.com","https://www.bodyforlife.com/"],["www.CompassionateCooks.com","https://www.compassionatecooks.com/"],["www.CorePerformance.com","https://www.coreperformance.com/"],["www.Ediets.com","https://www.ediets.com/"],["www.FoodRevolution.org","https://www.foodrevolution.org/"],["www.IFIC.org","https://www.ific.org/"],["www.NANP.org","https://www.nanp.org/"],["www.SparkPeople.com","https://www.sparkpeople.com/"],["www.WestonAPrice.org","https://www.westonaprice.org/"],["www.WHFoods.org","https://www.whfoods.org/"]] },
  { title: "Fitness Centers", links: [["www.24HourFitness.com","https://www.24hourfitness.com/"],["www.BallyFitness.com","https://www.ballyfitness.com/"],["www.Curves.com","https://www.curves.com/"],["www.GoldsGym.com","https://www.goldsgym.com/"]] },
  { title: "Thought & Meditation", links: [["www.Chopra.com","https://www.chopra.com/"],["www.DrWayneDyer.com","https://www.drwaynedyer.com/"],["www.KenWilber.com","https://www.kenwilber.com/"],["www.TM.org","https://www.tm.org/"]] },
  { title: "Life Coach", links: [["www.FindACoach.com","https://www.findacoach.com/"],["www.TheIACC.com","https://www.theiacc.com/"],["www.CoachFederation.org","https://www.coachfederation.org/"]] },
  { title: "Acupuncture", links: [["www.AcuFinder.com","https://www.acufinder.com/"]] },
  { title: "Dentist", links: [["www.1800Dentist.com","https://www.1800dentist.com/"]] },
  { title: "Homeopath", links: [["www.homeopathic.org","https://www.homeopathic.org/"]] },
  { title: "Naturopath", links: [["www.aanmc.org","https://www.aanmc.org/"]] },
  { title: "Pilates", links: [["www.pilates.com","https://www.pilates.com/"],["www.thepilatescenter.com","https://www.thepilatescenter.com/"],["www.pilates-studio.com","https://www.pilates-studio.com/"],["www.powerpilates.com","https://www.powerpilates.com/"]] },
  { title: "Yoga", links: [["www.siddhayoga.com","https://www.siddhayoga.com/"],["www.yogajournal.com","https://www.yogajournal.com/"]] },
];

export default function HealthResourcesPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Resources · Fairfax, VA"
            title="Health resources."
            subtitle="A curated collection of trusted chiropractic, wellness, nutrition, and mindfulness resources online."
            crumbs={[{ label: "Home", href: "/" }, { label: "New Patient Experience", href: "/new-patient-center.html" }, { label: "Health Resources" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x1006_80/webmgr/0g/5/2/health_resources.png.webp?b8e500c32f74dde7ff9c00465b6415d6"
            imageAlt="Health resources."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book a consultation", href: "/appointment" }}
          />

          <ContentBlock
            eyebrow="Curated Collection"
            title="Explore trusted health resources."
            body="The following resources have been assembled to provide you with more chiropractic and wellness care information available on the internet. Browse by category."
          />

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-3 gap-s8 max-md:grid-cols-2 max-sm:grid-cols-1">
                {SECTIONS.map((s) => (
                  <div key={s.title}>
                    <h3 className="text-fluid-xl text-fg font-serif tracking-tight mb-s3">{s.title}</h3>
                    <ul className="space-y-2">
                      {s.links.map(([label, href]) => (
                        <li key={href}><a href={href} target="_blank" rel="noopener noreferrer" className="text-fg/70 hover:text-accent transition-colors text-sm">{label}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CtaBand tone="gold" eyebrow="Get in touch" title="Have questions about your health?" body="Call Roselle Center For Healing to learn more about our chiropractic, nutrition, and wellness services." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
