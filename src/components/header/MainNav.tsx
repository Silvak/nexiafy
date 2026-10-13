"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { navItems } from "@/config/navigation";

/**
 * Main menu with dropdowns (Radix NavigationMenu).
 * Each panel is positioned relative to its own Item so it always
 * opens right below the trigger that activated it.
 */
export default function MainNav() {
  return (
    <NavigationMenu.Root
      aria-label="Main"
      className="relative z-10 flex w-full items-center"
    >
      <NavigationMenu.List className="group flex w-full list-none items-center justify-center px-6">
        {navItems.map((item) => (
          <NavigationMenu.Item key={item.label} className="relative">
            <NavigationMenu.Trigger className="group flex items-center justify-center whitespace-nowrap text-center text-sm font-medium transition-colors hover:text-gray-1/80 text-gray-1 focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative gap-2 px-3.5">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-gray-9">
                <ChevronDown
                  aria-hidden="true"
                  width={14}
                  height={14}
                  className="transition duration-200 group-data-[state=open]:rotate-180"
                />
              </span>
              <span className="text-sm font-medium text-gray-4 transition duration-200 group-data-[state=open]:text-gray-6">
                {item.label}
              </span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 transition-[opacity,translate] duration-200 ease-out starting:translate-y-1 starting:opacity-0">
              <ul className="grid gap-1 rounded-xl border border-white/10 bg-gray-9 p-3 shadow-xl">
                {item.links.map((link) => (
                  <li key={link.href}>
                    <NavigationMenu.Link asChild>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-3 py-2 text-left transition-colors hover:bg-white/5"
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
                    </NavigationMenu.Link>
                  </li>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
