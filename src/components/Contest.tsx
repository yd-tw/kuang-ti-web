"use client";

import { useState } from "react";
import { CheckCircle, Star, ChevronDown, Info } from "lucide-react";

const contest = [
  {
    name: "2020 TIRT全能機器人國際邀請賽",
    rank: "全國第三名",
    describe:
      "在半年多的時間裡，透過自行改裝足球機器人並嘗試編寫程式碼(Python、Arduino)，領導著隊友們進行無數次的優化與練習，最終擊敗其他隊伍拿下全國第三。",
  },
  {
    name: "2025雙北程式設計節大黑客松",
    rank: "通過審核",
    describe:
      "經過和其他隊伍書審與面試的比較，成功通過審核。在比賽當中我們為雙北城市儀表板開發了「停水地圖」、「停電地圖」等功能，展現了我們團隊強大的合作以及我對於 GIS 系統的熟練開發能力。",
  },
  {
    name: "2023 北科大國際 PBL 競賽工作坊",
    rank: "第三名",
    describe:
      "我透過 PID 控制、Pixy 視覺辨識等技術帶領團隊完成小車，並與來自日本等數國隊伍競賽。通過反覆練習優化出成效優良的車輛，才得以獲得如此佳績。",
  },
  {
    name: "111學年 新北市學科能力競賽資訊科",
    rank: "新北區複賽",
    describe: "在高一時即通過全校選拔，代表學校參與資訊學科能力競賽。",
  },
  {
    name: "新北市智慧科技素養與程式設計創新應用競賽",
    rank: "高中職組第三名",
    describe:
      "比賽又俗稱機甲大師，我透過 Python 為機器人編寫程式碼，執行如 PID 控制及視覺辨識等功能，成功使機器人能以完全自動化的方式穿越場地障礙完成任務，並獲得高中職組第三名的佳績。",
  },
  {
    name: "2024 Toi 台灣國際資訊奧林匹亞競賽",
    rank: "全國207名",
    describe:
      "我以 APCS 成績通過海選，在比賽當中使用 C++ 完成許多道題目，獲得相當程度的分數。",
  },
  {
    name: "112學年 中和高中校內科展 電腦科學",
    rank: "佳作",
    describe:
      "從頭獨立開發出「寵物情緒辨識系統」應用程式，並透過使用者反饋準確度來探究提示詞對於多模態模型準確度的影響，此創新的研究主題成功獲得評審青睞而獲獎。",
  },
  {
    name: "112學年 中和高中校內科展 工程學科一",
    rank: "佳作",
    describe:
      "研究透過 Arduino 與超音波感測器製作出全地形車，並分析使用數位補償技術來提升車輛的穩定性，最終成功獲得評審青睞而獲獎。",
  },
  {
    name: "2023 新北市FRC機器人新生盃",
    rank: "聯盟佳作",
    describe:
      "我擔任程式組長期間透過 Java 撰寫機器人程式碼，包含 LimeLight 視覺辨識、編碼器、自動駕駛等功能，並帶領隊員獲得名次。",
  },
  {
    name: "第十屆成大程式邀請賽初賽",
    rank: "全國41名",
    describe: "使用 C++ 完成許多道程式題目，涵蓋演算法等等內容。",
  },
  {
    name: "第九屆 YTP 少年圖靈計畫",
    rank: "晉級決賽",
    describe: "在初賽中我使用 C++ 完成許多道程式題目，涵蓋演算法等等內容。",
  },
];

export default function Contest() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      className="my-12 rounded-3xl border border-gray-300 p-8 dark:border-gray-700"
      id="contest"
    >
      <div className="relative z-10">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-orange-500">競賽獲獎</h2>
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
