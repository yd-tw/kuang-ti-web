"use client";

import { useState, useEffect } from "react";
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
    title: "網頁開發分享會",
    description: "",
  },
  {
    id: 2,
    src: "/images/carousel/2.jpg",
    title: "綠洲計畫特殊選才講座",
    description: "",
  },
  {
    id: 3,
    src: "/images/carousel/3.jpg",
    title: "樹林高中科系探索",
    description: "",
  },
  {
    id: 4,
    src: "/images/carousel/4.jpg",
    title: "特選後生涯指南分享",
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
      className="relative bg-gray-50 dark:bg-gray-900 p-8 my-12 rounded-3xl border border-gray-200/70 dark:border-gray-700/50 shadow-xl shadow-gray-200/20 dark:shadow-slate-900/20"
      id="image-carousel"
    >
      <div className="relative z-10">
        {/* 標題區域 */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              精選照片
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto"></div>
        </div>

        {/* 輪播容器 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 主要圖片區域 */}
          <div className="relative h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-amber-200/20 dark:shadow-amber-900/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src={imageData[currentIndex].src}
                  alt={imageData[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* 圖片遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* 圖片資訊 */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2"
                  >
                    {imageData[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg"
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
            className="cursor-pointer absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" />
          </button>

          <button
            onClick={goToNext}
            className="cursor-pointer absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" />
          </button>
        </div>

        {/* 指示器點點 */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {imageData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-amber-400 to-orange-400 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-amber-300 dark:hover:bg-amber-600"
              }`}
            />
          ))}
        </div>

        {/* 控制面板 */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="cursor-pointer group/btn relative inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-md hover:shadow-lg hover:shadow-amber-200/30 dark:hover:shadow-amber-900/30 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            {isAutoPlaying ? (
              <Pause className="relative z-10 w-4 h-4" />
            ) : (
              <Play className="relative z-10 w-4 h-4" />
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
