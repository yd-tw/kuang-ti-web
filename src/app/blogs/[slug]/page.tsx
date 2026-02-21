import { getPostBySlug, getAllPostParams } from "next-posts";
import ReactMarkdown from "react-markdown";
import { baseUrl } from "@/app/sitemap";
import { PostMeta } from "@/types/post";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = getPostBySlug<PostMeta>(slug);
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      url: `/blogs/${slug}`,
      images: `/og?title=${metadata.title}&subtitle=${metadata.description}`,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return getAllPostParams();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, content } = getPostBySlug<PostMeta>(slug);

  return (
    <div className="flex min-h-screen justify-center bg-gray-50 dark:bg-gray-900">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: metadata.title,
            datePublished: metadata.publishedAt,
            dateModified: metadata.publishedAt,
            description: metadata.description,
            image: metadata.image
              ? `${baseUrl}${metadata.image}`
              : `/og?title=${encodeURIComponent(metadata.title)}`,
            url: `${baseUrl}/blogs/${slug}`,
            author: {
              "@type": "Person",
              name: "楊光地",
            },
          }),
        }}
      />
      <article className="mx-auto max-w-prose bg-white p-4 shadow-sm sm:m-4 sm:rounded-xl dark:bg-gray-800 dark:shadow-gray-700/50">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {metadata.title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {metadata.publishedAt}
        </p>
        <div className="prose prose-gray dark:prose-invert mt-4">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
