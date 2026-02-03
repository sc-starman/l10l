import Navbar from "@/components/lucky10/Navbar";
import HeroSection from "@/components/lucky10/HeroSection";
import RewardsSection from "@/components/lucky10/RewardsSection";
import FeaturesSection from "@/components/lucky10/FeaturesSection";
import WinnersSection from "@/components/lucky10/WinnersSection";
import HowItWorksSection from "@/components/lucky10/HowItWorksSection";
import Footer from "@/components/lucky10/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <RewardsSection />
        <FeaturesSection />
        <WinnersSection />
        <HowItWorksSection />
        {/* CommunitySection hidden for now - uncomment when needed */}
        {/* <CommunitySection /> */}
      </main>
      <Footer />
    </div>
  );
}
