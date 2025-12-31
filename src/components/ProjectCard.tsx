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
    <Link href={intro} target="_blank" rel="noopener noreferrer">
      <div className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-200/20 dark:border-gray-700/30 dark:bg-gray-800/80 dark:hover:shadow-amber-900/20">
        {/* 卡片背景效果 */}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-50/50 to-orange-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-amber-900/10 dark:to-orange-900/10"></div>

        {/* 圖片區域 */}
        <div className="xs:h-44 relative z-10 h-40 overflow-hidden rounded-t-2xl sm:h-48 md:h-56 lg:h-64">
          <Image
            src={imgUrl}
            alt={`${title} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* 懸浮覆蓋層 */}
          <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/20 bg-linear-to-r from-amber-500 to-orange-500 shadow-lg transition-all duration-300 hover:scale-110 hover:border-white/40 hover:shadow-2xl">
              <Eye className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* 圖片上的漸變遮罩 */}
          <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
        </div>

        {/* 內容區域 */}
        <div className="relative z-10 p-6">
          <div className="mb-4">
            <h5 className="mb-3 text-xl leading-tight font-bold text-gray-900 transition-colors duration-300 group-hover:text-amber-600 md:text-2xl dark:text-white dark:group-hover:text-amber-400">
              {title}
            </h5>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
