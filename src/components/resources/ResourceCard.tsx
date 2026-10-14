import Image from "next/image";
import Link from "next/link";

import { formatResourceDate, type ResourceListItem } from "@/lib/resourceUtils";

interface ResourceCardProps {
  item: ResourceListItem;
}

export default function ResourceCard({ item }: ResourceCardProps) {
  const formattedDate = formatResourceDate(item.date);

  return (
    <Link
      id={`media-news-card-${item.slug}`}
      href={`/resources/${item.slug}`}
      className="grid grid-cols-1 gap-5 transition-opacity duration-300 visited:opacity-100 hover:opacity-80"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[20px] md:rounded-3xl">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-col gap-3 px-0.5">
        <div className="text-sm font-medium text-gray-6">{formattedDate}</div>
        <h3>{item.title}</h3>
        <p className="line-clamp-5 text-gray-6">{item.excerpt}</p>
      </div>
    </Link>
  );
}
