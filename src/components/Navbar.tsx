"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const navLinks = [
  {
    title: "個人介紹",
    path: "/about",
  },
  {
    title: "競賽獲獎",
    path: "/contest",
  },
  {
    title: "作品成果",
    path: "/projects",
  },
  {
    title: "社群連結",
    path: "/link",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-auto border border-[#33353F] bg-[#121212] bg-opacity-100">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4">
        <Link
          href={"/"}
          className="text-2xl font-semibold text-white md:text-5xl"
        >
          楊光地
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
            >
              <Icon icon="mdi:menu" className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
            >
              <Icon icon="mdi:close" className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="block rounded py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white sm:text-xl md:p-0"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <ul className="flex flex-col items-center py-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="block rounded py-2 pl-3 pr-4 text-[#ADB7BE] hover:text-white sm:text-xl md:p-0"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
