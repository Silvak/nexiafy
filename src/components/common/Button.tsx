import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-rose-1 text-white hover:bg-brand-rose-1/90",
  secondary: "border border-white/5 bg-gray-10 text-gray-1 hover:bg-gray-9",
};

interface ButtonProps {
  children: ReactNode;
  href: string;
  id?: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
}

/** CTA button, used as a full-width-safe pill link in the hero and section CTAs. */
export default function Button({
  children,
  href,
  id,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  return (
    <Link
      id={id}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex h-14 shrink-0 items-center justify-center rounded-full px-8 text-sm font-bold transition-all duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] hover:scale-95 hover:opacity-90 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
