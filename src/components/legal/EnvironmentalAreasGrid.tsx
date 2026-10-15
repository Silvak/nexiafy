import {
  Building2,
  Cloud,
  Droplets,
  Plane,
  Recycle,
  Truck,
} from "lucide-react";

const areas = [
  {
    id: "office-energy",
    title: "Office energy use",
    description:
      "Electricity and heating associated with Nexiafy office locations and remote work hubs.",
    Icon: Building2,
  },
  {
    id: "cloud-hpc",
    title: "Cloud and HPC infrastructure",
    description:
      "Compute, storage, and networking used to develop, test, and deploy AI optimization services.",
    Icon: Cloud,
  },
  {
    id: "suppliers",
    title: "Suppliers and outsourced services",
    description:
      "Environmental performance of vendors that support software delivery, facilities, and operations.",
    Icon: Truck,
  },
  {
    id: "business-travel",
    title: "Business travel",
    description:
      "Emissions and resource use from customer visits, conferences, and team collaboration travel.",
    Icon: Plane,
  },
  {
    id: "waste-materials",
    title: "Waste and materials",
    description:
      "Office waste streams, hardware lifecycle, and responsible disposal of equipment.",
    Icon: Recycle,
  },
  {
    id: "water",
    title: "Water use",
    description:
      "Water consumption in office facilities where data is available from building management.",
    Icon: Droplets,
  },
] as const;

export default function EnvironmentalAreasGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {areas.map(({ id, title, description, Icon }) => (
        <div
          key={id}
          className="rounded-lg border border-gray-9 bg-gray-12 p-5"
        >
          <Icon
            className="mb-3 h-6 w-6 text-brand-rose-1"
            aria-hidden
          />
          <h3 className="text-base font-semibold text-gray-1">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-gray-5">{description}</p>
        </div>
      ))}
    </div>
  );
}
