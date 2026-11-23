import MusicPlayer from "@/components/music/MusicPlayer";

export const metadata = {
  title: "春日影演奏系統",
  description: "如果能累積起一個又一個的音符，也許就能變成一首歌",
  openGraph: {
    url: `/music`,
    images:
      "/og?title=春日影演奏系統&subtitle=如果能累積起一個又一個的音符，也許就能變成一首歌",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-6 py-12 sm:px-12">
        <MusicPlayer />
      </div>
    </main>
  );
}
