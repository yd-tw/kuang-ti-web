import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="footer border-t border-gray-700 bg-[#1a1a1a] text-white">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-center md:px-12">
        <div className="text-center md:text-left">
          <span className="text-lg font-semibold">kuang-ti.com</span>
          <p className="mt-1 text-gray-300">All rights reserved 2024-2025</p>
          <p className="text-gray-300">Web version: 1.1.1</p>
        </div>

        <div className="flex space-x-6">
          <Link href="https://github.com/yd-tw" aria-label="GitHub">
            <Icon icon="mdi:github" className="text-2xl cursor-pointer transition duration-300 hover:text-gray-400" />
          </Link>
          <Link href="https://www.youtube.com/@playeryd" aria-label="YouTube">
            <Icon icon="mdi:youtube" className="text-2xl cursor-pointer transition duration-300 hover:text-gray-400" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100022136377891" aria-label="Facebook">
            <Icon icon="mdi:facebook" className="text-2xl cursor-pointer transition duration-300 hover:text-gray-400" />
          </Link>
          <Link href="https://www.instagram.com/guangdiy/" aria-label="Instagram">
            <Icon icon="mdi:instagram" className="text-2xl cursor-pointer transition duration-300 hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
}