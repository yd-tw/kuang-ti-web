import Contest from "@/components/Contest";

export const metadata = {
  title: "競賽獲獎",
  description: "這裡記錄了我從小時候到目前為止，獲得過重大的獎項。",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <Contest />
      </div>
    </main>
  );
}
