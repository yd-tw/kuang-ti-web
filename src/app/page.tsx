import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TabInformation from "@/components/TabInformation";
import Contest from "@/components/Contest";
import BlogList from "@/components/BlogList";
import Timeline from "@/components/Timeline";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <HeroSection />
        <AboutSection />
        <Carousel />
        {/* <Timeline /> */}
        <TabInformation />
        <Contest />
        <ProjectsSection />
        <BlogList limit={5} />
      </div>
    </main>
  );
}
