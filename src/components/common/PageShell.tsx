import type { CSSProperties, ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div
      style={
        {
          "--mobile-banner-offset": "40px",
          "--mobile-banner-offset-md": "36px",
        } as CSSProperties
      }
      className={`pt-[var(--mobile-banner-offset)] md:pt-[var(--mobile-banner-offset-md)] lg:pt-0 ${className}`}
    >
      {children}
    </div>
  );
}
