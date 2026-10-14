import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const markdownComponents: Components = {
  p: ({ children }) => (
    <p className="block text-base leading-6 text-gray-5 md:leading-6">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-gray-1">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-gray-5">{children}</em>,
  h2: ({ children }) => (
    <h2 className="text-lg font-bold text-gray-1 md:text-xl">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-bold text-gray-1 md:text-lg">{children}</h3>
  ),
  ul: ({ children }) => (
    <ul className="list-disc space-y-2 pl-6 text-base text-gray-5">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal space-y-2 pl-6 text-base text-gray-5">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-6">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-gray-8 pl-4 italic text-gray-5">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => {
    const isInternal = href?.startsWith("/");
    if (isInternal && href) {
      return (
        <Link href={href} className="text-brand-rose-1 underline hover:opacity-80">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-rose-1 underline hover:opacity-80"
      >
        {children}
      </a>
    );
  },
};

interface ArticleBodyProps {
  body: string;
}

export default function ArticleBody({ body }: ArticleBodyProps) {
  return (
    <article className="prose-article flex min-w-0 flex-col gap-6 [&>:first-child]:mt-0">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {body}
      </ReactMarkdown>
    </article>
  );
}
