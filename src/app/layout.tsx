import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | 楊光地',
    default: '楊光地',
  },
  description: "一個熱愛科技的高中生自介",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className={inter.className}>
        <GoogleAnalytics gaId="G-ZZXCTQ4C09" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
