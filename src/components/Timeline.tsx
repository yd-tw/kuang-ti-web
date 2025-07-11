"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, Clock } from "lucide-react";

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  details: string;
}

const Timeline: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // 靜態資料範例
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      date: "2024-06-01",
      title: "網站重新設計完成",
      description:
        "完成了個人網站的全面重新設計，採用了現代化的設計語言和更好的用戶體驗。",
      details:
        "這次重新設計包含了全新的視覺風格、響應式佈局優化、以及更直觀的導航結構。使用了 Next.js 14 和 Tailwind CSS，大幅提升了網站的載入速度和可維護性。同時整合了暗色模式切換功能，讓用戶可以根據喜好選擇適合的主題。",
    },
    {
      id: 2,
      date: "2024-03-15",
      title: "開始學習 React 進階概念",
      description:
        "深入學習 React 的高級模式和最佳實踐，包括自定義 Hooks 和狀態管理。",
      details:
        "在這個階段重點學習了 React 的進階概念，包括 Context API 的深度使用、自定義 Hooks 的設計模式、以及如何優化 React 應用的性能。通過實際項目練習，掌握了 useCallback、useMemo 等優化 Hooks 的使用時機，並學會了如何使用 React DevTools 進行性能分析。",
    },
    {
      id: 3,
      date: "2024-01-20",
      title: "完成第一個全端專案",
      description: "成功完成了一個包含前端和後端的完整 web 應用程式。",
      details:
        "這個專案是一個任務管理系統，前端使用 React 和 TypeScript 構建，後端採用 Node.js 和 Express，資料庫使用 PostgreSQL。實現了用戶認證、CRUD 操作、即時通知等功能。通過這個專案，我深入了解了全端開發的完整流程，從需求分析、系統設計到部署上線的每一個環節。",
    },
    {
      id: 4,
      date: "2023-09-10",
      title: "開始前端開發之旅",
      description:
        "踏出了前端開發的第一步，開始學習 HTML、CSS 和 JavaScript 基礎。",
      details:
        "這是我程式設計學習旅程的起點。從最基礎的 HTML 標籤開始，逐步學習 CSS 的佈局技巧和響應式設計，然後深入 JavaScript 的核心概念。通過大量的練習和小專案，建立了紮實的前端基礎。這個階段最重要的收穫是培養了解決問題的思維方式和持續學習的習慣。",
    },
  ];

  const toggleExpanded = (id: number): void => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const themeClasses = isDarkMode
    ? "bg-gray-900 text-white"
    : "bg-gray-50 text-gray-900";

  const cardClasses = isDarkMode
    ? "bg-gray-800 border-gray-700 hover:bg-gray-750"
    : "bg-white border-gray-200 hover:bg-gray-50";

  const lineClasses = isDarkMode ? "bg-gray-700" : "bg-gray-300";

  const dotClasses = isDarkMode
    ? "bg-blue-400 border-gray-800"
    : "bg-blue-500 border-white";

  return (
    <div
      className={`min-h-screen p-4 sm:p-6 lg:p-8 transition-colors duration-300 ${themeClasses}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">我的時間軸</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 rounded-lg transition-colors duration-200 ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
                : "bg-white hover:bg-gray-100 text-gray-600 shadow-sm border border-gray-200"
            }`}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 ${lineClasses}`}
          ></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineData.map((item: TimelineItem) => (
              <div key={item.id} className="relative flex items-start">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 sm:left-4 w-8 h-8 rounded-full border-4 ${dotClasses} z-10 flex items-center justify-center`}
                >
                  <Calendar className="w-3 h-3" />
                </div>

                {/* Content */}
                <div className="ml-12 sm:ml-20 w-full">
                  <div
                    className={`rounded-lg border shadow-sm transition-all duration-200 ${cardClasses}`}
                  >
                    <div className="p-4 sm:p-6">
                      {/* Date */}
                      <div className="flex items-center text-sm text-blue-500 mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        {formatDate(item.date)}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm sm:text-base leading-relaxed mb-4 ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Expanded details */}
                      {expandedItems.has(item.id) && (
                        <div
                          className={`border-t pt-4 mt-4 ${
                            isDarkMode ? "border-gray-700" : "border-gray-200"
                          }`}
                        >
                          <p
                            className={`text-sm sm:text-base leading-relaxed ${
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {item.details}
                          </p>
                        </div>
                      )}

                      {/* Expand/Collapse button */}
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                          isDarkMode
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-600 hover:text-blue-500"
                        }`}
                      >
                        {expandedItems.has(item.id) ? (
                          <>
                            <ChevronUp className="w-4 h-4 mr-1" />
                            收起詳細資訊
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-4 h-4 mr-1" />
                            展開詳細資訊
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p
            className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            持續更新中...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
