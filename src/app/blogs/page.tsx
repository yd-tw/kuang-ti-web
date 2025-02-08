import BlogList from "@/components/BlogList";

export const metadata = {
  title: "部落格",
  description: "記錄生命時光的小小地方",
  openGraph: {
    url: `/blogs`,
    images: "/og?title=部落格&subtitle=記錄生命時光的小小地方",
    type: "website",
  },
};

export default function PostsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <BlogList />
      </div>
    </main>
  );
}
