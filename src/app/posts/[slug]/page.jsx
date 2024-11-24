// app/posts/[slug]/page.jsx

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";

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

export async function generateMetadata({ params }) {
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

function getPostBySlug(slug) {
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  for (const filename of filenames) {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      return { data, content };
    }
  }

  return null;
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Custom components for rendering markdown content
  const components = {
    img: ({ src, alt }) => (
      <Image
        src={src}
        alt={alt || ""}
        width={600}
        height={600}
        className="rounded-lg max-w-full my-8 mx-auto"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 700px"
      />
    ),
    p: ({ node, children }) => {
      if (node.children.length === 1 && node.children[0].tagName === "img") {
        return <>{children}</>;
      }
      return (
        <p className="text-lg text-primary leading-relaxed my-4">{children}</p>
      );
    },
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-4 text-center">{children}</h1>
    ),
    // ... other components
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <article className="max-w-sm md:max-w-3xl mx-auto">
        <h1 className="text-center text-5xl font-bold mb-8">
          {post.data.title}
        </h1>
        <p className="text-center text-primary mb-12">{post.data.date}</p>
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
