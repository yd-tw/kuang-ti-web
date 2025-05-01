import { Eye } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  imgUrl,
  title,
  description,
  intro,
}: {
  imgUrl: string;
  title: string;
  description: string;
  intro: string;
}) {
  return (
    <div className="rounded-b-2xl shadow-md hover:shadow-xl">
      <div className="group relative h-64 overflow-hidden rounded-t-xl">
        <Image
          src={imgUrl}
          alt={`${title} preview`}
          fill
          className="rounded-t-xl object-cover"
        />
        <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-[#181818] group-hover:flex group-hover:bg-opacity-80">
          <Link
            href={intro}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ADB7BE] hover:border-white"
          >
            <Eye className="h-8 w-8 text-[#ADB7BE] transition-colors group-hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-orange-300 px-4 py-6">
        <h5 className="mb-2 text-xl font-semibold text-black">{title}</h5>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
