import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "作品成果",
  description: "這個網站列出我從小時候到現在所建立的大專案",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
