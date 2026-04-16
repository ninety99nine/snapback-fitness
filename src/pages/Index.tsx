import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import MeetPatloSection from "@/components/sections/MeetPatloSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TransformationSection from "@/components/sections/TransformationSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import StatsBar from "@/components/sections/StatsBar";
import ShopTeaser from "@/components/sections/ShopTeaser";
import EventsPreview from "@/components/sections/EventsPreview";
import InstagramStrip from "@/components/sections/InstagramStrip";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <MeetPatloSection />
      <ServicesOverview />
      <TransformationSection />
      <DifferentiatorsSection />
      <StatsBar />
      <ShopTeaser />
      <EventsPreview />
      <InstagramStrip />
      <LeadMagnetSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
