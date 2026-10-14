import {
  formatResourceDate,
  getReadingTime,
  type ResourceDetail,
} from "@/lib/resourceUtils";

interface ArticleHeaderProps {
  resource: ResourceDetail;
}

export default function ArticleHeader({ resource }: ArticleHeaderProps) {
  const formattedDate = formatResourceDate(resource.date);
  const readingTime = getReadingTime(resource.body);

  return (
    <header className="mb-8 flex flex-col gap-6 md:mb-10 md:gap-8">
      <div className="flex max-w-[850px] flex-col gap-4 md:gap-6">
        <p className="text-sm text-gray-5">
          {formattedDate}
          <span className="text-gray-5"> · </span>
          {readingTime}
        </p>
        <h1 className="text-xl font-bold leading-tight text-gray-1 md:text-2xl">
          {resource.title}
        </h1>
      </div>
      <p className="max-w-[850px] text-lg leading-7 text-gray-6">
        {resource.excerpt}
      </p>
      <div className="flex w-full max-w-full flex-col gap-6 border-t border-gray-9 pt-4 md:flex-row md:items-center md:justify-between md:gap-8 md:pt-4">
        <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">
          <div className="relative z-0 flex h-[72px] w-[72px] min-h-[72px] min-w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-gray-10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            <span className="relative z-10 flex h-full w-full items-center justify-center text-2xl font-bold text-brand-rose-1">
              N
            </span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-base font-medium text-gray-3">
              {resource.author}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
