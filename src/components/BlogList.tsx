import Link from "next/link";
import { getAllPosts } from "next-staticblog";

export default function BlogList({ limit }: { limit?: number }) {
  const posts = getAllPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, limit ?? getAllPosts().length);

  return (
    <section className="bg-orange-100 dark:bg-gray-800 p-4 my-8 rounded-xl" id="contest">
      <h2 className="my-4 text-center text-4xl font-bold text-orange-500">部落格</h2>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="flex flex-col bg-orange-300 shadow-md rounded-2xl p-5 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-black">{post.metadata.title}</h2>
            <p className="text-gray-500 text-sm mt-1">
              {post.metadata.publishedAt}
            </p>
            <p className="text-gray-700 mt-3">{post.metadata.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.metadata.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      {limit && (
        <div className="flex justify-center my-6">
          <Link
            href="/blogs"
            className="px-6 py-3 text-white text-lg font-semibold bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition-colors"
          >
            查看更多
          </Link>
        </div>
      )}
    </section>
  );
}
