import type { InferenceModel } from "@/config/inferenceApiContent";

export const ALL_PROVIDERS = "All" as const;

export type ProviderFilter = typeof ALL_PROVIDERS | string;

export type SortDirection = "asc" | "desc";

export interface ModelCatalogFilters {
  provider: ProviderFilter;
  nexiafyOnly: boolean;
  query: string;
}

export function getProviders(models: InferenceModel[]): string[] {
  const set = new Set(models.map((m) => m.provider));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function filterModels(
  models: InferenceModel[],
  filters: ModelCatalogFilters,
): InferenceModel[] {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return models.filter((model) => {
    if (filters.nexiafyOnly && !model.isNexiafy) {
      return false;
    }

    if (
      filters.provider !== ALL_PROVIDERS &&
      model.provider !== filters.provider
    ) {
      return false;
    }

    if (normalizedQuery.length > 0) {
      const haystack = `${model.name} ${model.provider}`.toLowerCase();
      if (!haystack.includes(normalizedQuery)) {
        return false;
      }
    }

    return true;
  });
}

export function sortModelsByName(
  models: InferenceModel[],
  direction: SortDirection,
): InferenceModel[] {
  const sorted = [...models].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
  );
  return direction === "desc" ? sorted.reverse() : sorted;
}
