import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import SignupCard from "@/components/auth/SignupCard";
import { signupContent } from "@/config/signupContent";

export const metadata: Metadata = {
  title: "Sign up | Nexiafy",
  description:
    "Create your Nexiafy account. Self-service sign up is coming soon — leave your email to get notified.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  const { backHome } = signupContent;

  return (
    <main className="fixed inset-0 z-[100] overflow-y-auto bg-[#111111]">
      <Link
        href={backHome.href}
        className="absolute left-5 top-5 z-10 inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-gray-11 px-4 text-sm font-medium text-gray-1 transition-all duration-300 hover:scale-95 hover:opacity-90 md:left-8 md:top-8"
      >
        <ArrowLeft aria-hidden className="h-4 w-4" strokeWidth={2} />
        {backHome.label}
      </Link>

      <div className="flex min-h-full items-center justify-center px-5 py-24">
        <SignupCard />
      </div>
    </main>
  );
}
