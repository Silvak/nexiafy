"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/config/navigation";

interface MobileNavAccordionProps {
  onNavigate?: () => void;
}

/**
 * Navigation accordion for the full-screen mobile menu.
 * Only one item can be expanded at a time.
 */
export default function MobileNavAccordion({
  onNavigate,
}: MobileNavAccordionProps) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);

  return (
    <nav
      aria-label="Mobile"
      className="mt-4 flex flex-1 flex-col divide-y divide-white/10"
    >
      {navItems.map((item, index) => {
        const isOpen = openLabel === item.label;
        const panelId = `mobile-nav-panel-${index}`;

        return (
          <div key={item.label}>
            <button
              type="button"
              onClick={() => setOpenLabel(isOpen ? null : item.label)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-gray-1"
            >
              {item.label}
              <ChevronDown
                aria-hidden="true"
                width={24}
                height={24}
                className={`shrink-0 text-gray-1 transition-transform duration-300 ease-out ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={panelId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="grid gap-1 pb-4">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onNavigate}
                      className="rounded-lg px-3 py-2 text-left transition-colors hover:bg-white/5"
                    >
                      <span className="block text-sm font-medium text-gray-1">
                        {link.label}
                      </span>
                      {link.description && (
                        <span className="mt-0.5 block text-xs text-gray-4">
                          {link.description}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
