"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="rounded-b-2xl shadow-md hover:shadow-xl">
      <div className="group relative h-52 overflow-hidden rounded-t-xl md:h-72">
        <Image
          src={imgUrl}
          alt={`${title} preview`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-xl"
        />
        <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <Icon
              icon="mdi:code-braces"
              className="h-8 w-8 text-[#ADB7BE] transition-colors group-hover:text-white"
            />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <Icon
              icon="mdi:eye-outline"
              className="h-8 w-8 text-[#ADB7BE] transition-colors group-hover:text-white"
            />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-orange-300 px-4 py-6">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
