import Link from "next/link";

import Card from "@/components/common/Card";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import { news } from "@/config/landingContent";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

/** Parses a `YYYY-MM-DD` date as local time to avoid a UTC off-by-one day shift. */
function parseIsoDate(isoDate: string): Date {
  return new Date(`${isoDate}T00:00:00`);
}

export default function NewsSection() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-16">
        <SectionHeading
          title="Latest from Nexiafy"
          subtitle="Product updates, partnerships and announcements."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {news.map((item) => (
            <Card
              key={item.href}
              as={Link}
              href={item.href}
              padding="md"
              className="flex flex-col gap-4 transition-colors hover:bg-gray-9"
            >
              <span className="text-xs text-gray-7">
                {dateFormatter.format(parseIsoDate(item.date))}
              </span>
              <h3 className="text-base font-bold text-gray-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-6">{item.excerpt}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
