"use client";

import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "motion/react";
import { FolderOpen } from "lucide-react";
import projects from "@/config/project.json";

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
      className="relative bg-gray-50 dark:bg-gray-900 p-8 my-12 rounded-3xl border border-gray-200/70 dark:border-gray-700/50 shadow-xl shadow-gray-200/20 dark:shadow-slate-900/20"
      id="projects"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            <FolderOpen className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
            專案列表
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto"></div>
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
              intro={project.intro}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
