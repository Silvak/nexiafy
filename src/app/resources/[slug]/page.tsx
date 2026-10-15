import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleBody from "@/components/resources/article/ArticleBody";
import ArticleHeader from "@/components/resources/article/ArticleHeader";
import ArticleImage from "@/components/resources/article/ArticleImage";
import BackButton from "@/components/resources/article/BackButton";
import ContactCta from "@/components/resources/article/ContactCta";
import ShareLinks from "@/components/resources/article/ShareLinks";
import {
  getResourceBySlug,
  getResourceSlugs,
} from "@/lib/resources";

export async function generateStaticParams() {
  return getResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return { title: "Article not found | Nexiafy" };
  }

  return {
    title: `${resource.title} | Nexiafy`,
    description: resource.excerpt,
  };
}

export default async function ResourceArticlePage({
  params,
}: PageProps<"/resources/[slug]">) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-14 text-gray-1">
      <div className="grid grid-cols-content justify-center px-5 pt-24 md:px-12 md:pt-32 lg:px-16 lg:pt-40">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 md:mb-10">
          <BackButton />
          <ShareLinks title={resource.title} />
        </div>

        <ArticleHeader resource={resource} />
        <ArticleImage src={resource.image} alt={resource.imageAlt} />

        <div className="pb-12 lg:pt-2">
          <div className="mx-auto min-w-0 w-full max-w-[850px]">
            <ArticleBody body={resource.body} />
          </div>
        </div>
      </div>
      <ContactCta />
    </div>
  );
}
