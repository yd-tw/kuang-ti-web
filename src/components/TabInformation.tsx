"use client";

import { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tabinfo from "../../config/tabinfo.json";

function TabButton({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}) {
  return (
    <button onClick={selectTab} className="relative focus:outline-hidden">
      <p className={`mr-3 font-semibold hover:text-orange-500 ${active ? "text-orange-500" : "text-orange-700 dark:text-orange-300"}`}>
        {children}
      </p>
    </button>
  );
}

export default function AboutSection() {
  const [tab, setTab] = useState<string>("score");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = tabinfo.find(item => item.id === tab);

  return (
    <section className="bg-orange-100 dark:bg-gray-800 p-4 my-8 rounded-xl" id="tabinfo">
      <div className="flex flex-col text-left">
        <div className="flex flex-row justify-center text-base md:text-4xl">
          {tabinfo.map((tabData) => (
            <TabButton
              key={tabData.id}
              selectTab={() => handleTabChange(tabData.id)}
              active={tab === tabData.id}
            >
              {tabData.title}
            </TabButton>
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
                {activeTab?.content.map((line, index) => (
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
