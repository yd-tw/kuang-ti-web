import contest from "@/config/contest.json";

export default function Contest() {
  return (
    <section
      className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-slate-800 p-8 my-12 rounded-3xl border border-amber-200/50 dark:border-gray-700/50 shadow-xl shadow-amber-200/20 dark:shadow-slate-900/20"
      id="contest"
    >
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-3xl"></div>
      <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              競賽獲獎
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-4">
          {contest.map((data, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl hover:shadow-2xl hover:shadow-amber-200/20 dark:hover:shadow-amber-900/20 transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* 卡片背景效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* 左側獎項指示器 */}
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-amber-400 to-orange-400 rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              
              <div className="relative z-10 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  {/* 競賽名稱 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                      {data.name}
                    </h3>
                  </div>
                  
                  {/* 獎項等級 */}
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-lg md:text-xl font-bold bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 dark:from-amber-900/30 dark:to-orange-900/30 dark:text-amber-300 border border-amber-200/50 dark:border-amber-700/50 shadow-sm">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {data.rank}
                    </span>
                  </div>
                  
                  {/* 操作按鈕 */}
                  <div className="flex gap-3 lg:ml-6">
                    <button className="group/btn relative inline-flex items-center gap-2 px-4 py-2 text-white text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-md hover:shadow-lg hover:shadow-amber-200/30 dark:hover:shadow-amber-900/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <svg className="relative z-10 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="relative z-10">比賽經歷</span>
                    </button>
                    
                    <button className="group/btn relative inline-flex items-center gap-2 px-4 py-2 text-white text-sm font-semibold bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-md hover:shadow-lg hover:shadow-orange-200/30 dark:hover:shadow-orange-900/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <svg className="relative z-10 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="relative z-10">官方連結</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
