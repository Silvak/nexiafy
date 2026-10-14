import { ArrowRight } from "lucide-react";
import Link from "next/link";

import SectionContainer from "@/components/common/SectionContainer";
import { news, type NewsItem } from "@/config/landingContent";

function NewsArticle({ item }: { item: NewsItem }) {
  return (
    <Link id={item.id} href={item.href} className="flex flex-col gap-5">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-8">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="absolute inset-0 h-full w-full rounded-2xl object-cover"
        />
      </div>
      <div className="relative flex flex-col gap-3">
        <div className="text-sm font-medium text-gray-8 mix-blend-screen">
          {item.date}
        </div>
        <h4 className="max-w-full text-lg text-gray-5 lg:truncate">
          {item.title}
        </h4>
        <p className="text-base text-gray-8 mix-blend-screen">{item.excerpt}</p>
      </div>
    </Link>
  );
}

export default function NewsSection() {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 items-start rounded-[20px] bg-gray-11 lg:rounded-4xl">
        <div className="flex items-center justify-between gap-8 p-5 lg:p-12">
          <h2 className="text-xl font-bold text-gray-5 lg:text-2xl">
            {news.title}
          </h2>
          <Link
            id={news.cta.id}
            href={news.cta.href}
            className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] flex h-12 items-center justify-center rounded-full bg-white/5 pr-4 pl-4 text-sm transition-all duration-500 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90 lg:space-x-3 lg:pr-4 lg:pl-6"
          >
            <span className="hidden text-gray-5 lg:block">{news.cta.label}</span>
            <ArrowRight
              aria-hidden
              className="h-4 w-4 text-brand-rose-1"
              strokeWidth={2}
            />
          </Link>
        </div>
        <div className="relative flex flex-col gap-8 border-t border-white/5 px-5 pb-5 lg:gap-12 lg:px-12 lg:pb-12">
          <h3 className="pt-5 text-xl font-medium text-gray-8 lg:pt-12">
            {news.subtitle}
          </h3>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {news.items.map((item) => (
              <NewsArticle key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
