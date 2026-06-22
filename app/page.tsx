import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import ContactCTA from "@/components/ContactCTA";
import RCSAbout from "@/components/rcs/RCSAbout";
import RCSServices from "@/components/rcs/RCSServices";
import BusinessDivisions from "@/components/rcs/BusinessDivisions";
import RCSWhyChoose from "@/components/rcs/RCSWhyChoose";
import FeaturedProjects from "@/components/rcs/FeaturedProjects";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero - RCS Electricals */}
      <Hero />

      {/* About RCS Electricals */}
      <Reveal>
        <RCSAbout />
      </Reveal>

      {/* Core Services */}
      <Reveal>
        <RCSServices />
      </Reveal>

      {/* Why Choose RCS */}
      <Reveal>
        <RCSWhyChoose />
      </Reveal>

      {/* Business Divisions */}
      <div className="hidden">
        <Reveal>
          <BusinessDivisions />
        </Reveal>
      </div>

      {/* Featured Projects */}
      <Reveal>
        <FeaturedProjects />
      </Reveal>

      {/* Contact Section */}
      <Reveal>
        <ContactCTA />
      </Reveal>

      <Footer />
    </main>
  );
}
