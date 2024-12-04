export const metadata = {
  title: "競賽獲獎 | 楊光地",
  description: "這裡記錄了我從小時候到目前為止，獲得過重大的獎項。",
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
