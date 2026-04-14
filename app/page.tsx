import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Conditions from "./components/Conditions";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionMarquee from "./components/SectionMarquee";
import SmoothScroll from "./components/motion/SmoothScroll";

import HealthEducation from "./components/HealthEducation";

export default function Home() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <Hero />
          <About />
          <SectionMarquee />
          <Services />
          <WhyUs />
          <Conditions />
          <SectionMarquee direction={-1} />
          <Testimonials />
          <HealthEducation />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
