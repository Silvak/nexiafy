import type { DeploymentModel } from "@/config/deploymentContent";

export interface DeploymentModelFilters {
  query: string;
  onlyOwn: boolean;
}

export function filterDeploymentModels(
  models: DeploymentModel[],
  filters: DeploymentModelFilters,
): DeploymentModel[] {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return models.filter((model) => {
    if (filters.onlyOwn && model.tagLabel !== "Nexiafy") {
      return false;
    }

    if (normalizedQuery.length > 0) {
      const haystack = `${model.name} ${model.tagLabel}`.toLowerCase();
      if (!haystack.includes(normalizedQuery)) {
        return false;
      }
    }

    return true;
  });
}
