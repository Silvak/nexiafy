/**
 * Builds URL-safe anchor ids from heading text. When the same slug appears twice,
 * appends -1, -2, etc.
 */
export function slugifyHeading(text: string): string {
  const normalized = text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized.length > 0 ? normalized : "section";
}

export function toHeadingId(
  text: string,
  seenCounts: Map<string, number>,
): string {
  const base = slugifyHeading(text);
  const count = seenCounts.get(base) ?? 0;
  seenCounts.set(base, count + 1);
  return count === 0 ? base : `${base}-${count}`;
}
