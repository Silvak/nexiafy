"use client";

import Image from "next/image";
import { useState } from "react";

interface ArticleImageProps {
  src: string;
  alt: string;
}

export default function ArticleImage({ src, alt }: ArticleImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative mb-10 block w-full cursor-zoom-in border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-rose-1 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-14 md:mb-12"
        aria-label={`View larger: ${alt}`}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-11 md:rounded-2xl">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
            }
          }}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close dialog"
            tabIndex={-1}
          />
          <div className="relative max-h-[90vh] w-full max-w-5xl">
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className="mx-auto max-h-[90vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
