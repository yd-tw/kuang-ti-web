import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { baseUrl } from "@/app/sitemap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";

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
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider>
          <GoogleTagManager gtmId="GTM-W5M38VHM" />
          <div className="bg-gray-50 dark:bg-zinc-900">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
