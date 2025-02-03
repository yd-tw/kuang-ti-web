import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center mb-6">文章列表</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-shadow"
          >
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                {post.metadata.title}
              </h2>
            </Link>
            <p className="text-gray-500 text-sm mt-1">
              {post.metadata.publishedAt}
            </p>
            <p className="text-gray-700 mt-3">{post.metadata.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.metadata.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
