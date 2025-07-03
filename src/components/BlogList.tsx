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
    <section
      className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 p-8 my-12 rounded-3xl border border-slate-200/50 dark:border-gray-700/50 shadow-xl shadow-slate-200/20 dark:shadow-slate-900/20"
      id="contest"
    >
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-3xl"></div>
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
            部落格
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mx-auto"></div>
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
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-pink-400 rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                    {post.metadata.title}
                  </h3>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
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
              <svg 
                className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
