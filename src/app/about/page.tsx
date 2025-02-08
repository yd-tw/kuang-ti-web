import AboutSection from "@/components/AboutSection";
import TabInformation from "@/components/TabInformation";

export const metadata = {
  title: "個人介紹",
  description: "一路成長以來的心路歷程",
  openGraph: {
    url: `/about`,
    images: "/og?title=個人介紹&subtitle=一路成長以來的心路歷程",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <AboutSection />
        <TabInformation />
      </div>
    </main>
  );
}
