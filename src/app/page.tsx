import Navbar from "@/components/lucky10/Navbar";
import HeroSection from "@/components/lucky10/HeroSection";
import RewardsSection from "@/components/lucky10/RewardsSection";
import ReferralSection from "@/components/lucky10/ReferralSection";
import FeaturesSection from "@/components/lucky10/FeaturesSection";
import HowItWorksSection from "@/components/lucky10/HowItWorksSection";
import Footer from "@/components/lucky10/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <RewardsSection />
        <ReferralSection />
        <FeaturesSection />
        {/* WinnersSection hidden for now - no winners yet */}
        <HowItWorksSection />
        {/* CommunitySection hidden for now - uncomment when needed */}
        {/* <CommunitySection /> */}
      </main>
      <Footer />
    </div>
  );
}
