"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import DarkModeToggle from "../DarkModeToggle";

const navigation = [
  { name: "個人介紹", href: "/about" },
  { name: "競賽獲獎", href: "/contest" },
  { name: "專案列表", href: "/projects" },
  { name: "社群連結", href: "/link" },
  { name: "部落格", href: "/blogs" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full mx-auto bg-gray-50/90 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">開啟選單</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex items-center">
            <Link href="/" passHref>
              <div className="flex flex-row items-center space-x-4">
                <span className="text-3xl font-semibold">YD 楊光地</span>
              </div>
            </Link>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <span className="cursor-pointer rounded-md px-3 py-2 text-xl text-gray-900 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="text-center lg:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <span
                  className="block cursor-pointer border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
