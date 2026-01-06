"use client";

import { useState } from "react";
import { CheckCircle, Star, ChevronDown, Info } from "lucide-react";

const contestByCategory = {
  科技教育與創新: [
    {
      name: "2025 Next Star Demo Day",
      rank: "入選決賽",
      describe:
        "代表程式貓科技教育團隊參賽，向大眾及創投評審介紹我們的產品與願景。",
    },
    {
      name: "第三屆 解決未來問題能力競賽",
      rank: "入選決賽",
      describe:
        "與夥伴共同參與，向評審展示綠洲計畫如何透過數位化網站，提升特殊選才資訊透明度。",
    },
    {
      name: "第三屆 青年志工行動競賽",
      rank: "(評選中...)",
      describe:
        "透過貫穿 2025 年的特殊選才服務計畫，包含前導、導生和模擬面試，我們得以幫助更多學生走完特殊選才。",
    },
  ],

  程式競賽與檢定: [
    {
      name: "2025 ICPC Asia Taichung Regional",
      rank: "參賽",
      describe:
        "以 C++ 為主要程式語言，涵蓋資料結構與演算法等主題。感謝兩位隊友於初賽付出，才得以一同晉級 ICPC 台中賽。",
    },
    {
      name: "2025 ICPC Asia Taiwan Online Programming",
      rank: "銅牌",
      describe:
        "TOPC 作為台灣地區 ICPC 線上賽事，使用 C++ 解決多道程式設計題目，涵蓋資料結構與演算法等主題。",
    },
    {
      name: "CPE 大學程式能力檢定",
      rank: "PR 93",
      describe: "於檢定中使用 C++ 解題，展現程式設計與問題解決能力。",
    },
    {
      name: "第九屆 YTP 少年圖靈計畫",
      rank: "晉級決賽",
      describe: "於初賽中使用 C++ 解題並成功晉級決賽。",
    },
    {
      name: "第十屆 成大程式邀請賽初賽",
      rank: "全國 41 名",
      describe: "使用 C++ 完成多道演算法與資料結構題目。",
    },
    {
      name: "2024 TOI 台灣國際資訊奧林匹亞競賽",
      rank: "全國 207 名",
      describe: "以 APCS 成績通過海選，並於比賽中使用 C++ 完成多道競賽題目。",
    },
  ],

  軟體工程與機器人: [
    {
      name: "2025 雙北城市儀表板大黑客松",
      rank: "入選",
      describe:
        "為雙北城市儀表板開發停水地圖、停電地圖等功能，展現 GIS 系統整合與團隊協作能力。",
    },
    {
      name: "2025 台北城市通微服務大黑客松",
      rank: "入選",
      describe:
        "為程式通開發智能地圖服務，包含行人道、自行車道路徑規劃，以及事故熱點地圖等功能。",
    },
    {
      name: "2023 北科大國際 PBL 競賽工作坊",
      rank: "第三名",
      describe:
        "我透過 PID 控制、Pixy 視覺辨識等技術帶領團隊完成小車，並與來自日本等數國隊伍競賽。通過反覆練習優化出成效優良的車輛，才得以獲得如此佳績。",
    },
    {
      name: "智慧科技素養與程式設計創新應用競賽",
      rank: "高中職組第三名",
      describe:
        "比賽又俗稱機甲大師，我透過 Python 為機器人編寫程式碼，執行如 PID 控制及視覺辨識等功能，成功使機器人能以完全自動化的方式穿越場地障礙完成任務，並獲得高中職組第三名的佳績。",
    },
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

  學術研究與科展: [
    {
      name: "2025 全國 AI 專題創意競賽",
      rank: "入選決賽",
      describe:
        "基於 mediapipe 與自訓練模型建構的即時健身分析系統，提供邊緣 AI 實際應用的概念驗證。",
    },
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

  跨域競賽: [
    {
      name: "111學年度 中和高中學習成就測驗 地理科",
      rank: "第一名",
      describe:
        "學習成就測驗模擬學測出題方式，用以評估學生於指定領域的學習成效，其中涵蓋許多艱深問題。",
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

                          <div className="flex items-center justify-center lg:ml-6">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-amber-500 to-orange-500 shadow-md transition-all duration-300 group-hover:shadow-lg">
                              <ChevronDown
                                className={`h-5 w-5 text-white transition-transform duration-300 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </div>
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
