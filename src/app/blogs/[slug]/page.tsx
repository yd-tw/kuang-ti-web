import { use } from "react";
import { getPostBySlug, getAllPostParams } from "next-staticblog";
import ReactMarkdown from "react-markdown";

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
