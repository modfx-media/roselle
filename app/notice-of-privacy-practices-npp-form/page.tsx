"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function NoticeOfPrivacyPracticesPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero ── */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Notice of Privacy Practices (NPP) Form</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Notice of Privacy Practices (NPP) Form" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Main Content ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="max-w-[820px]">

                {/* Header */}
                <RevealSection>
                  <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s2">The Roselle Center for Healing</h2>
                  <p className="text-fluid-xl text-accent font-medium mb-s6">Your Information. Your Rights. Our Responsibilities.</p>
                  <p className="text-fluid-base leading-relaxed mb-s8" style={{ color: "rgba(42,41,40,0.68)" }}>
                    This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
                  </p>
                </RevealSection>

                {/* Your Rights Summary */}
                <RevealSection delay={0.06}>
                  <h2 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s4">Your Rights</h2>
                  <p className="text-fluid-base leading-relaxed mb-s3" style={{ color: "rgba(42,41,40,0.68)" }}>You have the right to:</p>
                  <ul className="flex flex-col gap-s2 mb-s6">
                    {[
                      "Get a copy of your paper or electronic medical record",
                      "Correct your paper or electronic medical record",
                      "Request confidential communication",
                      "Ask us to limit the information we share",
                      "Get a list of those with whom we've shared your information",
                      "Get a copy of this privacy notice",
                      "Choose someone to act for you",
                      "File a complaint if you believe your privacy rights have been violated",
                    ].map((item) => (
                      <li key={item} className="text-fluid-base leading-relaxed pl-4 relative" style={{ color: "rgba(42,41,40,0.68)" }}>
                        <span className="absolute left-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </RevealSection>

                {/* Your Choices Summary */}
                <RevealSection delay={0.06}>
                  <p className="text-fluid-base leading-relaxed mb-s3 font-medium text-fg">Your Choices</p>
                  <p className="text-fluid-base leading-relaxed mb-s3" style={{ color: "rgba(42,41,40,0.68)" }}>You have some choices in the way that we use and share information as we:</p>
                  <ul className="flex flex-col gap-s2 mb-s6">
                    {[
                      "Tell family and friends about your condition",
                      "Provide disaster relief",
                      "Include you in a hospital directory",
                      "Provide mental health care",
                      "Market our services and sell your information",
                      "Raise funds",
                    ].map((item) => (
                      <li key={item} className="text-fluid-base leading-relaxed pl-4 relative" style={{ color: "rgba(42,41,40,0.68)" }}>
                        <span className="absolute left-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </RevealSection>

                {/* Our Uses and Disclosures Summary */}
                <RevealSection delay={0.06}>
                  <h2 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s4">Our Uses and Disclosures</h2>
                  <p className="text-fluid-base leading-relaxed mb-s3" style={{ color: "rgba(42,41,40,0.68)" }}>We may use and share your information as we:</p>
                  <ul className="flex flex-col gap-s2 mb-s8">
                    {[
                      "Treat you",
                      "Run our organization",
                      "Bill for your services",
                      "Help with public health and safety issues",
                      "Do research",
                      "Comply with the law",
                      "Respond to organ and tissue donation requests",
                      "Work with a medical examiner or funeral director",
                      "Address workers' compensation, law enforcement, and other government requests",
                      "Respond to lawsuits and legal actions",
                    ].map((item) => (
                      <li key={item} className="text-fluid-base leading-relaxed pl-4 relative" style={{ color: "rgba(42,41,40,0.68)" }}>
                        <span className="absolute left-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Detailed Rights ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="max-w-[820px]">
                <RevealSection>
                  <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s3">Your Rights</h2>
                  <p className="text-fluid-base leading-relaxed mb-s8" style={{ color: "rgba(245,244,239,0.55)" }}>
                    When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.
                  </p>
                </RevealSection>

                <div className="flex flex-col gap-s8">
                  {[
                    {
                      title: "Get an electronic or paper copy of your medical record",
                      items: [
                        "You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you. Ask us how to do this.",
                        "We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.",
                      ],
                    },
                    {
                      title: "Ask us to correct your medical record",
                      items: [
                        "You can ask us to correct health information about you that you think is incorrect or incomplete. Ask us how to do this.",
                        "We may say \"no\" to your request, but we'll tell you why in writing within 60 days.",
                      ],
                    },
                    {
                      title: "Request confidential communications",
                      items: [
                        "You can ask us to contact you in a specific way (for example, home or office phone) or to send mail to a different address.",
                        "We will say \"yes\" to all reasonable requests.",
                      ],
                    },
                    {
                      title: "Ask us to limit what we use or share",
                      items: [
                        "You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say \"no\" if it would affect your care.",
                        "If you pay for a service or health care item out-of-pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will say \"yes\" unless a law requires us to share that information.",
                      ],
                    },
                    {
                      title: "Get a list of those with whom we've shared information",
                      items: [
                        "You can ask for a list (accounting) of the times we've shared your health information for six years prior to the date you ask, who we shared it with, and why.",
                        "We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We'll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.",
                      ],
                    },
                    {
                      title: "Get a copy of this privacy notice",
                      items: [
                        "You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically. We will provide you with a paper copy promptly.",
                      ],
                    },
                    {
                      title: "Choose someone to act for you",
                      items: [
                        "If you have given someone medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.",
                        "We will make sure the person has this authority and can act for you before we take any action.",
                      ],
                    },
                    {
                      title: "File a complaint if you feel your rights are violated",
                      items: [
                        "You can complain if you feel we have violated your rights by contacting us using the information on page 1.",
                        "You can file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting www.hhs.gov/ocr/privacy/hipaa/complaints/.",
                        "We will not retaliate against you for filing a complaint.",
                      ],
                    },
                  ].map((section, i) => (
                    <RevealSection key={i} delay={i * 0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug mb-s3">{section.title}</h3>
                        <ul className="flex flex-col gap-s2">
                          {section.items.map((item, j) => (
                            <li key={j} className="text-sm leading-relaxed pl-4 relative" style={{ color: "rgba(245,244,239,0.55)" }}>
                              <span className="absolute left-0">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </RevealSection>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Your Choices Detail ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="max-w-[820px]">
                <RevealSection>
                  <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s4">Your Choices</h2>
                  <p className="text-fluid-base leading-relaxed mb-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                    For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information in the situations described below, talk to us. Tell us what you want us to do, and we will follow your instructions.
                  </p>
                </RevealSection>

                <RevealSection delay={0.06}>
                  <p className="text-fluid-base leading-relaxed mb-s3 font-medium text-fg">In these cases, you have both the right and choice to tell us to:</p>
                  <ul className="flex flex-col gap-s2 mb-s6">
                    {[
                      "Share information with your family, close friends, or others involved in your care",
                      "Share information in a disaster relief situation",
                      "Include your information in a hospital directory",
                    ].map((item) => (
                      <li key={item} className="text-fluid-base leading-relaxed pl-4 relative" style={{ color: "rgba(42,41,40,0.68)" }}>
                        <span className="absolute left-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </RevealSection>

                <RevealSection delay={0.06}>
                  <p className="text-fluid-base leading-relaxed mb-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                    If you are not able to tell us your preference, for example if you are unconscious, we may go ahead and share your information if we believe it is in your best interest. We may also share your information when needed to lessen a serious and imminent threat to health or safety.
                  </p>
                </RevealSection>

                <RevealSection delay={0.06}>
                  <p className="text-fluid-base leading-relaxed mb-s3 font-medium text-fg">In these cases we never share your information unless you give us written permission:</p>
                  <ul className="flex flex-col gap-s2 mb-s6">
                    {[
                      "Marketing purposes",
                      "Sale of your information",
                      "Most sharing of psychotherapy notes",
                    ].map((item) => (
                      <li key={item} className="text-fluid-base leading-relaxed pl-4 relative" style={{ color: "rgba(42,41,40,0.68)" }}>
                        <span className="absolute left-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </RevealSection>

                <RevealSection delay={0.06}>
                  <p className="text-fluid-base leading-relaxed mb-s6 font-medium text-fg">In the case of fundraising:</p>
                  <ul className="flex flex-col gap-s2 mb-s6">
                    <li className="text-fluid-base leading-relaxed pl-4 relative" style={{ color: "rgba(42,41,40,0.68)" }}>
                      <span className="absolute left-0">•</span> We may contact you for fundraising efforts, but you can tell us not to contact you again.
                    </li>
                  </ul>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Our Uses and Disclosures Detail ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="max-w-[820px]">
                <RevealSection>
                  <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s4">Our Uses and Disclosures</h2>
                  <p className="text-fluid-base leading-relaxed mb-s8" style={{ color: "rgba(245,244,239,0.55)" }}>How do we typically use or share your health information? We typically use or share your health information in the following ways.</p>
                </RevealSection>

                <div className="flex flex-col gap-s6">
                  {[
                    { title: "Treat you", desc: "We can use your health information and share it with other professionals who are treating you. Example: A doctor treating you for an injury asks another doctor about your overall health condition." },
                    { title: "Run our organization", desc: "We can use and share your health information to run our practice, improve your care, and contact you when necessary. Example: We use health information about you to manage your treatment and services." },
                    { title: "Bill for your services", desc: "We can use and share your health information to bill and get payment from health plans or other entities. Example: We give information about you to your health insurance plan so it will pay for your services." },
                  ].map((item, i) => (
                    <RevealSection key={i} delay={i * 0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug mb-s2">{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>{item.desc}</p>
                      </div>
                    </RevealSection>
                  ))}
                </div>

                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mt-s10 mb-s4">How else can we use or share your health information?</h3>
                  <p className="text-fluid-base leading-relaxed mb-s6" style={{ color: "rgba(245,244,239,0.55)" }}>
                    We are allowed or required to share your information in other ways – usually in ways that contribute to the public good, such as public health and research. We have to meet many conditions in the law before we can share your information for these purposes. For more information see:{" "}
                    <a href="https://www.hhs.gov/hipaa/for-individuals/guidance-materials-for-consumers/index.html" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 transition-colors duration-200 hover:text-bg">www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html</a>.
                  </p>
                </RevealSection>

                <div className="flex flex-col gap-s6">
                  {[
                    { title: "Help with public health and safety issues", items: ["Preventing disease", "Helping with product recalls", "Reporting adverse reactions to medications", "Reporting suspected abuse, neglect, or domestic violence", "Preventing or reducing a serious threat to anyone's health or safety"] },
                    { title: "Do research", items: ["We can use or share your information for health research."] },
                    { title: "Comply with the law", items: ["We will share information about you if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we're complying with federal privacy law."] },
                    { title: "Respond to organ and tissue donation requests", items: ["We can share health information about you with organ procurement organizations."] },
                    { title: "Work with a medical examiner or funeral director", items: ["We can share health information with a coroner, medical examiner, or funeral director when an individual dies."] },
                    { title: "Address workers' compensation, law enforcement, and other government requests", items: ["For workers' compensation claims", "For law enforcement purposes or with a law enforcement official", "With health oversight agencies for activities authorized by law", "For special government functions such as military, national security, and presidential protective services"] },
                    { title: "Respond to lawsuits and legal actions", items: ["We can share health information about you in response to a court or administrative order, or in response to a subpoena."] },
                  ].map((section, i) => (
                    <RevealSection key={i} delay={i * 0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug mb-s2">{section.title}</h3>
                        <ul className="flex flex-col gap-s1">
                          {section.items.map((item, j) => (
                            <li key={j} className="text-sm leading-relaxed pl-4 relative" style={{ color: "rgba(245,244,239,0.55)" }}>
                              <span className="absolute left-0">•</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </RevealSection>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Our Responsibilities + Changes ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="max-w-[820px]">
                <RevealSection>
                  <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s4">Our Responsibilities</h2>
                  <ul className="flex flex-col gap-s3 mb-s10">
                    {[
                      "We are required by law to maintain the privacy and security of your protected health information.",
                      "We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.",
                      "We must follow the duties and privacy practices described in this notice and give you a copy of it.",
                      "We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.",
                    ].map((item, i) => (
                      <li key={i} className="text-fluid-base leading-relaxed pl-4 relative" style={{ color: "rgba(42,41,40,0.68)" }}>
                        <span className="absolute left-0">•</span> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-fluid-base leading-relaxed mb-s10" style={{ color: "rgba(42,41,40,0.68)" }}>
                    For more information see:{" "}
                    <a href="https://www.hhs.gov/hipaa/for-individuals/notice-privacy-practices/index.html" target="_blank" rel="noopener noreferrer" className="text-fg font-medium underline underline-offset-2 transition-colors duration-200 hover:text-accent">www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html</a>.
                  </p>
                </RevealSection>

                <RevealSection delay={0.06}>
                  <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s4">Changes to the Terms of this Notice</h2>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request, in our office, and on our web site.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg pb-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Questions About Your Privacy?</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Contact Roselle Center For Healing if you have questions about our privacy practices.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours + Location ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Hours of Operation</h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (<div key={h.day} className="flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}><span style={{ color: "rgba(245,244,239,0.45)" }}>{h.day}</span><span className="text-bg font-medium">{h.time}</span></div>))}
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Merrifield Location In Fairfax, VA</h3>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Your Local Chiropractic Clinic</p>
                  <p className="text-fluid-base text-bg font-medium mb-s5">Roselle Center For Healing</p>
                  <div className="flex flex-col gap-s4">
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Address</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>8500 Executive Park Ave STE 300<br />Fairfax, VA 22031</p></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Phone</p><a href="tel:+17036987117" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">(703) 698-7117</a></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Fax</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>(703) 698-5729</p></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Email</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>rosellecare@gmail.com</p></div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
