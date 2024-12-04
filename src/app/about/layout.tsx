export const metadata = {
  title: "個人介紹 | 楊光地",
  description: "一路程長以來的心路歷程",
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
