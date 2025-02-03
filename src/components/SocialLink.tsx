"use client";

import { Icon } from "@iconify/react";

const socialLinks = [
  {
    name: "Github: yd-tw",
    href: "https://github.com/yd-tw",
    icon: "skill-icons:github-light",
  },
  {
    name: "Youtube: YD遊戲頻",
    href: "https://www.youtube.com/@playeryd",
    icon: "logos:youtube-icon",
  },
  {
    name: "Facebook: 楊光地",
    href: "https://www.facebook.com/profile.php?id=100022136377891",
    icon: "logos:facebook",
  },
  {
    name: "Instagram: guangdiy",
    href: "https://www.instagram.com/guangdiy/",
    icon: "skill-icons:instagram",
  },
  {
    name: "Threads: guangdiy",
    href: "https://www.threads.net/@guangdiy",
    icon: "bi:threads-fill",
  },
];

export default function SocialLink() {
  return (
    <section id="link">
      <h2 className="my-4 text-center text-4xl font-bold">
        社群連結
      </h2>
      <div className="flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex transform flex-row items-center gap-6 rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-100">
              <span className="transform transition hover:rotate-3 hover:scale-110">
                <Icon
                  icon={link.icon}
                  width="50"
                  height="50"
                  className="hover:opacity-80"
                />
              </span>
              <span className="text-bg font-semibold text-gray-800 md:text-2xl">
                {link.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
