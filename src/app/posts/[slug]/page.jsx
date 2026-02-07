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
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.data.title} | Jvanah Initiative`,
    description: post.data.excerpt,
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
      images: [{ url: post.data.image }],
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

  const components = {
    img: ({ src, alt }) => (
      <Image
        src={src}
        alt={alt || ""}
        width={700}
        height={450}
        className="rounded-2xl w-full my-8 shadow-soft"
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, 700px"
      />
    ),
    p: ({ node, children }) => {
      if (node.children.length === 1 && node.children[0].tagName === "img") {
        return <>{children}</>;
      }
      return (
        <p className="text-base md:text-lg text-navy-600 leading-relaxed my-4">
          {children}
        </p>
      );
    },
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold text-navy-900 my-6 text-center">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-navy-900 my-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-navy-800 my-4">
        {children}
      </h3>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-sage-600 hover:text-sage-700 underline underline-offset-2 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-3 border-sage-300 pl-5 my-6 text-navy-500 italic">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-1 my-4 text-navy-600">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1 my-4 text-navy-600">
        {children}
      </ol>
    ),
  };

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      {post.data.image && (
        <div className="relative w-full h-64 md:h-[420px]">
          <Image
            src={post.data.image}
            alt={post.data.title}
            fill
            style={{ objectFit: "cover" }}
            className="brightness-[0.85]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-50 via-transparent to-transparent" />
        </div>
      )}

      {/* Article */}
      <article className="max-w-2xl mx-auto px-5 sm:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-soft-md p-8 md:p-12 mb-8">
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3 text-balance">
              {post.data.title}
            </h1>
            <p className="text-sm text-navy-300">{post.data.date}</p>
          </header>

          <div className="prose-custom">
            <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-sage-600 hover:text-sage-700 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </article>
    </div>
  );
}
