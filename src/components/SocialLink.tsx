"use client";

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
    <section id="link">
      <h2 className="my-4 text-center text-4xl font-bold">社群連結</h2>
      <div className="flex flex-col gap-6">
        {social.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex transform flex-row items-center gap-6 rounded-lg bg-white p-4 shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-100">
              <span className="w-[50px] h-[50px] transform transition hover:rotate-3 hover:scale-110">
                <img
                  src={link.icon}
                  alt={`${link.name} icon`}
                  width={50}
                  height={50}
                  className="object-contain text-gray-800 hover:opacity-80"
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
