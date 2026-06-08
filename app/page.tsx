import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyCard from "@/components/CompanyCard";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import ChairmanMessage from "@/components/ChairmanMessage";
import IndustriesSection from "@/components/IndustriesSection";
import CompanyShowcase from "@/components/CompanyShowcase";
import Vision2035 from "@/components/Vision2035";
import Reveal from "@/components/ui/Reveal";
import GlobalPresence from "@/components/GlobalPresence";
import ChairmanVision from "@/components/ChairmanVision";
import ContactCTA from "@/components/ContactCTA";
// import { companies } from "@/data/companies";

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />
     
   <Reveal>
  <IndustriesSection />
</Reveal>

<Reveal>
  <CompanyShowcase />
</Reveal>

<Reveal>
  <Vision2035 />
</Reveal>

<Reveal>
  <GlobalPresence />
</Reveal>

<Reveal>
  <ChairmanVision />
</Reveal>

<Reveal>
  <ContactCTA />
</Reveal>

      <WhyChooseUs />

      <Footer />

    </main>
  );
}