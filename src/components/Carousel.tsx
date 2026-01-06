"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

const imageData = [
  {
    id: 1,
    src: "/images/carousel/1.jpg",
    title: "Next Star Demo Day",
    description: "",
  },
  {
    id: 2,
    src: "/images/carousel/2.jpg",
    title: "網頁開發分享會",
    description: "",
  },
  {
    id: 3,
    src: "/images/carousel/3.jpg",
    title: "綠洲計畫特殊選才講座",
    description: "",
  },
  {
    id: 4,
    src: "/images/carousel/4.jpg",
    title: "樹林高中科系探索",
    description: "",
  },
  {
    id: 5,
    src: "/images/carousel/5.jpg",
    title: "特選戰鬥之路分享",
    description: "",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageData.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // 上一張
  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? imageData.length - 1 : currentIndex - 1,
    );
  };

  // 下一張
  const goToNext = () => {
    setCurrentIndex(
      currentIndex === imageData.length - 1 ? 0 : currentIndex + 1,
    );
  };

  // 跳轉到指定圖片
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="my-12 rounded-3xl border border-gray-300 p-8 dark:border-gray-700"
      id="image-carousel"
    >
      <div className="relative z-10">
        {/* 標題區域 */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
              <ImageIcon className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-orange-500">精選照片</h2>
          </div>
          <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-amber-400 to-orange-400"></div>
        </div>

        {/* 輪播容器 */}
        <div className="relative mx-auto max-w-4xl">
          {/* 主要圖片區域 */}
          <div className="xs:h-56 relative h-48 overflow-hidden rounded-2xl shadow-2xl shadow-amber-200/20 sm:h-64 md:h-80 lg:h-96 xl:h-125 dark:shadow-amber-900/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={imageData[currentIndex].src}
                  alt={imageData[currentIndex].title}
                  fill
                  className="h-full w-full object-cover"
                />
                {/* 圖片遮罩 */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

                {/* 圖片資訊 */}
                <div className="absolute right-0 bottom-0 left-0 p-3 sm:p-4 md:p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-1 text-sm font-bold text-white sm:mb-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
                  >
                    {imageData[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs text-gray-200 sm:text-sm md:text-base lg:text-lg"
                  >
                    {imageData[currentIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 左右控制按鈕 */}
          <button
            onClick={goToPrevious}
            className="group absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-xl sm:left-4 sm:h-10 sm:w-10 md:h-12 md:w-12 dark:bg-gray-800/90 dark:hover:bg-gray-800"
          >
            <ChevronLeft className="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-amber-600 sm:h-5 sm:w-5 md:h-6 md:w-6 dark:text-gray-300 dark:group-hover:text-amber-400" />
          </button>

          <button
            onClick={goToNext}
            className="group absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:shadow-xl sm:right-4 sm:h-10 sm:w-10 md:h-12 md:w-12 dark:bg-gray-800/90 dark:hover:bg-gray-800"
          >
            <ChevronRight className="h-4 w-4 text-gray-600 transition-colors duration-300 group-hover:text-amber-600 sm:h-5 sm:w-5 md:h-6 md:w-6 dark:text-gray-300 dark:group-hover:text-amber-400" />
          </button>
        </div>

        {/* 指示器點點 */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {imageData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "scale-125 bg-linear-to-r from-amber-400 to-orange-400"
                  : "bg-gray-300 hover:bg-amber-300 dark:bg-gray-600 dark:hover:bg-amber-600"
              }`}
            />
          ))}
        </div>

        {/* 控制面板 */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="group/btn relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-amber-600 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-200/30 dark:hover:shadow-amber-900/30"
          >
            <div className="absolute inset-0 bg-linear-to-r from-amber-700 to-orange-700 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></div>
            {isAutoPlaying ? (
              <Pause className="relative z-10 h-4 w-4" />
            ) : (
              <Play className="relative z-10 h-4 w-4" />
            )}
            <span className="relative z-10">
              {isAutoPlaying ? "暫停播放" : "自動播放"}
            </span>
          </button>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            {currentIndex + 1} / {imageData.length}
          </div>
        </div>
      </div>
    </section>
  );
}
