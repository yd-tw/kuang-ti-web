"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "Discord bot - 一隻商用專業模板機器人",
    description:
      "一個基於 discord.py 製作的機器人，使用Cogs架構支援即時熱修復，無須停機重啟。",
    image: "/images/projects/1.png",
    tag: ["全部", "服務"],
    gitUrl: "https://github.com/yd-tw/Discord-TemplateBot",
    previewUrl: "https://github.com/yd-tw/Discord-TemplateBot",
  },
  {
    id: 2,
    title: "北科大PBL - 比賽小車重製",
    description:
      "改良我在北科大 PBL 時製作的車子，使其 AI 視覺辨識系統更加穩定與準確。",
    image: "/images/projects/2.png",
    tag: ["全部", "比賽"],
    gitUrl: "https://github.com/yd-tw/Arduino-Car",
    previewUrl: "https://github.com/yd-tw/Arduino-Car",
  },
  {
    id: 3,
    title: "生活科技專題 - 擊劍比賽系統",
    description:
      "使用 Arduino 製作的比賽系統，使用包含無線通訊、液晶顯示器、顏色感測器等多種感測器的技術。",
    image: "/images/projects/3.png",
    tag: ["全部", "專題"],
    gitUrl: "https://github.com/yd-tw/Arduino-Fencing",
    previewUrl: "https://github.com/yd-tw/Arduino-Fencing",
  },
  {
    id: 4,
    title: "科展 - 基於AI影像分析的貓咪情緒辨識",
    description:
      "分析提示工程對於影像辨識模型的差異，包含模態、語言、關鍵詞等提示詞差異對照。",
    image: "/images/projects/4.png",
    tag: ["全部", "比賽"],
    gitUrl: "https://github.com/yd-tw/ScienceFair-CatEmotionDetection",
    previewUrl: "https://github.com/yd-tw/ScienceFair-CatEmotionDetection",
  },
  {
    id: 5,
    title: "個人網站 - 使用Next.js搭建響應式網站",
    description:
      "使用 Next.js 搭配 Tailwind CSS 建立業界等級的響應式網站，現在這個網站即是成果。",
    image: "/images/projects/5.png",
    tag: ["全部", "服務"],
    gitUrl: "https://github.com/yd-tw/kuang-ti.com",
    previewUrl: "https://github.com/yd-tw/kuang-ti.com",
  },
  {
    id: 6,
    title: "程式貓官網 - 我為社群建立的文件網站",
    description:
      "基於 Docusaurus 建立支援 Markdown 的文本網站，並在上面發怖科技新聞。",
    image: "/images/projects/6.png",
    tag: ["全部", "服務"],
    gitUrl: "https://www.codecat.tw",
    previewUrl: "https://www.codecat.tw",
  },
];

export default function ProjectsSection() {
  const [tag, setTag] = useState<string>("全部");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-orange-100 p-4 my-8 rounded-xl" id="projects">
      <h2 className="my-4 text-center text-4xl font-bold text-black">
        作品成果
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-black">
        <ProjectTag
          onClick={() => handleTagChange("全部")}
          name="全部"
          isSelected={tag === "全部"}
        />
        <ProjectTag
          onClick={() => handleTagChange("比賽")}
          name="比賽"
          isSelected={tag === "比賽"}
        />
        <ProjectTag
          onClick={() => handleTagChange("專題")}
          name="專題"
          isSelected={tag === "專題"}
        />
        <ProjectTag
          onClick={() => handleTagChange("服務")}
          name="服務"
          isSelected={tag === "服務"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
