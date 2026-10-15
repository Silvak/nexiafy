import Image from "next/image";

import type { OfficeLocation } from "@/config/officesContent";

interface OfficeCardProps {
  office: OfficeLocation;
}

export default function OfficeCard({ office }: OfficeCardProps) {
  return (
    <div className="relative grid grid-cols-1 content-stretch items-stretch overflow-hidden rounded-[20px] bg-gray-11 md:grid-cols-2 md:rounded-4xl">
      <div className="relative aspect-[4/3] min-h-full w-full">
        <Image
          alt={office.imageAlt}
          src={office.image}
          width={512}
          height={384}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid grid-rows-[1fr_auto_auto] gap-3 p-5 md:px-8 lg:p-12">
        <div className="flex flex-col space-y-0.5 md:space-y-3">
          <h5 className="text-md font-medium text-gray-1 md:text-xl">{office.city}</h5>
          <p className="text-sm text-gray-6">
            {office.address} {office.countryLabel}
          </p>
        </div>
        <div className="flex flex-col space-y-0.5">
          <h6 className="text-base font-medium text-gray-1">Email</h6>
          <p className="text-sm text-gray-6">{office.email}</p>
        </div>
        {office.phone ? (
          <div className="flex flex-col space-y-0.5">
            <h6 className="text-base font-medium text-gray-1">Phone</h6>
            <p className="text-sm text-gray-6">{office.phone}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
