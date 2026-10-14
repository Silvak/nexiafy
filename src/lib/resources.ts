import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { ResourceDetail, ResourceListItem } from "@/lib/resourceUtils";

const RESOURCES_DIR = path.join(process.cwd(), "content", "resources");

interface ResourceFrontmatter {
  documentId: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  imageAlt: string;
  category?: string;
  author?: string;
}

function parseResourceFile(
  filename: string,
  includeBody: boolean,
): ResourceListItem | ResourceDetail | null {
  if (!filename.endsWith(".md")) {
    return null;
  }

  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(RESOURCES_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as ResourceFrontmatter;

  if (!frontmatter.documentId || !frontmatter.title) {
    return null;
  }

  const base: ResourceListItem = {
    documentId: frontmatter.documentId,
    slug,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt ?? "",
    date: frontmatter.date ?? "",
    image: frontmatter.image ?? "/images/image1.png",
    imageAlt: frontmatter.imageAlt ?? frontmatter.title,
    category: frontmatter.category ?? "news",
    author: frontmatter.author ?? "Nexiafy",
  };

  if (!includeBody) {
    return base;
  }

  return { ...base, body: content.trim() };
}

function sortByDateDesc(items: ResourceListItem[]): ResourceListItem[] {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getAllResources(): ResourceListItem[] {
  if (!fs.existsSync(RESOURCES_DIR)) {
    return [];
  }

  const files = fs.readdirSync(RESOURCES_DIR);
  const items = files
    .map((file) => parseResourceFile(file, false))
    .filter((item): item is ResourceListItem => item !== null);

  return sortByDateDesc(items);
}

export function getResourceBySlug(slug: string): ResourceDetail | null {
  const filename = `${slug}.md`;
  const filePath = path.join(RESOURCES_DIR, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const parsed = parseResourceFile(filename, true);
  if (!parsed || !("body" in parsed)) {
    return null;
  }

  return parsed;
}

export function getResourceSlugs(): string[] {
  return getAllResources().map((item) => item.slug);
}
