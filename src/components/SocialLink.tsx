"use client";

import { Icon } from "@iconify/react";
import social from "@/config/social.json";

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
