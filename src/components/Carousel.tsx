"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const imageData = [
  {
    id: 1,
    src: "https://picsum.photos/800/500?random=1",
    title: "美麗風景 1",
    description: "這是一張美麗的風景照片",
  },
  {
    id: 2,
    src: "https://picsum.photos/800/500?random=2",
    title: "美麗風景 2",
    description: "這是另一張美麗的風景照片",
  },
  {
    id: 3,
    src: "https://picsum.photos/800/500?random=3",
    title: "美麗風景 3",
    description: "第三張美麗的風景照片",
  },
  {
    id: 4,
    src: "https://picsum.photos/800/500?random=4",
    title: "美麗風景 4",
    description: "第四張美麗的風景照片",
  },
  {
    id: 5,
    src: "https://picsum.photos/800/500?random=5",
    title: "美麗風景 5",
    description: "第五張美麗的風景照片",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 自動播放功能
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageData.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000); // 每4秒切換一次

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
  const goToSlide = (index: any) => {
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
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              圖片輪播
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto"></div>
        </div>

        {/* 輪播容器 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 主要圖片區域 */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-amber-200/20 dark:shadow-amber-900/20">
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
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                  >
                    {imageData[currentIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-200 text-lg"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 group"
          >
            <svg
              className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* 指示器點點 */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {imageData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
            className="group/btn relative inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl shadow-md hover:shadow-lg hover:shadow-amber-200/30 dark:hover:shadow-amber-900/30 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-orange-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <svg
              className="relative z-10 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isAutoPlaying ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              )}
            </svg>
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
