"use client";

import React, { useTransition, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabData = {
  title: string;
  id: string;
  content: React.ReactNode;
};

const TAB_DATA: TabData[] = [
  {
    title: "比賽",
    id: "score",
    content: (
      <ul className="pl-2">
        <li>APCS 大學程式設計先修檢測 - 四級</li>
        <li>CPE 大學程式能力檢定 - 三題(前14%)</li>
        <li>111學年度 中和高中學習成就測驗 地理科 - 第一名</li>
      </ul>
    ),
  },
  {
    title: "技能",
    id: "skills",
    content: (
      <ul className="pl-2">
        <li>React / Next.js 網頁全端開發</li>
        <li>Arduino程式設計</li>
        <li>FRC程式設計</li>
        <li>競賽程式</li>
        <li>演算法分析</li>
      </ul>
    ),
  },
  {
    title: "團隊",
    id: "teams",
    content: (
      <ul className="pl-2">
        <li>中和高中FRC校隊 - 程式組組長</li>
        <li>中和高中機器人社 - 活動長</li>
        <li>中和高中資訊研究社 - 社員</li>
        <li>CodeCat程式貓社群 - 創辦人</li>
        <li>APCS教育團隊 - 測試組組長</li>
      </ul>
    ),
  },
];

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };

  return (
    <button onClick={selectTab} className="focus:outline-none">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="bg-primary-500 mr-3 mt-2 h-1"
      ></motion.div>
    </button>
  );
};

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("score");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="tabinfo">
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
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
