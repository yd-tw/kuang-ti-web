import Link from "next/link";
import Image from "next/image";
import pkg from "@/../package.json";

export default function Footer() {
  return (
    <footer className="footer border-t border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-center md:px-12">
        <div className="text-center md:text-left">
          <span className="text-lg font-semibold">kuang-ti.com</span>
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            All rights reserved 2024-2026
          </p>
          <p className="text-gray-700 dark:text-gray-300">{`Web version: ${pkg.version}`}</p>
        </div>

        <div className="flex space-x-6">
          <Link href="mailto:me@kuang-ti.com" aria-label="Mail">
            <Image
              src="/icons/envelope-solid.svg"
              alt="Mail icon"
              width={24}
              height={24}
              className="cursor-pointer transition duration-300 hover:opacity-70 dark:invert"
            />
          </Link>
          <Link href="https://github.com/yd-tw" aria-label="GitHub">
            <Image
              src="/icons/github-brands-solid.svg"
              alt="GitHub icon"
              width={24}
              height={24}
              className="cursor-pointer transition duration-300 hover:opacity-70 dark:invert"
            />
          </Link>
          <Link href="https://www.youtube.com/@playeryd" aria-label="YouTube">
            <Image
              src="/icons/youtube-brands-solid.svg"
              alt="YouTube icon"
              width={24}
              height={24}
              className="cursor-pointer transition duration-300 hover:opacity-70 dark:invert"
            />
          </Link>
          <Link
            href="https://www.instagram.com/guangdiy/"
            aria-label="Instagram"
          >
            <Image
              src="/icons/instagram-brands-solid.svg"
              alt="Instagram icon"
              width={24}
              height={24}
              className="cursor-pointer transition duration-300 hover:opacity-70 dark:invert"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
