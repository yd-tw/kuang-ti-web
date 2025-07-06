"use client";

import { useTransition, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import tabinfo from "@/config/tabinfo.json";

export default function AboutSection() {
  type TabKey = keyof typeof tabinfo;
  const tabKeys = Object.keys(tabinfo) as TabKey[];
  const [tab, setTab] = useState<TabKey>(tabKeys[0] || "比賽");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: TabKey) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="relative bg-gray-50 dark:bg-gray-900 p-8 my-12 rounded-3xl border border-gray-200/70 dark:border-gray-700/50 shadow-xl shadow-gray-200/20 dark:shadow-slate-900/20"
      id="tabinfo"
    >
      <div className="relative z-10">
        {/* 分頁導航 */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative flex flex-wrap justify-center gap-2 p-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-lg">
            <motion.div
              className="absolute top-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg"
              layoutId="activeTab"
              style={{ zIndex: 0 }}
              initial={false}
              animate={{
                left: `${tabKeys.indexOf(tab) * (100 / tabKeys.length)}%`,
                width: `${100 / tabKeys.length}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            />

            {tabKeys.map((key, index) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`relative z-10 px-2 md:px-6 py-3 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 ${
                  tab === key
                    ? "text-orange-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* 內容區域 */}
        <div className="relative">
          <motion.div
            layout
            className="relative flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ minHeight: "200px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="w-full max-w-4xl"
              >
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 shadow-lg">
                  <div className="space-y-4">
                    {tabinfo[tab].content.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                        className="flex items-start gap-3 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-3"></div>
                        <span className="flex-1">{line}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* 導航按鈕 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    className="mt-8 flex justify-center"
                  >
                    <button
                      onClick={() => {
                        const href = tabinfo[tab].href;
                        if (href) {
                          window.location.href = href;
                        }
                      }}
                      className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <span className="relative z-10">瀏覽更多{tab}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 底部裝飾 */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {tabKeys.map((key, index) => (
              <div
                key={key}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  tab === key
                    ? "bg-gradient-to-r from-orange-500 to-red-500 scale-125"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
