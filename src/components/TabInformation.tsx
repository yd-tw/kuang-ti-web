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
      className="relative my-12 rounded-3xl border border-gray-200/70 bg-gray-50 p-8 shadow-xl shadow-gray-200/20 dark:border-gray-700/50 dark:bg-gray-900 dark:shadow-slate-900/20"
      id="tabinfo"
    >
      <div className="relative z-10">
        {/* 分頁導航 */}
        <div className="mb-12 flex flex-col items-center">
          <div className="relative flex flex-wrap justify-center gap-2 rounded-2xl border border-white/20 bg-white/60 p-2 shadow-lg backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/60">
            <motion.div
              className="absolute top-2 rounded-xl bg-linear-to-r from-orange-500 to-red-500 shadow-lg"
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

            {tabKeys.map((key) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`relative z-10 rounded-xl px-2 py-3 text-base font-semibold transition-all duration-300 md:px-6 md:text-lg ${
                  tab === key
                    ? "text-orange-500"
                    : "text-gray-700 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-400"
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
                <div className="rounded-2xl border border-white/20 bg-white/70 p-8 shadow-lg backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/70">
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
                        className="flex items-start gap-3 text-lg leading-relaxed text-gray-800 md:text-xl dark:text-gray-200"
                      >
                        <div className="mt-3 h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-orange-400 to-red-400"></div>
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
                      className="group relative rounded-xl bg-linear-to-r from-orange-500 to-red-500 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                    >
                      <span className="relative z-10">瀏覽更多{tab}</span>
                      <div className="absolute inset-0 rounded-xl bg-linear-to-r from-orange-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 底部裝飾 */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            {tabKeys.map((key) => (
              <div
                key={key}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  tab === key
                    ? "scale-125 bg-linear-to-r from-orange-500 to-red-500"
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
