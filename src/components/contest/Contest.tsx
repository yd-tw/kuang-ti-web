"use client";

import { useState } from "react";
import { CheckCircle, Star, ChevronDown, Info } from "lucide-react";

const contestByCategory = {
  機器人與工程: [
    {
      name: "2020 TIRT 全能機器人國際邀請賽",
      rank: "全國第三名",
      describe:
        "在半年多的時間裡，透過自行改裝足球機器人並嘗試編寫程式碼（Python、Arduino），帶領隊友反覆優化與練習，最終獲得全國第三名。",
    },
    {
      name: "2023 新北市 FRC 機器人新生盃",
      rank: "聯盟佳作",
      describe:
        "擔任程式組長，使用 Java 撰寫機器人程式碼，包含 LimeLight 視覺辨識、自動駕駛與編碼器整合。",
    },
  ],

  程式競賽與演算法: [
    {
      name: "第十屆成大程式邀請賽初賽",
      rank: "全國 41 名",
      describe: "使用 C++ 完成多道演算法與資料結構題目。",
    },
    {
      name: "第九屆 YTP 少年圖靈計畫",
      rank: "晉級決賽",
      describe: "於初賽中使用 C++ 解題並成功晉級決賽。",
    },
    {
      name: "2024 TOI 台灣國際資訊奧林匹亞競賽",
      rank: "全國 207 名",
      describe: "以 APCS 成績通過海選，並於比賽中使用 C++ 完成多道競賽題目。",
    },
  ],

  黑客松與專案競賽: [
    {
      name: "2025 雙北程式設計節大黑客松",
      rank: "通過審核",
      describe:
        "為雙北城市儀表板開發停水地圖、停電地圖等功能，展現 GIS 系統整合與團隊協作能力。",
    },
  ],

  學術研究與科展: [
    {
      name: "112 學年 中和高中校內科展（電腦科學）",
      rank: "佳作",
      describe:
        "獨立開發寵物情緒辨識系統，探討提示詞對多模態模型準確度的影響。",
    },
    {
      name: "112 學年 中和高中校內科展（工程學科一）",
      rank: "佳作",
      describe:
        "使用 Arduino 與超音波感測器製作全地形車，並分析數位補償技術對穩定性的影響。",
    },
  ],
};

export default function Contest() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const toggleExpanded = (key: string) => {
    setExpandedIndex(expandedIndex === key ? null : key);
  };

  return (
    <section id="contest" className="flex items-center justify-center">
      <div className="max-w-4xl">
        {/* 主標題 */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-orange-500">競賽獲獎</h2>
          </div>
          <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-amber-400 to-orange-400" />
        </div>

        {/* 分類區塊 */}
        <div className="space-y-16">
          {Object.entries(contestByCategory).map(([category, contests]) => (
            <div key={category}>
              {/* 類別標題 */}
              <div className="mb-6 flex items-center gap-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-linear-to-r from-amber-400/60 to-transparent" />
              </div>

              {/* 競賽卡片 */}
              <div className="space-y-4">
                {contests.map((data, index) => {
                  const uniqueKey = `${category}-${index}`;
                  const isExpanded = expandedIndex === uniqueKey;

                  return (
                    <div
                      key={uniqueKey}
                      onClick={() => toggleExpanded(uniqueKey)}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-200/20 dark:border-gray-700/30 dark:bg-gray-800/80 dark:hover:shadow-amber-900/20"
                    >
                      {/* 背景效果 */}
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-50/50 to-orange-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-amber-900/10 dark:to-orange-900/10" />

                      {/* 左側指示條 */}
                      <div className="absolute top-0 left-0 h-full w-2 origin-top scale-y-0 rounded-l-2xl bg-linear-to-b from-amber-400 to-orange-400 transition-transform duration-300 group-hover:scale-y-100" />

                      <div className="relative z-10 p-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-amber-600 md:text-2xl dark:text-white dark:group-hover:text-amber-400">
                              {data.name}
                            </h4>
                          </div>

                          <span className="inline-flex items-center rounded-full border border-amber-200/50 bg-linear-to-r from-amber-100 to-orange-100 px-4 py-2 text-lg font-bold text-amber-800 dark:border-amber-700/50 dark:from-amber-900/30 dark:to-orange-900/30 dark:text-amber-300">
                            <Star className="mr-2 h-5 w-5" />
                            {data.rank}
                          </span>

                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-amber-500 to-orange-500 shadow-md">
                            <ChevronDown
                              className={`h-5 w-5 text-white transition-transform ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </div>

                        {/* 展開描述 */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isExpanded
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
