import Link from "next/link";
import { getAllPosts } from "next-staticblog";
import { PenLine, ArrowRight } from "lucide-react";

interface PostMeta {
  title: string;
  description: string;
  image?: string;
  publishedAt: string;
  tags?: string[];
}

export default function BlogList({ limit }: { limit?: number }) {
  const posts = getAllPosts<PostMeta>()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, limit ?? getAllPosts().length);

  return (
    <section
      className="my-12 rounded-3xl border border-gray-300 p-8 dark:border-gray-700"
      id="blog"
    >
      <div className="relative z-10">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
              <PenLine className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-orange-500">部落格</h2>
          </div>
          <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-amber-400 to-orange-400"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-200/20 dark:border-gray-700/30 dark:bg-gray-800/80 dark:hover:shadow-orange-900/20"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* 卡片背景效果 */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-orange-50/50 to-blue-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-orange-900/10 dark:to-blue-900/10"></div>

              {/* 左側彩色條 */}
              <div className="absolute top-0 left-0 h-full w-1 origin-top scale-y-0 transform rounded-l-2xl bg-linear-to-b from-amber-400 to-orange-400 transition-transform duration-300 group-hover:scale-y-100"></div>

              <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-xl leading-tight font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                    {post.metadata.title}
                  </h3>
                  <div className="ml-4 shrink-0">
                    <ArrowRight className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange-500" />
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-linear-to-r from-orange-400 to-red-400"></div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {post.metadata.publishedAt}
                  </p>
                </div>

                <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  {post.metadata.description}
                </p>

                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.metadata.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-blue-200/50 bg-linear-to-r from-blue-100 to-indigo-100 px-3 py-1 text-xs font-medium text-blue-700 transition-all duration-200 hover:from-blue-200 hover:to-indigo-200 dark:border-blue-700/50 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300 dark:hover:from-blue-800/40 dark:hover:to-indigo-800/40"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/blogs"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-200/30 dark:hover:shadow-orange-900/30"
            >
              <div className="absolute inset-0 bg-orange-600 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative z-10">查看更多</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
