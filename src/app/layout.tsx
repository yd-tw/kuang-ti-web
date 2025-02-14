import "./globals.css";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google";
import { baseUrl } from "@/app/sitemap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className={`${inter.className} bg-orange-50`}>
        <GoogleAnalytics gaId="G-ZZXCTQ4C09" />
        <SpeedInsights/>
        <Analytics/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
