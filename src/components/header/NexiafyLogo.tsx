import Link from "next/link";

/**
 * Nexiafy wordmark used in the fixed header.
 */
export default function NexiafyLogo() {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="flex items-center gap-2 w-[154px] h-[48px]"
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-rose-1 text-sm font-bold text-white"
      >
        N
      </span>
      <span className="text-lg font-bold tracking-tight text-gray-1">
        Nexiafy
      </span>
    </Link>
  );
}
