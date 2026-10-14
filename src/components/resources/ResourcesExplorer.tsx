"use client";

import { ListFilter, Search } from "lucide-react";
import { useMemo, useState } from "react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import ResourceCard from "@/components/resources/ResourceCard";
import {
  filterResources,
  getResourceCategories,
  type ResourceListItem,
} from "@/lib/resourceUtils";

const PAGE_SIZE = 8;

interface ResourcesExplorerProps {
  items: ResourceListItem[];
}

function formatCategoryLabel(category: string): string {
  if (category === "all") {
    return "All";
  }
  return category.charAt(0).toUpperCase() + category.slice(1);
}

export default function ResourcesExplorer({ items }: ResourcesExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    const fromItems = getResourceCategories(items);
    return ["all", ...fromItems];
  }, [items]);

  const filtered = useMemo(
    () => filterResources(items, query, category),
    [items, query, category],
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleQueryChange(value: string) {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  }

  function handleCategorySelect(value: string) {
    setCategory(value);
    setFilterOpen(false);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div className="grid grid-cols-content justify-center gap-8 px-5 md:gap-16 md:px-12 lg:px-16">
      <div className="grid grid-cols-search items-start justify-center gap-6">
        <ScrollReveal variant="single">
          <div className="relative">
            <div className="relative">
              <div className="flex h-12 items-center justify-between gap-3">
                <div className="flex h-full w-full items-center gap-3 rounded-2xl bg-gray-11 px-4">
                  <Search aria-hidden className="h-4 w-4 shrink-0 text-gray-1" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => handleQueryChange(e.target.value)}
                    placeholder="Search"
                    aria-label="Search"
                    className="border-none bg-transparent placeholder:text-gray-8 focus:border-none focus:outline-none focus:ring-0"
                  />
                </div>
                <button
                  type="button"
                  aria-expanded={filterOpen}
                  onClick={() => setFilterOpen((open) => !open)}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-11 transition-transform duration-300"
                >
                  <ListFilter aria-hidden className="h-4 w-4" />
                </button>
              </div>
              {filterOpen && (
                <div className="absolute top-[125%] z-10 w-full overflow-hidden rounded-xl bg-gray-11 p-2">
                  <ul className="flex flex-col gap-1">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          type="button"
                          onClick={() => handleCategorySelect(cat)}
                          className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-white/5 ${
                            category === cat
                              ? "font-medium text-gray-1"
                              : "text-gray-6"
                          }`}
                        >
                          {formatCategoryLabel(cat)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-6">No articles match your search.</p>
      ) : (
        <ScrollReveal
          variant="group"
          className="grid grid-cols-1 content-start items-start gap-12 md:grid-cols-2 md:gap-y-16"
        >
          {visible.map((item) => (
            <ScrollReveal key={item.documentId} variant="groupItem">
              <ResourceCard item={item} />
            </ScrollReveal>
          ))}
        </ScrollReveal>
      )}

      {hasMore && (
        <ScrollReveal variant="single" className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] mx-auto h-12 rounded-full bg-gray-11 px-6 text-center text-sm text-gray-1 transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90"
          >
            Load more
          </button>
        </ScrollReveal>
      )}
    </div>
  );
}
