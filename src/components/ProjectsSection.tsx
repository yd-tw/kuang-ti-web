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
      className="relative my-12 rounded-3xl border border-gray-200/70 bg-gray-50 p-8 shadow-xl shadow-gray-200/20 dark:border-gray-700/50 dark:bg-gray-900 dark:shadow-slate-900/20"
      id="projects"
    >
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-amber-400 to-orange-500">
            <FolderOpen className="h-5 w-5 text-white" />
          </div>
          <h2 className="bg-linear-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent">
            專案列表
          </h2>
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
