import { getPostBySlug, getAllPostParams } from "next-staticblog";
import ReactMarkdown from "react-markdown";
import { baseUrl } from "@/app/sitemap";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      url: `/blogs/${slug}`,
      images: `/og?title=${post.metadata.title}&subtitle=${post.metadata.description}`,
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
  const post = getPostBySlug(slug);

  return (
    <div className="flex min-h-screen justify-center bg-gray-50 dark:bg-gray-900">
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
              : `/og?title=${encodeURIComponent(post.metadata.title as string)}`,
            url: `${baseUrl}/blogs/${post.slug}`,
            author: {
              "@type": "Person",
              name: "楊光地",
            },
          }),
        }}
      />
      <div className="mx-auto max-w-prose bg-white p-4 shadow-sm sm:m-4 sm:rounded-xl dark:bg-gray-800 dark:shadow-gray-700/50">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {post.metadata.title as string}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {post.metadata.publishedAt as string}
        </p>
        <div className="prose prose-gray dark:prose-invert mt-4">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
