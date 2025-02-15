"use client";

import { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabData = {
  title: string;
  id: string;
  content: string[];
};

const TAB_DATA: TabData[] = [
  {
    title: "比賽",
    id: "score",
    content: [
      "APCS 大學程式設計先修檢測 - 四級",
      "CPE 大學程式能力檢定 - 三題(前14%)",
      "111學年度 中和高中學習成就測驗 地理科 - 第一名"
    ]
  },
  {
    title: "技能",
    id: "skills",
    content: [
      "React / Next.js 網頁全端開發",
      "Arduino程式設計",
      "FRC程式設計",
      "競賽程式",
      "演算法分析"
    ]
  },
  {
    title: "團隊",
    id: "teams",
    content: [
      "CodeCat程式貓社群 - 創辦人",
      "Next.js / React 讀書會 - 主持人",
      "APCS教育團隊 - 測試組組長",
      "中和高中FRC校隊 - 程式組組長",
      "中和高中機器人社 - 活動長"
    ]
  }
];

function TabButton({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}) {
  const buttonClasses = active ? "text-orange-500" : "text-orange-700 dark:text-orange-300";

  const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };

  return (
    <button onClick={selectTab} className="focus:outline-hidden">
      <p className={`mr-3 font-semibold hover:text-orange-500 ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="bg-primary-500 mr-3 mt-2 h-1"
      ></motion.div>
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

  const activeTab = TAB_DATA.find(item => item.id === tab);

  return (
    <section className="bg-orange-100 dark:bg-gray-800 p-4 my-8 rounded-xl" id="tabinfo">
      <div className="flex flex-col text-left">
        <div className="flex flex-row justify-center text-base md:text-4xl">
          {TAB_DATA.map((tabData) => (
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
