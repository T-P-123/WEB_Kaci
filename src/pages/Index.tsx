import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrainerSection from "@/components/TrainerSection";
import LessonsSection from "@/components/LessonsSection";
import IndividualTraining from "@/components/IndividualTraining";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LessonsSection />
      <TrainerSection />
      <IndividualTraining />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;