"use client";

import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

type Achievement = {
  metric: string;
  value: string;
  postfix?: string;
  prefix?: string;
};

const achievementsList: Achievement[] = [
  { metric: "APCS", value: "4", postfix: "級" },
  { metric: "競賽獲獎", value: "20", postfix: "+" },
  { metric: "服務使用者", value: "1000", postfix: "+" },
  { metric: "專案數量", value: "30", postfix: "+" },
  { metric: "社群追蹤數", value: "150", postfix: "+" },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="px-4 py-8 sm:py-16 xl:gap-16 xl:px-16">
      <div className="flex flex-col items-center justify-between rounded-md px-16 py-8 sm:flex-row sm:border sm:border-[#33353F]">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="mx-4 my-4 flex flex-col items-center justify-center sm:my-0"
          >
            <h2 className="flex flex-row text-4xl font-bold text-white">
              {achievement.prefix}
              <span className="text-4xl font-bold text-white">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
              </span>
              {achievement.postfix}
            </h2>
            <p className="text-base text-[#ADB7BE]">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
