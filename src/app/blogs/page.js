import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">文章列表</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blogs/${post.slug}`} className="text-blue-500 hover:underline">
              {post.metadata.title}
            </Link>
            <p className="text-gray-500 text-sm">{post.metadata.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
