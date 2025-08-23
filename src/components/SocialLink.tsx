"use client";

import Image from "next/image";
import { CheckCircle, Star } from "lucide-react";

const social = [
  {
    name: "Mail: me@kuang-ti.com",
    href: "mailto:me@kuang-ti.com",
    icon: "/icons/envelope-solid.svg",
  },
  {
    name: "Instagram: guangdiy",
    href: "https://www.instagram.com/guangdiy/",
    icon: "/icons/instagram-brands-solid.svg",
  },
  {
    name: "Github: yd-tw",
    href: "https://github.com/yd-tw",
    icon: "/icons/github-brands-solid.svg",
  },
  {
    name: "Youtube: YD遊戲頻",
    href: "https://www.youtube.com/@playeryd",
    icon: "/icons/youtube-brands-solid.svg",
  },
  {
    name: "Facebook: 楊光地",
    href: "https://www.facebook.com/profile.php?id=100022136377891",
    icon: "/icons/facebook-brands-solid.svg",
  },
  {
    name: "Threads: guangdiy",
    href: "https://www.threads.net/@guangdiy",
    icon: "/icons/threads-brands-solid.svg",
  },
  {
    name: "Discord: yd-tw",
    href: "https://discord.com/",
    icon: "/icons/discord-brands-solid.svg",
  },
];

export default function SocialLink() {
  return (
    <section
      className="relative bg-gray-50 dark:bg-gray-900 p-8 my-12 rounded-3xl border border-gray-200/70 dark:border-gray-700/50 shadow-xl shadow-gray-200/20 dark:shadow-slate-900/20"
      id="link"
    >
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              社群連結
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-4">
          {social.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-2xl hover:shadow-2xl hover:shadow-amber-200/20 dark:hover:shadow-amber-900/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* 卡片背景效果 */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-900/10 dark:to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* 左側指示器 */}
              <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-amber-400 to-orange-400 rounded-l-2xl transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

              <div className="relative z-10 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* 圖標 */}
                  <div className="flex-shrink-0">
                    <div className="w-[50px] h-[50px] transform transition hover:rotate-3 hover:scale-110">
                      <Image
                        src={link.icon}
                        alt={`${link.name} icon`}
                        width={50}
                        height={50}
                        className="object-contain rounded-lg dark:invert"
                      />
                    </div>
                  </div>

                  {/* 社群名稱 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300 leading-tight">
                      {link.name}
                    </h3>
                  </div>

                  {/* 右側裝飾指示器 */}
                  <div className="flex items-center justify-center lg:ml-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
