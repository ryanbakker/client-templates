import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <header className="w-full relative">
        <Navigation />
        <Hero />
      </header>

      <Services />
      <Testimonials />
      <CTA />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}
