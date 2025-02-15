"use client";

import { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tabinfo from "../../config/tabinfo.json";

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
    <section className="bg-orange-100 dark:bg-gray-800 p-4 my-8 rounded-xl" id="tabinfo">
      <div className="flex flex-col text-left">
        <div className="flex flex-row justify-center text-base md:text-4xl">
          {tabKeys.map((key) => (
            <button key={key} onClick={() => handleTabChange(key)} className="relative focus:outline-hidden">
              <p
                className={`mr-3 font-semibold hover:text-orange-500 ${(tab === key) ? "text-orange-500" : "text-orange-700 dark:text-orange-300"
                  }`}
              >
                {key}
              </p>
            </button>
          ))}
        </div>
        <motion.div
          layout
          className="relative mt-8 flex justify-center text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ minHeight: "150px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full"
            >
              <ul className="pl-2">
                {tabinfo[tab].content.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
