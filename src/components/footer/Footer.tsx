import Link from "next/link";
import { Fragment, type ReactNode } from "react";

import NexiafyLogo from "@/components/header/NexiafyLogo";
import {
  footerColumns,
  footerContact,
  footerLegal,
  footerReport,
  footerSocial,
  footerTagline,
  type FooterLink,
} from "@/config/footer";

const socialIcons: Record<string, ReactNode> = {
  "footer-social-youtube": (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden
      className="h-4 w-4 text-gray-1"
    >
      <path d="M14.86 5.2C14.86 5.2 14.72 4.24 14.3 3.81C13.77 3.25 13.17 3.25 12.9 3.22C10.94 3.08 8 3.08 8 3.08H8C8 3.08 5.06 3.08 3.1 3.22C2.83 3.25 2.23 3.25 1.7 3.81C1.28 4.24 1.14 5.2 1.14 5.2C1.14 5.2 1 6.34 1 7.47V8.53C1 9.66 1.14 10.8 1.14 10.8C1.14 10.8 1.28 11.76 1.69 12.18C2.23 12.74 2.93 12.72 3.24 12.78C4.36 12.89 8 12.92 8 12.92C8 12.92 10.94 12.92 12.9 12.78C13.17 12.74 13.77 12.74 14.3 12.18C14.72 11.76 14.86 10.8 14.86 10.8C14.86 10.8 15 9.66 15 8.53V7.47C15 6.34 14.86 5.2 14.86 5.2ZM6.55 9.82V5.88L10.34 7.86L6.55 9.82Z" />
    </svg>
  ),
  "footer-social-twitter": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
      className="h-4 w-4 text-gray-1"
    >
      <path d="M5.4 13.69C10.69 13.69 13.58 9.31 13.58 5.52C13.58 5.39 13.58 5.27 13.57 5.14C14.13 4.74 14.61 4.23 15 3.66C14.48 3.89 13.92 4.04 13.35 4.11C13.95 3.75 14.4 3.19 14.61 2.52C14.05 2.85 13.43 3.09 12.79 3.22C12.36 2.76 11.78 2.45 11.16 2.35C10.54 2.25 9.9 2.35 9.34 2.65C8.78 2.95 8.34 3.42 8.08 4C7.82 4.58 7.75 5.22 7.89 5.84C6.75 5.78 5.64 5.48 4.62 4.97C3.6 4.45 2.7 3.72 1.97 2.84C1.61 3.47 1.49 4.22 1.66 4.93C1.83 5.64 2.26 6.26 2.86 6.67C2.41 6.66 1.96 6.53 1.56 6.31V6.35C1.56 7.01 1.79 7.65 2.21 8.17C2.63 8.68 3.21 9.03 3.86 9.16C3.44 9.28 3 9.3 2.57 9.21C2.75 9.78 3.11 10.28 3.59 10.64C4.07 11 4.65 11.2 5.25 11.21C4.66 11.68 3.97 12.02 3.24 12.23C2.51 12.43 1.75 12.49 1 12.4C2.31 13.24 3.84 13.69 5.4 13.69" />
    </svg>
  ),
  "footer-social-linkedin": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
      className="h-4 w-4 text-gray-1"
    >
      <path d="M13.54 1.5H2.46C2.21 1.5 1.96 1.6 1.78 1.78C1.6 1.96 1.5 2.21 1.5 2.46V13.54C1.5 13.79 1.6 14.04 1.78 14.22C1.96 14.4 2.21 14.5 2.46 14.5H13.54C13.79 14.5 14.04 14.4 14.22 14.22C14.4 14.04 14.5 13.79 14.5 13.54V2.46C14.5 2.21 14.4 1.96 14.22 1.78C14.04 1.6 13.79 1.5 13.54 1.5ZM5.37 12.57H3.42V6.37H5.37V12.57ZM4.4 5.51C4.17 5.5 3.96 5.44 3.77 5.31C3.59 5.19 3.45 5.01 3.36 4.81C3.28 4.6 3.26 4.38 3.3 4.16C3.35 3.94 3.45 3.74 3.61 3.59C3.77 3.43 3.97 3.33 4.19 3.28C4.4 3.24 4.63 3.26 4.83 3.35C5.04 3.43 5.21 3.58 5.34 3.76C5.46 3.95 5.52 4.16 5.52 4.38C5.53 4.53 5.5 4.68 5.44 4.82C5.39 4.96 5.3 5.08 5.2 5.18C5.09 5.29 4.97 5.37 4.83 5.43C4.69 5.48 4.54 5.51 4.4 5.51ZM12.58 12.58H10.63V9.19C10.63 8.19 10.2 7.88 9.65 7.88C9.07 7.88 8.5 8.32 8.5 9.21V12.58H6.55V6.37H8.43V7.23H8.45C8.64 6.85 9.3 6.2 10.31 6.2C11.4 6.2 12.58 6.84 12.58 8.74L12.58 12.58Z" />
    </svg>
  ),
};

function FooterAnchor({
  link,
  className,
}: {
  link: FooterLink;
  className: string;
}) {
  if (link.external) {
    return (
      <a
        id={link.id}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link id={link.id} href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

/**
 * Site footer laid out like the reference: brand and tagline on the left,
 * three link columns on the right, and a legal plus social bar underneath.
 */
export default function Footer() {
  return (
    <footer className="relative grid grid-cols-content justify-center p-5 pt-16 md:p-12 md:pt-36 lg:p-16 lg:pt-44">
      <div className="relative grid grid-cols-1 content-stretch items-start gap-12 rounded-[20px] bg-gray-11 px-8 py-12 md:gap-36 md:rounded-4xl md:p-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0">
          <div className="grid h-full content-start items-start justify-center gap-8 md:justify-start">
            <div className="flex justify-center md:justify-start">
              <NexiafyLogo />
            </div>
            <p className="max-w-xs bg-gradient-to-b from-gray-1 to-gray-7 bg-clip-text text-center text-lg font-medium text-transparent md:text-left">
              {footerTagline}
            </p>
            <div className="flex justify-center md:hidden">
              <Link
                href={footerContact.href}
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-white/5 bg-gray-10 px-6 text-center text-sm font-medium text-gray-1 transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90"
              >
                {footerContact.label}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {footerColumns.map((column) => (
              <nav
                key={column.groups[0]?.title}
                className="relative flex flex-col justify-center space-y-2 py-8 text-center text-sm font-medium text-gray-6 md:justify-start md:py-0 md:text-left"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 block h-px bg-gradient-to-r from-white/0 via-white to-white/0 opacity-10 md:hidden"
                />
                {column.groups.map((group) => (
                  <Fragment key={group.title}>
                    <p className="text-white">{group.title}</p>
                    {group.links.map((link) => (
                      <FooterAnchor
                        key={link.id}
                        link={link}
                        className="text-gray-6"
                      />
                    ))}
                  </Fragment>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 items-center justify-center gap-16 md:grid-cols-2 md:items-end md:gap-4">
          <div className="flex flex-col items-center justify-center space-y-16 md:order-2 md:flex-row md:justify-between md:space-y-0 md:space-x-3">
            <div className="relative flex truncate">
              <FooterAnchor
                link={footerReport}
                className="truncate rounded-full border border-white/5 bg-gray-10 px-6 text-center text-sm leading-[3rem] font-medium text-gray-1 transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90 md:px-4 md:leading-9"
              />
            </div>
            <div className="flex justify-center space-x-3 md:justify-start">
              {footerSocial.map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] flex h-10 w-10 items-center justify-center rounded-full bg-gray-9 transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90"
                >
                  {socialIcons[social.id]}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-2 md:justify-start">
            <p className="text-center text-sm text-gray-5 md:text-left">
              ©{new Date().getFullYear()} Nexiafy
            </p>
            <div className="flex flex-col justify-center space-y-2 md:flex-row md:justify-start md:space-y-0 md:space-x-3">
              {footerLegal.map((link) => (
                <FooterAnchor
                  key={link.id}
                  link={link}
                  className="text-center text-sm text-gray-6 md:text-left"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
