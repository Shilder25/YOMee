import HeroSection from "@/components/HeroSection";
import MeetSection from "@/components/MeetSection";
import HowToSection from "@/components/HowToSection";
import StorySection from "@/components/StorySection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <MeetSection />
      <HowToSection />
      <StorySection />
      <CommunitySection />
      <Footer />
    </div>
  );
}