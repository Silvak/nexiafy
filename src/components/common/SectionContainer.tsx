import { ReactNode } from "react";

type SectionSpacing = "default" | "compact" | "none";

/** Vertical rhythm between landing sections, mirrored from the reference layout. */
const spacingClasses: Record<SectionSpacing, string> = {
  default: "pt-[108px] lg:pt-44",
  compact: "pt-16 md:pt-36 lg:pt-44",
  none: "",
};

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Vertical padding applied before the section content. */
  spacing?: SectionSpacing;
  /** Removes the default horizontal gutter, letting children (e.g. marquees) bleed edge to edge. */
  fullBleed?: boolean;
}

/**
 * Centers content in the shared 1024px column used across the landing page,
 * applying the section's top spacing and horizontal gutter (20px on mobile,
 * none from `lg` up, since the column itself caps the width).
 */
export default function SectionContainer({
  children,
  id,
  className = "",
  spacing = "default",
  fullBleed = false,
}: SectionContainerProps) {
  return (
    <section id={id} className={`w-full ${spacingClasses[spacing]} ${className}`}>
      <div
        className={`grid grid-cols-content justify-center ${
          fullBleed ? "" : "px-5 lg:px-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
