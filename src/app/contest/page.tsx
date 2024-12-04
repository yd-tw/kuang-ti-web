import Navbar from "@/components/Navbar";
import Competition from "@/components/Competition";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <Competition />
      </div>
      <Footer />
    </main>
  );
}
