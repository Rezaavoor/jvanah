// app/posts/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";

// Define the structure of your post's frontmatter
interface PostData {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

interface Post {
  data: PostData;
  content: string;
}

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return { slug: data.slug };
  });
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.data.title} | Jvanah Initiative`,
    description: post.data.excerpt,
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
      images: [
        {
          url: post.data.image,
        },
      ],
    },
  };
}

function getPostBySlug(slug: string): Post | null {
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  for (const filename of filenames) {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      return { data: data as PostData, content };
    }
  }

  return null;
}

export default function BlogPost({ params }: BlogPostProps) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Custom components for rendering markdown content
  const components = {
    img: ({ src, alt }: { src: string; alt?: string }) => (
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={600}
        className="rounded-lg max-w-full my-8 mx-auto"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 700px"
      />
    ),
    p: ({ node, children }: { node: any; children: React.ReactNode }) => {
      // Check if the paragraph only contains an image
      if (node.children.length === 1 && node.children[0].tagName === "img") {
        return <>{children}</>;
      }
      return <p className="text-lg leading-relaxed my-4">{children}</p>;
    },
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold my-4 text-center">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-semibold my-4">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-semibold my-4">{children}</h3>
    ),
    a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
      <a href={href} className="text-primaryGreen hover:underline">
        {children}
      </a>
    ),
    ul: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside my-4">{children}</ul>
    ),
    ol: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside my-4">{children}</ol>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-center text-5xl font-bold mb-8">
          {post.data.title}
        </h1>
        <p className="text-center text-gray-500 mb-12">{post.data.date}</p>
        {post.data.image && (
          <div className="relative w-full h-64 md:h-96 mb-12">
            <Image
              src={post.data.image}
              alt={post.data.title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </div>
        )}
        <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>
      <div className="mt-12 text-center">
        <Link href="/">
          <span className="text-primaryGreen hover:underline text-lg cursor-pointer">
            ← Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
