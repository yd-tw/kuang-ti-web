"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import projects from "../../config/project.json";

export default function ProjectsSection() {
  const [tag, setTag] = useState<string>("全部");
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
    <section className="bg-orange-100 dark:bg-gray-800 p-4 my-8 rounded-xl" id="projects">
      <h2 className="my-4 text-center text-4xl font-bold text-orange-500">
        作品成果
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6">
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
