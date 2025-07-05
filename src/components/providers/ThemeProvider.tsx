"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextThemeProvider defaultTheme="dark" enableSystem={true}>
      {children}
    </NextThemeProvider>
  );
}
