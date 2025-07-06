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
      <div className="group relative overflow-hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl hover:shadow-2xl hover:shadow-amber-200/20 dark:hover:shadow-amber-900/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        {/* 卡片背景效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

        {/* 圖片區域 */}
        <div className="relative z-10 h-64 overflow-hidden rounded-t-2xl">
          <Image
            src={imgUrl}
            alt={`${title} preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* 懸浮覆蓋層 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 border-2 border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
              <Eye className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* 圖片上的漸變遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>

        {/* 內容區域 */}
        <div className="relative z-10 p-6">
          <div className="mb-4">
            <h5 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 leading-tight mb-3">
              {title}
            </h5>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
