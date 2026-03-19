import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ForWhomSection from "@/components/landing/ForWhomSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CapabilitiesSection from "@/components/landing/CapabilitiesSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import AIControlSection from "@/components/landing/AIControlSection";
import ScenariosSection from "@/components/landing/ScenariosSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import ResultsSection from "@/components/landing/ResultsSection";
import DecisionBlock from "@/components/landing/DecisionBlock";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ForWhomSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <ComparisonSection />
      <AIControlSection />
      <DecisionBlock />
      <ScenariosSection />
      <IntegrationsSection />
      <ResultsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
