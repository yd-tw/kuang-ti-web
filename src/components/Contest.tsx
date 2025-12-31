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
      className="relative my-12 rounded-3xl border border-gray-200/70 bg-gray-50 p-8 shadow-xl shadow-gray-200/20 dark:border-gray-700/50 dark:bg-gray-900 dark:shadow-slate-900/20"
      id="contest"
    >
      <div className="relative z-10">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-amber-400 to-orange-500">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <h2 className="bg-linear-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent">
              競賽獲獎
            </h2>
          </div>
          <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-amber-400 to-orange-400"></div>
        </div>

        <div className="space-y-4">
          {contest.map((data, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-200/20 dark:border-gray-700/30 dark:bg-gray-800/80 dark:hover:shadow-amber-900/20"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => toggleExpanded(index)}
            >
              {/* 卡片背景效果 */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-50/50 to-orange-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-amber-900/10 dark:to-orange-900/10"></div>

              {/* 左側獎項指示器 */}
              <div className="absolute top-0 left-0 h-full w-2 origin-top scale-y-0 transform rounded-l-2xl bg-linear-to-b from-amber-400 to-orange-400 transition-transform duration-300 group-hover:scale-y-100"></div>

              <div className="relative z-10 p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                  {/* 競賽名稱 */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl leading-tight font-bold text-gray-900 transition-colors duration-300 group-hover:text-amber-600 md:text-2xl dark:text-white dark:group-hover:text-amber-400">
                      {data.name}
                    </h3>
                  </div>

                  {/* 獎項等級 */}
                  <div className="shrink-0">
                    <span className="inline-flex items-center rounded-full border border-amber-200/50 bg-linear-to-r from-amber-100 to-orange-100 px-4 py-2 text-lg font-bold text-amber-800 shadow-sm md:text-xl dark:border-amber-700/50 dark:from-amber-900/30 dark:to-orange-900/30 dark:text-amber-300">
                      <Star className="mr-2 h-5 w-5" />
                      {data.rank}
                    </span>
                  </div>

                  {/* 展開/收起指示器 */}
                  <div className="flex items-center justify-center lg:ml-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-amber-500 to-orange-500 shadow-md transition-all duration-300 group-hover:shadow-lg">
                      <ChevronDown
                        className={`h-5 w-5 text-white transition-transform duration-300 ${
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
                      ? "mt-6 max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-gray-200/50 pt-4 dark:border-gray-700/50">
                    <div className="rounded-xl border border-amber-200/30 bg-linear-to-r from-amber-50/80 to-orange-50/80 p-4 dark:border-amber-700/30 dark:from-amber-900/20 dark:to-orange-900/20">
                      <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold text-amber-800 dark:text-amber-300">
                        <Info className="h-5 w-5" />
                        比賽描述
                      </h4>
                      <p className="leading-relaxed text-gray-700 dark:text-gray-300">
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
