export function getSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) {
    return fromEnv;
  }
  return "http://localhost:3000";
}

export function getResourceShareUrl(slug: string): string {
  return `${getSiteOrigin()}/resources/${slug}`;
}
