import NoteEditor from "@/components/music/NoteEditor";

export const metadata = {
  title: "音符配置工具",
  description: "春日影演奏系統的音符編輯工具",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-6 py-12 sm:px-12">
        <NoteEditor />
      </div>
    </main>
  );
}
