"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";
import Contact from "../../components/Contact";


const PROVIDERS = [
  { name: "Softouch Dental Care", href: "https://www.softouchdentalcare.com", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsors_SD.png.webp?562a6046965c2b92d8edc7d7e5de5f34" },
  { name: "Caring For Others (CFO)", href: "https://www.caringforothersltd.org", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsor_cfo.png.webp?f026f108da77ab7a1d0bda7c63f385c4" },
  { name: "Biotics Research Corporation", href: "https://www.bioticsresearch.com/", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsors_Biotics.png.webp?c5ff8e35dbf06800f0268bc71453cc9d" },
  { name: "Leadership to Legacy", href: "https://www.leadershiptolegacy.com/", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x240_80/webmgr/0g/5/2/l2l-logo-v2020-200x100.png.webp?c4114955fc313d436d63f6d4f9eaa5ec" },
  { name: "BrainSpan Laboratories", href: "https://www.brainspan.com/", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x114_80/webmgr/0g/5/2/BrainSpanLogo.png.webp?33eeb0fc0dd3321317a370c2bfdbaa85" },
  { name: "WMAL 105.9 FM", href: "https://www.wmal.com", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsor_wmal.png.webp?2700ac224b1c7e2dd97a465891f53c17" },
  { name: "Standard Process", href: "https://www.standardprocess.com/Home", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsor_SP.png.webp?69747d2677cc25680a396b4a70806e21" },
  { name: "Talk19 Media", href: "https://www.talk19media.com", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsor_T19M.png.webp?9b54041079395ef5ae481bb761e4f454" },
  { name: "Walkabout Health Products", href: "https://www.walkabouthealthproducts.com/", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsors_WA.png.webp?633374720a734e769272cf517e1b90bf" },
  { name: "Q-Link", href: "https://share.shopqlink.com/196.html", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponso_qlink.png.webp?55c15eb74b3534601db18634aa04bce1" },
  { name: "AirTamer", href: "https://rosellecare.com/airtamer", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/airtamer-200-x100.png.webp?54c27c356baa45e23661eb5bf32b2e86" },
  { name: "Miessence Certified Organics", href: "https://www.miessence.com/conkern/en/", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsor_MCO.png.webp?d78d33260144273485499d28ad12b288" },
  { name: "BodyRYZM", href: "https://www.bodyryzm.com/", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsor_bodyryzm.png.webp?6b591433d924a85e6c6199d7fcc50822" },
  { name: "Thermography Center of Fairfax", href: "https://www.thermographycenters.com/", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsor_TCF.png.webp?c996e7511bce58cb2462a02e30e23f46" },
  { name: "Aquasana", href: "https://www.aquasana.com/", img: "https://cdcssl.ibsrv.net/ibimg/smb/400x200_80/webmgr/0g/5/2/DTR_Sponsor_aquasana.png.webp?8842e27d6f8a7bd33742d4906f2e7a11" },
];

export default function PreferredProvidersPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Preferred Providers</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Roselle Center For Healing: Our Preferred Chiropractic Providers" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Partners</p>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Here is a partial list of our preferred providers. Click logo for more information or feel free to contact us if you have any questions.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8 grid grid-cols-3 gap-s4 max-lg:grid-cols-2 max-md:grid-cols-1">
                  {PROVIDERS.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-s6 rounded-xl bg-card-bg transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(42,41,40,0.10)]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.img} alt={p.name} className="max-h-[100px] w-auto object-contain" />
                    </a>
                  ))}
                </div>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Contact Us About Our Providers</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Have questions about our preferred providers? Contact Roselle Center For Healing in Fairfax, VA today.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>


          <Contact />


          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
