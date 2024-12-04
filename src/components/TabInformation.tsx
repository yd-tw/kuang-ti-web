"use client";

import React, { useTransition, useState } from "react";
import { motion } from "framer-motion";

type TabData = {
  title: string;
  id: string;
  content: React.ReactNode;
};

const TAB_DATA: TabData[] = [
  {
    title: "Score",
    id: "score",
    content: (
      <ul className="pl-2">
        <li>APCS 大學程式設計先修檢測 - 四級</li>
        <li>CPE 大學程式能力檢定 - 兩題(全國467名)</li>
        <li>111學年度 中和高中學習成就測驗 地理科 - 第一名</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2">
        <li>Arduino程式設計</li>
        <li>FRC程式設計</li>
        <li>PID控制器設計</li>
        <li>AI影像分析</li>
        <li>競賽程式</li>
        <li>演算法分析</li>
      </ul>
    ),
  },
  {
    title: "Teams",
    id: "teams",
    content: (
      <ul className="pl-2">
        <li>中和高中FRC機器人校隊 - 程式組組長</li>
        <li>中和高中機器人社 - 活動長</li>
        <li>中和高中資訊研究社 - 社員</li>
        <li>CodeCat程式貓社群 - 計畫發起人</li>
        <li>APCS新創教育團隊 - 測試組組長</li>
      </ul>
    ),
  },
];

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };

  return (
    <button onClick={selectTab} className="focus:outline-none">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="mr-3 mt-2 h-1 bg-primary-500"
      ></motion.div>
    </button>
  );
};

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("score");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="pt-24 text-white" id="tabinfo">
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
        <div className="mt-8 text-center text-xl md:text-2xl">
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
