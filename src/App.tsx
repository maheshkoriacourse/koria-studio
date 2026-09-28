import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { Work } from "./components/work";
import { Process } from "./components/process";
import { Stats } from "./components/stats";
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { ContactCTA } from "./components/contact-cta";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <Stats />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}