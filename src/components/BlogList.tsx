import Link from "next/link";
import { getAllPosts } from "next-staticblog";
import { PenLine, ArrowRight } from "lucide-react";

export default function BlogList({ limit }: { limit?: number }) {
  const posts = getAllPosts()
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, limit ?? getAllPosts().length);

  return (
    <section
      className="relative bg-gray-50 dark:bg-gray-900 p-8 my-12 rounded-3xl border border-gray-200/70 dark:border-gray-700/50 shadow-xl shadow-gray-200/20 dark:shadow-slate-900/20"
      id="contest"
    >
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <PenLine className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              部落格
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl p-6 hover:shadow-2xl hover:shadow-orange-200/20 dark:hover:shadow-orange-900/20 transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* 卡片背景效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50 dark:from-orange-900/10 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* 左側彩色條 */}
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-400 rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                    {post.metadata.title}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {post.metadata.publishedAt}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.metadata.description}
                </p>

                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.metadata.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 hover:from-blue-200 hover:to-indigo-200 dark:hover:from-blue-800/40 dark:hover:to-indigo-800/40 transition-all duration-200"
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
          <div className="flex justify-center mt-12">
            <Link
              href="/blogs"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-semibold bg-gradient-to-r from-orange-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-200/30 dark:hover:shadow-orange-900/30 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">查看更多</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
