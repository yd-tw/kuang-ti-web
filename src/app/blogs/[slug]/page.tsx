import React from "react";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.md$/, "") }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="mt-24 text-3xl font-bold">{post.metadata.title}</h1>
      <p className="text-gray-500">{post.metadata.date}</p>
      <div className="prose mt-4">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}
