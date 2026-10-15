"use client";

import { Link2 } from "lucide-react";
import { useCallback, useLayoutEffect, useState } from "react";

interface ShareLinksProps {
  title: string;
}

export default function ShareLinks({ title }: ShareLinksProps) {
  const [pageUrl, setPageUrl] = useState("");

  useLayoutEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
    } catch {
      /* clipboard may be unavailable */
    }
  }, [pageUrl]);

  if (!pageUrl) {
    return (
      <div
        className="flex w-fit items-center justify-end gap-3 text-gray-1 md:gap-4"
        aria-hidden
      />
    );
  }

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedText = encodeURIComponent(
    `Check out this article by Nexiafy\n\n${title}`,
  );

  return (
    <div className="flex w-fit items-center justify-end gap-3 text-gray-1 md:gap-4">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-all duration-150 hover:text-gray-8 md:min-h-0 md:min-w-0"
        aria-label="Share on Facebook"
      >
        <svg
          className="h-5 w-5 md:h-4 md:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden
        >
          <path d="M30 16c0-7.7-6.3-14-14-14S2 8.3 2 16c0 7 5.1 12.8 11.8 13.8V20h-3.6v-4h3.6v-3.1c0-3.5 2.1-5.4 5.3-5.4 1.5 0 3.1.3 3.1.3v3.4h-1.8c-1.7 0-2.3 1.1-2.3 2.2V16H22l-.6 4h-3.3v9.8C24.9 28.8 30 23 30 16z" />
        </svg>
      </a>
      <a
        href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-all duration-150 hover:text-gray-8 md:min-h-0 md:min-w-0"
        aria-label="Share on X"
      >
        <svg
          className="h-5 w-5 md:h-4 md:w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
        >
          <path
            d="M6.44 3.52H4.46L13.55 16.52H15.53L6.44 3.52ZM2.71 2.55H7.05L10.82 8.03L15.53 2.55H16.81L11.39 8.86L17.29 17.45H12.95L8.97 11.66L4 17.45H2.71L8.4 10.83L2.71 2.55Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-all duration-150 hover:text-gray-8 md:min-h-0 md:min-w-0"
        aria-label="Share on LinkedIn"
      >
        <svg
          className="h-5 w-5 md:h-4 md:w-4"
          viewBox="0 0 32 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M27.08 3H4.92A1.92 1.92 0 0 0 3 4.92v22.16A1.92 1.92 0 0 0 4.92 29h22.16A1.92 1.92 0 0 0 29 27.08V4.92A1.92 1.92 0 0 0 27.08 3ZM10.75 25.15H6.84V12.73h3.91v12.42ZM8.79 11.01A2.24 2.24 0 1 1 11.05 8.77a2.21 2.21 0 0 1-2.26 2.24ZM25.16 25.16H21.25v-6.78c0-2-.85-2.62-1.95-2.62-1.16 0-2.30.87-2.3 2.67v6.73h-3.91V12.74h3.76v1.72h.05c0.38-0.76 1.7-2.07 3.72-2.07 2.18 0 4.54 1.29 4.54 5.09l0 7.68Z" />
        </svg>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-all duration-150 hover:text-gray-8 active:text-gray-1 md:min-h-0 md:min-w-0"
        aria-label="Copy link to clipboard"
      >
        <Link2 className="h-5 w-5 md:h-4 md:w-4" aria-hidden />
      </button>
    </div>
  );
}
