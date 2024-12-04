export const metadata = {
  title: "作品成果 | 楊光地",
  description: "這個網站列出我從小時候到現在所建立的大專案",
};

export default function Layout({ children }) {
  return (
    <html lang="zh-Hant">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
