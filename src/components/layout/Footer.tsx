import Link from "next/link";
import pkg from "../../../package.json";

export default function Footer() {
  return (
    <footer className="footer border-t bg-orange-900 text-white">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-center md:px-12">
        <div className="text-center md:text-left">
          <span className="text-lg font-semibold">kuang-ti.com</span>
          <p className="mt-1 text-gray-300">All rights reserved 2024-2025</p>
          <p className="text-gray-300">{`Web version: ${pkg.version}`}</p>
        </div>

        <div className="flex space-x-6">
          <Link href="mailto:me@kuang-ti.com" aria-label="Mail">
            <img
              src="/icons/envelope-solid.svg"
              alt="Mail icon"
              width={24}
              height={24}
              className="cursor-pointer transition duration-300 hover:opacity-70 invert"
            />
          </Link>
          <Link href="https://github.com/yd-tw" aria-label="GitHub">
            <img
              src="/icons/github-brands-solid.svg"
              alt="GitHub icon"
              width={24}
              height={24}
              className="cursor-pointer transition duration-300 hover:opacity-70 invert"
            />
          </Link>
          <Link href="https://www.youtube.com/@playeryd" aria-label="YouTube">
            <img
              src="/icons/youtube-brands-solid.svg"
              alt="YouTube icon"
              width={24}
              height={24}
              className="cursor-pointer transition duration-300 hover:opacity-70 invert"
            />
          </Link>
          <Link
            href="https://www.instagram.com/guangdiy/"
            aria-label="Instagram"
          >
            <img
              src="/icons/instagram-brands-solid.svg"
              alt="Instagram icon"
              width={24}
              height={24}
              className="cursor-pointer transition duration-300 hover:opacity-70 invert"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
