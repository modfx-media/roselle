import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Conditions from "./components/Conditions";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative z-1">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Conditions />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
