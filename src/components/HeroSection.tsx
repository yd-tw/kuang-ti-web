"use client";

import Image from "next/image";
import Link from "next/link";
import AchievementsSection from "@/components/AchievementsSection";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="flex flex-col min-h-screen justify-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 sm:col-span-8 place-self-center sm:justify-self-start text-center sm:text-left order-2 sm:order-1"
        >
          <h1 className="mb-4 text-xl sm:text-2xl md:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="bg-linear-to-r from-red-500 to-orange-600 bg-clip-text text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-transparent">
              YD 楊光地{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "擔任機器人社活動長",
                1000,
                "創辦程式貓教育社群",
                1000,
                "擔任FRC程式組組長",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-sm sm:text-base lg:text-xl">
            一位立志成為軟體工程師的高中生自我介紹
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/link"
              className="inline-block w-full rounded-full bg-linear-to-br from-orange-500 to-purple-500 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white hover:bg-blue-600 sm:w-fit"
            >
              聯絡我
            </Link>
            <Link
              href="https://github.com/yd-tw"
              className="inline-block w-full rounded-full bg-linear-to-br from-orange-500 to-purple-500 px-1 py-1 text-sm sm:text-base text-white hover:bg-blue-600 sm:w-fit"
            >
              <span className="block rounded-full bg-black px-3 py-1 sm:px-5 sm:py-2 hover:bg-gray-800/70">
                前往我的Github主頁
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 sm:col-span-4 place-self-center order-1 sm:order-2"
        >
          <div className="relative h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] lg:h-[400px] lg:w-[400px] rounded-full bg-gray-800">
            <Image
              src="/images/logo.svg"
              alt="hero image"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
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
