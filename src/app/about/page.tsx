import AboutSection from "@/components/AboutSection";
import TabInformation from "@/components/TabInformation";

export const metadata = {
  title: "個人介紹",
  description: "一路成長以來的心路歷程",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutSection />
      <TabInformation />
    </main>
  );
}
