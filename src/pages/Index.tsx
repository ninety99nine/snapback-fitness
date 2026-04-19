import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import MeetPatloSection from "@/components/sections/MeetPatloSection";
import AsSeenInSection from "@/components/sections/AsSeenInSection";
import WhoWeServeSection from "@/components/sections/WhoWeServeSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TransformationSection from "@/components/sections/TransformationSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import StatsBar from "@/components/sections/StatsBar";
import ShopTeaser from "@/components/sections/ShopTeaser";
import ChallengesPreview from "@/components/sections/ChallengesPreview";
import InstagramStrip from "@/components/sections/InstagramStrip";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const timeout = setTimeout(() => {
        document.getElementById(state.scrollTo!)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <MeetPatloSection />
      <AsSeenInSection />
      <WhoWeServeSection />
      <ServicesOverview />
      <TransformationSection />
      <DifferentiatorsSection />
      <StatsBar />
      <ShopTeaser />
      <ChallengesPreview />
      <InstagramStrip />
      <LeadMagnetSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
