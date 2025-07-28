"use client";

import { useState } from "react";
import { CheckCircle, Star, ChevronDown, Info } from "lucide-react";
import contest from "@/config/contest.json";

export default function Contest() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className="relative bg-gray-50 dark:bg-gray-900 p-8 my-12 rounded-3xl border border-gray-200/70 dark:border-gray-700/50 shadow-xl shadow-gray-200/20 dark:shadow-slate-900/20"
      id="contest"
    >
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              競賽獲獎
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-4">
          {contest.map((data, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl hover:shadow-2xl hover:shadow-amber-200/20 dark:hover:shadow-amber-900/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => toggleExpanded(index)}
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
                      <Star className="w-5 h-5 mr-2" />
                      {data.rank}
                    </span>
                  </div>

                  {/* 展開/收起指示器 */}
                  <div className="flex items-center justify-center lg:ml-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                      <ChevronDown
                        className={`w-5 h-5 text-white transition-transform duration-300 ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* 可展開的描述內容 */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedIndex === index
                      ? "max-h-96 opacity-100 mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="bg-gradient-to-r from-amber-50/80 to-orange-50/80 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-4 border border-amber-200/30 dark:border-amber-700/30">
                      <h4 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2">
                        <Info className="w-5 h-5" />
                        比賽描述
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {data.describe || "暫無描述"}
                      </p>
                    </div>
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
