"use client";

import Image from "next/image";
import Link from "next/link";
import AchievementsSection from "@/components/AchievementsSection";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-2 col-span-1 place-self-center text-center sm:order-1 sm:col-span-8 sm:justify-self-start sm:text-left"
        >
          <h1 className="mb-4 text-xl font-extrabold sm:text-2xl md:text-4xl lg:text-7xl lg:leading-normal">
            <span className="bg-linear-to-r from-red-500 to-orange-600 bg-clip-text text-2xl text-transparent sm:text-4xl md:text-6xl lg:text-8xl">
              YD 楊光地{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "程式貓科技教育創辦人",
                1000,
                "綠洲特殊選才委員/講者",
                1000,
                "康普思後端工程師",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-sm sm:text-base lg:text-2xl">
            新創 / 教育 / 網頁開發 · 建構讓社會更好的系統
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/link"
              className="inline-block w-full rounded-full bg-linear-to-br from-orange-500 to-purple-500 px-4 py-2 text-sm text-white hover:bg-blue-600 sm:w-fit sm:px-6 sm:py-3 sm:text-base"
            >
              聯絡我
            </Link>
            <Link
              href="https://github.com/yd-tw"
              className="inline-block w-full rounded-full bg-linear-to-br from-orange-500 to-purple-500 px-1 py-1 text-sm text-white hover:bg-blue-600 sm:w-fit sm:text-base"
            >
              <span className="block rounded-full bg-black px-3 py-1 hover:bg-gray-800/70 sm:px-5 sm:py-2">
                前往我的Github主頁
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 col-span-1 place-self-center sm:order-2 sm:col-span-4"
        >
          <div className="relative h-37.5 w-37.5 rounded-full border border-gray-500 sm:h-50 sm:w-50 lg:h-100 lg:w-100">
            <Image
              src="/images/logo.svg"
              alt="hero image"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
              width={300}
              height={300}
              priority
            />
          </div>
        </motion.div>
      </div>
      <AchievementsSection />
    </section>
  );
}
