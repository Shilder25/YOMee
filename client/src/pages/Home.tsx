import HeroSection from "@/components/HeroSection";
import MeetSection from "@/components/MeetSection";
import HowToSection from "@/components/HowToSection";
import StorySection from "@/components/StorySection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <HeroSection />
      <SectionDivider topColor="teal" bottomColor="pink" />
      <MeetSection />
      <SectionDivider topColor="pink" bottomColor="teal" />
      <HowToSection />
      <SectionDivider topColor="teal" bottomColor="pink" />
      <StorySection />
      <SectionDivider topColor="pink" bottomColor="teal" />
      <CommunitySection />
      <Footer />
    </div>
  );
}