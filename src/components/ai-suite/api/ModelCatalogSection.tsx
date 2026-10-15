"use client";

import { ChevronUp, Gift } from "lucide-react";
import { useMemo, useState } from "react";

import {
  catalogPromoBanner,
  inferenceModels,
} from "@/config/inferenceApiContent";
import {
  ALL_PROVIDERS,
  filterModels,
  getProviders,
  sortModelsByName,
  type ProviderFilter,
  type SortDirection,
} from "@/lib/modelCatalog";

import CatalogToolbar from "./CatalogToolbar";
import FeatureLegend from "./FeatureLegend";
import ModelMobileCard from "./ModelMobileCard";
import ModelRow from "./ModelRow";

export default function ModelCatalogSection() {
  const [selectedProvider, setSelectedProvider] =
    useState<ProviderFilter>(ALL_PROVIDERS);
  const [nexiafyOnly, setNexiafyOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const providers = useMemo(() => getProviders(inferenceModels), []);

  const filteredModels = useMemo(() => {
    const filtered = filterModels(inferenceModels, {
      provider: selectedProvider,
      nexiafyOnly,
      query,
    });
    return sortModelsByName(filtered, sortDirection);
  }, [selectedProvider, nexiafyOnly, query, sortDirection]);

  const toggleSort = () => {
    setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
  };

  return (
    <section
      id="models"
      className="grid grid-cols-content justify-center gap-12 px-5 pb-16 pt-16 md:gap-16 md:px-12 md:pt-44"
    >
      <h2 className="text-center text-[36px] font-bold leading-[44px] text-gray-1 md:text-[48px] md:leading-[56px]">
        Model Catalog
      </h2>

      <div className="flex w-full flex-col gap-4">
        <CatalogToolbar
          providers={providers}
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          nexiafyOnly={nexiafyOnly}
          onNexiafyOnlyChange={setNexiafyOnly}
          query={query}
          onQueryChange={setQuery}
        />
      </div>

      <FeatureLegend />

      <div className="hidden w-full flex-col gap-3 md:flex">
        <div className="flex items-center justify-center gap-3 px-2.5">
          <div className="flex flex-1 items-center">
            <button
              type="button"
              className="flex items-center gap-1"
              onClick={toggleSort}
              aria-label={`Sort by model name ${sortDirection === "asc" ? "descending" : "ascending"}`}
            >
              <span className="text-[12px] font-medium leading-[16px] text-gray-6">
                Model Name
              </span>
              <ChevronUp
                aria-hidden
                className={
                  sortDirection === "desc"
                    ? "rotate-180 text-gray-6 opacity-50"
                    : "text-gray-6 opacity-50"
                }
                size={16}
                strokeWidth={2}
              />
            </button>
          </div>
          <div className="flex-1" />
          <div className="flex-1" />
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.12] py-1 pl-2.5 pr-3">
            <Gift
              aria-hidden
              className="shrink-0 text-brand-rose-1"
              size={16}
              strokeWidth={2}
            />
            <span className="text-[14px] font-medium leading-[20px] text-gray-3">
              {catalogPromoBanner}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {filteredModels.length === 0 ? (
            <p className="rounded-2xl border border-gray-9 bg-gray-12 p-8 text-center text-gray-6">
              No models match your filters. Try adjusting search or filters.
            </p>
          ) : (
            filteredModels.map((model) => (
              <div
                key={model.id}
                className="flex flex-col rounded-2xl border border-gray-9 bg-gray-12"
              >
                <ModelRow model={model} />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 md:hidden">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.12] py-1 pl-2.5 pr-3">
            <Gift
              aria-hidden
              className="shrink-0 text-brand-rose-1"
              size={16}
              strokeWidth={2}
            />
            <span className="text-[14px] font-medium leading-[20px] text-gray-3">
              {catalogPromoBanner}
            </span>
          </div>
        </div>

        {filteredModels.length === 0 ? (
          <p className="rounded-2xl border border-gray-9 bg-gray-12 p-8 text-center text-gray-6">
            No models match your filters.
          </p>
        ) : (
          filteredModels.map((model) => (
            <ModelMobileCard key={model.id} model={model} />
          ))
        )}
      </div>
    </section>
  );
}
