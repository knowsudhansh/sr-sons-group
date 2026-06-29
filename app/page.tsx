import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import ContactCTA from "@/components/ContactCTA";
import RCSAbout from "@/components/rcs/RCSAbout";
import RCSServices from "@/components/rcs/RCSServices";
import FeaturedProductsPreview from "@/components/rcs/FeaturedProductsPreview";
import ShowroomSection from "@/components/rcs/ShowroomSection";
import BusinessDivisions from "@/components/rcs/BusinessDivisions";
import RCSWhyChoose from "@/components/rcs/RCSWhyChoose";
import FeaturedProjects from "@/components/rcs/FeaturedProjects";
import FounderProfile from "@/components/FounderProfile";
import BrandCollaboration from "@/components/BrandCollaboration";

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

      {/* Featured Products */}
      <Reveal>
        <FeaturedProductsPreview />
      </Reveal>

      {/* Showroom Gallery */}
      <Reveal>
        <ShowroomSection />
      </Reveal>

      {/* Featured Projects */}
      <Reveal>
        <FeaturedProjects />
      </Reveal>

      {/* Why Choose RCS */}
      <Reveal>
        <RCSWhyChoose />
      </Reveal>

      {/* Founder Profile */}
      <Reveal>
        <FounderProfile />
      </Reveal>

      {/* Business Divisions */}
      <div className="hidden">
        <Reveal>
          <BusinessDivisions />
        </Reveal>
      </div>

      {/* Contact Section */}
      <Reveal>
        <ContactCTA />
      </Reveal>

      {/* Brand Collaboration */}
      <Reveal>
        <BrandCollaboration />
      </Reveal>

      <Footer />
    </main>
  );
}
