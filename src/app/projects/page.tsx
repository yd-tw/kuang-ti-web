import { baseUrl } from "@/app/sitemap";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  title: "作品成果",
  description: "這個網站列出我從小時候到現在所建立的大專案",
  openGraph: {
    title: "作品成果",
    description: "這個網站列出我從小時候到現在所建立的大專案",
    url: `${baseUrl}/projects`,
    images:
      "/og?title=作品成果&subtitle=這個網站列出我從小時候到現在所建立的大專案",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <ProjectsSection />
      </div>
    </main>
  );
}
