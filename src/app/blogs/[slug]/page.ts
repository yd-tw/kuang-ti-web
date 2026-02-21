import { permanentRedirect } from "next/navigation";

// 重定向到新的博客路徑
export default async function Redirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  permanentRedirect(`/blog/${slug}`);
}
