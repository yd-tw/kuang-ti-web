import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialLink from "@/components/SocialLink";
import AchievementsSection from "@/components/AchievementsSection";
import TabInformation from "@/components/TabInformation";
import Contest from "@/components/Contest";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto mt-24 p-6">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <TabInformation />
        <Contest />
        <ProjectsSection />
        <SocialLink />
      </div>
    </main>
  );
}
