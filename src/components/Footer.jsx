import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer border-t border-gray-700 bg-[#1a1a1a] text-white">
      <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 md:px-12">
        <div className="text-center">
          <span className="text-lg font-semibold">楊光地</span>
          <p className="mt-1 text-gray-500">All rights reserved. 2024</p>
          <p className="text-gray-500">Web version: 1.1.0</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Link href="https://github.com/yd-tw">
            <span className="cursor-pointer transition duration-300 hover:text-gray-400">
              Github
            </span>
          </Link>
          <Link href="https://www.youtube.com/@playeryd">
            <span className="cursor-pointer transition duration-300 hover:text-gray-400">
              Youtube
            </span>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100022136377891">
            <span className="cursor-pointer transition duration-300 hover:text-gray-400">
              Facebook
            </span>
          </Link>
          <Link href="https://www.instagram.com/guangdiy/">
            <span className="cursor-pointer transition duration-300 hover:text-gray-400">
              Instagram
            </span>
          </Link>
          <Link href="https://www.threads.net/@guangdiy">
            <span className="cursor-pointer transition duration-300 hover:text-gray-400">
              Threads
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
