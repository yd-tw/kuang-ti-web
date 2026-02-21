"use client";

import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "motion/react";
import { FolderOpen } from "lucide-react";

const projects = [
  {
    "id": "frctw-web",
    "title": "FRC Taiwan 2025 - 台灣官方網站",
    "description": "協助新北市政府活動大會建立比賽官網，採用 i18n 架構支援多國語言頁面。",
    "image": "/images/projects/frctw-web.png",
    "tag": ["精選", "網站"],
    "intro": "https://www.frctw.codecat.tw"
  },
  {
    "id": "codecat-web",
    "title": "程式貓官網 - 科技教育社群的介紹",
    "description": "基於 Docusaurus 建立支援 Markdown 的文本網站，並在上面發怖科技新聞。",
    "image": "/images/projects/codecat-web.png",
    "tag": ["精選", "網站"],
    "intro": "https://www.codecat.tw"
  },
  {
    "id": "kuang-ti-web",
    "title": "楊光地個人網站 - 現代部落格",
    "description": "使用 Next.js 搭配 Tailwind CSS 建立 RWD 網站，現在這個網站即是成果。",
    "image": "/images/projects/kuang-ti-web.png",
    "tag": ["精選", "網站"],
    "intro": "https://www.kuang-ti.com"
  },
  {
    "id": "next-posts",
    "title": "NPM套件 - next-posts",
    "description": "提供開箱即用的部落格頁面，簡化相關配置。曾達到每週數百次的安裝量。",
    "image": "/images/projects/next-posts.png",
    "tag": ["精選", "服務"],
    "intro": "https://www.npmjs.com/package/next-posts"
  },
  {
    "id": "discord-templatebot",
    "title": "Discord bot - 專業機器人模板",
    "description": "一個基於 discord.py 製作的機器人，使用Cogs架構支援即時熱修復，無須停機重啟。",
    "image": "/images/projects/discord-templatebot.png",
    "tag": ["精選", "服務"],
    "intro": "https://github.com/yd-tw/Discord-TemplateBot"
  },
  {
    "id": "frc-robot",
    "title": "FRC機器人 - 國際大型機器人競賽",
    "description": "工業級的機器人競賽，撰寫包含自動駕駛、視覺辨識、編碼器在內的多項技術。",
    "image": "/images/projects/frc-robot.png",
    "tag": ["精選", "比賽"],
    "intro": "https://frc.codecat.tw"
  },
  {
    "id": "ntut-pbl",
    "title": "北科大PBL - 比賽小車重製",
    "description": "改良我在北科大 PBL 時製作的車子，使其 AI 視覺辨識系統更加穩定與準確。",
    "image": "/images/projects/ntut-pbl.png",
    "tag": ["比賽"],
    "intro": "https://github.com/yd-tw/Arduino-Car"
  },
  {
    "id": "sciencefair-cat",
    "title": "科展 - 基於AI影像分析的貓咪情緒辨識",
    "description": "分析提示工程對於影像辨識模型的差異，包含模態、語言、關鍵詞等提示詞差異對照。",
    "image": "/images/projects/sciencefair-cat.png",
    "tag": ["比賽"],
    "intro": "/404"
  },
  {
    "id": "wupamap",
    "title": "嗚帕村線上地圖 - 基於 D3.js 資料視覺化",
    "description": "透過 D3.j3 渲染包含鐵路路線、河流在內的組件，同時支援透過網址參數快速定位。",
    "image": "/images/projects/wupamap.png",
    "tag": ["網站"],
    "intro": "https://wupa.ydtw.net"
  },
  {
    "id": "clawmachine-web",
    "title": "線上夾娃娃機遊戲 - Three.js 建構的立體遊戲",
    "description": "透過 Three.js 建立立體遊戲網頁。透過虛擬搖桿操縱爪子並支援隨機顯示禮物外觀。",
    "image": "/images/projects/hui.png",
    "tag": ["網站"],
    "intro": "https://clawmachine-web.vercel.app"
  },
  {
    "id": "phaser-chshs",
    "title": "中核高中 - 使用 Phaser 建立的線上遊戲",
    "description": "透過 Phaser 建立的類 RPG 冒險遊戲，支援登入儲存遊戲進度。",
    "image": "/images/projects/phaser-chshs.png",
    "tag": ["網站"],
    "intro": "https://chshs.vercel.app/"
  }
]

export default function ProjectsSection() {
  const [tag, setTag] = useState<string>("精選");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      className="my-12 rounded-3xl border border-gray-300 p-8 dark:border-gray-700"
      id="projects"
    >
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
            <FolderOpen className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-orange-500">專案列表</h2>
        </div>
        <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-amber-400 to-orange-400"></div>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("精選")}
          name="精選"
          isSelected={tag === "精選"}
        />
        <ProjectTag
          onClick={() => handleTagChange("網站")}
          name="網站"
          isSelected={tag === "網站"}
        />
        <ProjectTag
          onClick={() => handleTagChange("比賽")}
          name="比賽"
          isSelected={tag === "比賽"}
        />
        <ProjectTag
          onClick={() => handleTagChange("服務")}
          name="服務"
          isSelected={tag === "服務"}
        />
      </div>
      <ul
        ref={ref}
        className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
      >
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
              intro={project.intro}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
