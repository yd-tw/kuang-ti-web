import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { baseUrl } from "@/app/sitemap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | 楊光地",
    default: "楊光地",
  },
  description: "一個熱愛科技的高中生自介",
  openGraph: {
    url: `/`,
    images: "/og?title=楊光地&subtitle=一個熱愛科技的高中生自介",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className={`${inter.className}`}>
        <GoogleAnalytics gaId="G-ZZXCTQ4C09" />
        <div className="bg-gray-50 dark:bg-gray-900">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
