export const metadata = {
  title: "社群連結 | 楊光地",
  description: "用一個列表完整的列出我公開的連結",
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
