import SocialLink from "@/components/SocialLink";

export const metadata = {
  title: "社群連結",
  description: "用一個列表完整的列出我公開的連結",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 py-4">
        <SocialLink />
      </div>
    </main>
  );
}
