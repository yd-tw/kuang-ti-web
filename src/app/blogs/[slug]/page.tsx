import { use } from "react";
import { getPostBySlug, getAllPostParams } from "next-staticblog";
import ReactMarkdown from "react-markdown";
import { baseUrl } from "@/app/sitemap";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      url: `/blogs/${params.slug}`,
      images: `/og?title=${post.metadata.title}&subtitle=${post.metadata.description}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return getAllPostParams();
}

export default function Page(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const post = getPostBySlug(params.slug);

  return (
    <div className="flex justify-center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.description,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blogs/${post.slug}`,
            author: {
              "@type": "Person",
              name: "楊光地",
            },
          }),
        }}
      />
      <div className="max-w-prose mx-auto p-4 bg-orange-100 sm:rounded-xl sm:m-4">
        <h1 className="text-3xl font-bold">{post.metadata.title}</h1>
        <p className="text-gray-800">{post.metadata.publishedAt}</p>
        <div className="prose mt-4">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
