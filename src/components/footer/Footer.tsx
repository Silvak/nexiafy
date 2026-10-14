import Link from "next/link";

import NexiafyLogo from "@/components/header/NexiafyLogo";
import { navItems } from "@/config/navigation";

/**
 * Site footer: a single rounded card with the brand summary on one side and
 * the navigation columns on the other, matching the reference spacing.
 */
export default function Footer() {
  return (
    <footer className="grid w-full grid-cols-content justify-center p-5 pt-16 md:p-12 md:pt-36 lg:p-16 lg:pt-44">
      <div className="flex flex-col gap-12 rounded-[20px] bg-gray-11 px-8 py-12 md:gap-16 md:rounded-4xl md:p-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4 lg:max-w-xs">
          <NexiafyLogo />
          <p className="text-sm text-gray-6">
            Building efficient, secure AI products for ambitious teams.
          </p>
          <p className="text-xs text-gray-7">
            © {new Date().getFullYear()} Nexiafy. All rights reserved.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
          {navItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-3">
              <span className="text-sm font-bold text-gray-1">
                {item.label}
              </span>
              <ul className="flex flex-col gap-2">
                {item.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-6 transition-colors hover:text-gray-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
