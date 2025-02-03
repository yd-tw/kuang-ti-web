"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image
          src="/images/yang-kuang-ti.png"
          width={500}
          height={500}
          alt="Yang Kuang Ti"
        />
        <div className="mt-4 flex h-full flex-col justify-center text-left text-2xl md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-black">關於我</h2>
          <p className="text-base lg:text-lg">
            從一接觸到程式開始，就十分喜愛這種自動化，虛實整合的魅力。相較於其他
            傳統領域，資訊科學是一門入門門檻較低的領域，也是最有發展潛力的領域。
            從國小我就開始自學，漸漸也確定了自己對這個領域的喜愛。
          </p>
          <br />
          <p className="text-base lg:text-lg">
            相較於演算法等，我更加喜歡做前端、服務的類型。目前所有製作的內容都有發佈，像是
            discord的機器人、手機APP等。也期許在未來大學資工系的學習中，能夠更充實自己的
            程式設計基礎，並回頭來優化這些服務。
          </p>
        </div>
      </div>
    </section>
  );
}
