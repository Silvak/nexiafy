/** Highest carousel index when `visible` slides fit in the viewport. */
export function getMaxIndex(total: number, visible: number): number {
  if (total <= 0 || visible <= 0) {
    return 0;
  }
  return Math.max(0, total - visible);
}

/** Keeps the active index within [0, getMaxIndex(total, visible)]. */
export function clampIndex(index: number, total: number, visible: number): number {
  const max = getMaxIndex(total, visible);
  if (index < 0) {
    return 0;
  }
  if (index > max) {
    return max;
  }
  return index;
}
