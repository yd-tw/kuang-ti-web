import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TabInformation from "@/components/TabInformation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <AboutSection />
        <TabInformation />
      </div>
      <Footer />
    </main>
  );
}
