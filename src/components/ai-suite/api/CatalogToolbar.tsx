"use client";

import { Search } from "lucide-react";

import { ALL_PROVIDERS, type ProviderFilter } from "@/lib/modelCatalog";

interface CatalogToolbarProps {
  providers: string[];
  selectedProvider: ProviderFilter;
  onProviderChange: (provider: ProviderFilter) => void;
  nexiafyOnly: boolean;
  onNexiafyOnlyChange: (value: boolean) => void;
  query: string;
  onQueryChange: (value: string) => void;
}

export default function CatalogToolbar({
  providers,
  selectedProvider,
  onProviderChange,
  nexiafyOnly,
  onNexiafyOnlyChange,
  query,
  onQueryChange,
}: CatalogToolbarProps) {
  const providerButtons = [ALL_PROVIDERS, ...providers];

  return (
    <div className="flex w-full flex-col gap-4 rounded-[20px] border border-white/5 bg-white/[0.03] p-3 backdrop-blur-[50px]">
      <div className="flex w-full flex-col-reverse items-center gap-4 lg:flex-row">
        <div className="flex w-full flex-wrap items-center gap-3">
          {providerButtons.map((provider) => {
            const isActive = selectedProvider === provider;
            return (
              <button
                key={provider}
                type="button"
                onClick={() => onProviderChange(provider)}
                className={
                  isActive
                    ? "flex h-12 items-center justify-center rounded-[10px] border px-3.5 text-base font-bold text-white border-gray-6 bg-white/[0.12]"
                    : "flex h-12 items-center justify-center rounded-[10px] border px-3.5 text-base font-bold text-white border-white/5 bg-white/[0.03]"
                }
              >
                {provider}
              </button>
            );
          })}
        </div>

        <div className="flex w-full flex-col items-center gap-3 md:flex-row lg:justify-end">
          <div className="flex h-12 w-full items-center justify-between gap-3 rounded-[10px] border border-white/5 bg-white/[0.03] px-3 lg:max-w-[212px]">
            <span className="text-[14px] font-bold leading-[20px] text-gray-5">
              Nexiafy Only
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={nexiafyOnly}
              aria-label="Toggle Nexiafy Only"
              onClick={() => onNexiafyOnlyChange(!nexiafyOnly)}
              className={
                nexiafyOnly
                  ? "flex h-6 w-10 items-center rounded-full p-1 transition-colors justify-end bg-brand-rose-1/80"
                  : "flex h-6 w-10 items-center rounded-full p-1 transition-colors justify-start bg-white/[0.1]"
              }
            >
              <div className="h-4 w-4 rounded-full bg-gray-5 shadow-[0px_4px_10px_rgba(0,0,0,0.2)]" />
            </button>
          </div>

          <div className="flex h-12 w-full min-w-[212px] items-center gap-3 rounded-[10px] border border-white/5 bg-white/[0.03] px-4 lg:max-w-[212px]">
            <Search
              aria-hidden
              className="text-gray-5"
              size={16}
              strokeWidth={2}
            />
            <input
              type="text"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search Model"
              aria-label="Search model"
              className="w-full min-w-[80px] bg-transparent text-[16px] font-medium leading-[24px] text-white placeholder:text-gray-7 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
