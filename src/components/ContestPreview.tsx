"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react";

const contest = [
  { name: "2025 Next Star Demo Day", rank: "入選決賽", icon: "lightbulb" },
  { name: "2025 ICPC Asia Taichung Regional", rank: "參賽", icon: "target" },
  { name: "2025 雙北城市儀表板大黑客松", rank: "入選", icon: "lightbulb" },
  { name: "2025 全國 AI 專題創意競賽", rank: "入選決賽", icon: "lightbulb" },
  { name: "2025 ICPC Asia TOPC", rank: "銅牌", icon: "star" },
  { name: "2020 TIRT全能機器人國際邀請賽", rank: "全國第三名", icon: "zap" },
  { name: "2023 北科大國際 PBL 競賽工作坊", rank: "第三名", icon: "target" },
  { name: "智慧科技素養與程式設計創新應用競賽", rank: "第三名", icon: "star" },
  { name: "2023 新北市 FRC 機器人新生盃", rank: "聯盟佳作", icon: "zap" },
];

const getIcon = (iconName: string) => {
  const icons = {
    lightbulb: Lightbulb,
    target: Target,
    star: Star,
    zap: Zap,
  };
  const Icon = icons[iconName as keyof typeof icons] || Star;
  return <Icon className="h-8 w-8 text-orange-500" />;
};

export default function ContestPreview() {
  const [displayCount, setDisplayCount] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // 手機
        setDisplayCount(4);
      } else if (width < 1024) {
        // 平板
        setDisplayCount(6);
      } else {
        // 桌面
        setDisplayCount(9);
      }
    };

    handleResize(); // 初始化
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedContests = contest.slice(0, displayCount);

  return (
    <section
      id="contest"
      className="relative my-20 overflow-hidden rounded-3xl border border-gray-200 p-10 backdrop-blur dark:border-gray-700"
    >
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .floating-card {
          animation: float 3s ease-in-out infinite;
        }

        .floating-card:nth-child(even) {
          animation: float-reverse 3.5s ease-in-out infinite;
        }

        .floating-card:nth-child(3n) {
          animation-duration: 4s;
        }
      `}</style>

      {/* Header */}
      <div className="relative z-10 mb-14 text-center">
        <div className="mb-4 inline-flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-orange-500">競賽成果</h2>
        </div>
        <p className="mx-auto max-w-xl text-white/90">
          歷年參與之競賽與計畫,涵蓋程式設計、資訊科學與工程實作。
        </p>
      </div>

      {/* Floating Cards Container */}
      <div className="relative mx-auto h-120">
        {displayedContests.map((item, index) => {
          // 針對不同螢幕尺寸的位置配置
          const mobilePositions = [
            { top: "0%", left: "0%" },
            { top: "40%", left: "-20%" },
            { top: "20%", right: "-20%" },
            { top: "60%", right: "-10%" },
          ];

          const tabletPositions = [
            { top: "5%", left: "8%" },
            { top: "15%", right: "10%" },
            { top: "35%", left: "15%" },
            { top: "30%", right: "25%" },
            { top: "60%", left: "10%" },
            { top: "65%", right: "15%" },
          ];

          const desktopPositions = [
            { top: "5%", left: "8%" },
            { top: "15%", right: "10%" },
            { top: "35%", left: "5%" },
            { top: "30%", left: "35%" },
            { top: "20%", right: "25%" },
            { top: "55%", left: "15%" },
            { top: "50%", right: "20%" },
            { top: "70%", left: "25%" },
            { top: "75%", right: "12%" },
          ];

          let position;
          if (displayCount === 4) {
            position = mobilePositions[index];
          } else if (displayCount === 6) {
            position = tabletPositions[index];
          } else {
            position = desktopPositions[index];
          }

          return (
            <div
              key={index}
              className="floating-card group absolute w-48"
              style={position}
            >
              <div className="hover:shadow-3xl relative z-10 flex h-full w-full flex-col items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/20">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:rotate-12">
                  {getIcon(item.icon)}
                </div>

                {/* Contest Name */}
                <h3 className="text-center text-sm leading-tight font-bold text-white">
                  {item.name}
                </h3>

                {/* Rank Badge */}
                <div className="mt-auto inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-amber-400 to-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                  <Star className="h-3 w-3" />
                  {item.rank}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-8 flex justify-center">
        <Link
          href="/contest"
          className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 font-bold hover:scale-105"
        >
          查看完整競賽列表
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
