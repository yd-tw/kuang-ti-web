import { use } from "react";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.md$/, "") }));
}

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const post = getPostBySlug(params.slug);

  return (
    <div className="max-w-2xl mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-gray-200">
        {post.metadata.title}
      </h1>
      <p className="text-gray-200">{post.metadata.date}</p>
      <div className="prose mt-4 text-gray-200">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
