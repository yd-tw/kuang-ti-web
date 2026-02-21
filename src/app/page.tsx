import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import TabInformation from "@/components/TabInformation";
import ContestPreview from "@/components/ContestPreview";
import BlogList from "@/components/BlogList";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <HeroSection />
        <AboutSection />
        <Carousel />
        <TabInformation />
        <ContestPreview />
        <ProjectSection />
        <BlogList limit={5} />
      </div>
    </main>
  );
}
