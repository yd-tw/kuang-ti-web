import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialLink from "@/components/SocialLink";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/AchievementsSection";
import TabInformation from "@/components/TabInformation";
import Competition from "@/components/Competition";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <TabInformation />
        <Competition />
        <ProjectsSection />
        <SocialLink />
      </div>
      <Footer />
    </main>
  );
}
