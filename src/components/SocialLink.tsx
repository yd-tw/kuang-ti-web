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
      className="relative my-12 rounded-3xl border border-gray-200/70 bg-gray-50 p-8 shadow-xl shadow-gray-200/20 dark:border-gray-700/50 dark:bg-gray-900 dark:shadow-slate-900/20"
      id="link"
    >
      <div className="relative z-10">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-amber-400 to-orange-500">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <h2 className="bg-linear-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent">
              社群連結
            </h2>
          </div>
          <div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-amber-400 to-orange-400"></div>
        </div>

        <div className="space-y-4">
          {social.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-200/20 dark:border-gray-700/30 dark:bg-gray-800/80 dark:hover:shadow-amber-900/20"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* 卡片背景效果 */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-amber-50/50 to-orange-50/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-amber-900/10 dark:to-orange-900/10"></div>

              {/* 左側指示器 */}
              <div className="absolute top-0 left-0 h-full w-2 origin-top scale-y-0 transform rounded-l-2xl bg-linear-to-b from-amber-400 to-orange-400 transition-transform duration-300 group-hover:scale-y-100"></div>

              <div className="relative z-10 p-6">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                  {/* 圖標 */}
                  <div className="shrink-0">
                    <div className="h-12.5 w-12.5 transform transition hover:scale-110 hover:rotate-3">
                      <Image
                        src={link.icon}
                        alt={`${link.name} icon`}
                        width={50}
                        height={50}
                        className="rounded-lg object-contain dark:invert"
                      />
                    </div>
                  </div>

                  {/* 社群名稱 */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl leading-tight font-bold text-gray-900 transition-colors duration-300 group-hover:text-amber-600 md:text-2xl dark:text-white dark:group-hover:text-amber-400">
                      {link.name}
                    </h3>
                  </div>

                  {/* 右側裝飾指示器 */}
                  <div className="flex items-center justify-center lg:ml-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-amber-500 to-orange-500 shadow-md transition-all duration-300 group-hover:shadow-lg">
                      <Star className="h-5 w-5 text-white" />
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
