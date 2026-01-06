"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image
          src="/images/kuang-ti.jpg"
          width={500}
          height={500}
          alt="Kuang-Ti"
          className="rounded-xl"
        />
        <div className="mt-4 flex h-full flex-col justify-center text-left text-2xl md:mt-0">
          <h2 className="mb-4 text-4xl font-bold">關於我</h2>
          <p className="text-base lg:text-lg">
            我是楊光地，一名創新者、網頁工程師。
            從國小第一次接觸到程式開始，我就沉迷於那種實現心中想法的成就感。
            每當看到他人因為我的作品而感動，變是我在這條路上前進的最大動力。
            我想將這份感動分享出去，也因此踏入教育領域，創辦了程式貓科技教育。
          </p>
          <br />
          <p className="text-base lg:text-lg">
            在人工智慧時代下，跨域是最關鍵的能力。
            除了網頁前後端開發外，我積極累積資訊安全、競賽程式領域經驗，並學習
            DevOps 知識。 在曾嘗試的領域中，不乏 FRC 工業機器人、Discord
            Bot、手機 App 等等。
            這些項目與我於地理、人文領域的興趣結合，讓我能夠創造出更多元的作品。
          </p>
        </div>
      </div>
    </section>
  );
}
