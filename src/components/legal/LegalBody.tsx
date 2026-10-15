import Link from "next/link";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

import { toHeadingId } from "@/lib/headingId";
import { markdownHeadingText } from "@/lib/markdownHeadingText";

const headingFocusClass = "[&:focus]:outline-none";

function createMarkdownComponents(seenCounts: Map<string, number>): Components {
  const headingId = (children: ReactNode) =>
    toHeadingId(markdownHeadingText(children), seenCounts);

  return {
    p: ({ children }) => (
      <p className="block text-base leading-6 text-gray-5 md:leading-6">
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-gray-1">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-5">{children}</em>,
    h2: ({ children }) => {
      const id = headingId(children);
      return (
        <h2
          id={id}
          tabIndex={-1}
          className={`mt-8 scroll-mt-28 text-xl font-bold leading-9 text-gray-1 ${headingFocusClass}`}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = headingId(children);
      return (
        <h3
          id={id}
          tabIndex={-1}
          className={`mt-4 scroll-mt-28 text-lg font-medium leading-7 text-gray-1 ${headingFocusClass}`}
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      const id = headingId(children);
      return (
        <h4
          id={id}
          tabIndex={-1}
          className={`mt-4 scroll-mt-28 text-base font-semibold text-gray-1 ${headingFocusClass}`}
        >
          {children}
        </h4>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc space-y-2 pl-5 text-base text-gray-5 marker:text-gray-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-5 text-base text-gray-5">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="my-1 leading-6">{children}</li>,
    a: ({ href, children }) => {
      const isInternal = href?.startsWith("/");
      const linkClass =
        "text-brand-rose-1 underline decoration-brand-rose-1 underline-offset-2 transition-opacity duration-200 hover:opacity-80";
      if (isInternal && href) {
        return (
          <Link href={href} className={linkClass}>
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {children}
        </a>
      );
    },
    small: ({ children }) => (
      <small className="text-sm text-gray-6">{children}</small>
    ),
  };
}

interface LegalBodyProps {
  body: string;
  className?: string;
}

export default function LegalBody({ body, className = "" }: LegalBodyProps) {
  const seenCounts = new Map<string, number>();
  const components = createMarkdownComponents(seenCounts);

  return (
    <div
      className={`prose-article mx-auto flex w-full max-w-[1024px] flex-col gap-6 px-5 pb-24 [&>:first-child]:mt-0 md:px-12 lg:px-16 ${className}`}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {body}
      </ReactMarkdown>
    </div>
  );
}
