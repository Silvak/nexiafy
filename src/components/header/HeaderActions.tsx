import Link from "next/link";

import { headerActions } from "@/config/navigation";

const variantClasses: Record<"secondary" | "primary", string> = {
  secondary: "bg-button-secondary text-gray-1 hover:bg-gray-9",
  primary: "bg-brand-rose-1 text-white hover:bg-brand-rose-1/90",
};

const layoutClasses: Record<"inline" | "stacked", string> = {
  inline: "flex items-center space-x-2.5",
  stacked: "grid grid-cols-2 gap-4",
};

const sizeClasses: Record<"inline" | "stacked", string> = {
  inline: "h-9 px-4 text-sm",
  stacked: "px-6 py-3.5 text-sm",
};

interface HeaderActionsProps {
  /** `inline` for the desktop header, `stacked` for the mobile menu. */
  layout?: "inline" | "stacked";
  /** Called when a CTA is clicked; used to close the mobile menu on navigation. */
  onNavigate?: () => void;
}

/**
 * Header call-to-action buttons (CTAs).
 */
export default function HeaderActions({
  layout = "inline",
  onNavigate,
}: HeaderActionsProps) {
  return (
    <div className={layoutClasses[layout]}>
      {headerActions.map((action) => (
        <Link
          key={action.id}
          id={action.id}
          href={action.href}
          onClick={onNavigate}
          {...(action.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`flex shrink-0 items-center justify-center rounded-full text-center font-medium transition-all duration-300 ${
            layout === "inline" ? "hover:scale-95 hover:opacity-90" : ""
          } ${sizeClasses[layout]} ${variantClasses[action.variant]}`}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
