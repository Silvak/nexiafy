"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  function handleBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push("/resources");
  }

  return (
    <button
      type="button"
      id="article-detail-back"
      onClick={handleBack}
      className="inline-flex h-11 min-h-[44px] w-11 min-w-[44px] items-center justify-center rounded-full bg-white/[0.06] text-gray-1 transition-colors hover:bg-white/[0.1] md:h-8 md:min-h-0 md:w-8 md:min-w-0"
      aria-label="Go back"
    >
      <ArrowLeft
        aria-hidden
        width={14}
        height={14}
        strokeWidth={1.5}
        className="text-gray-1"
      />
    </button>
  );
}
