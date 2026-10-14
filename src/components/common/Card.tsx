import { ElementType, ReactNode } from "react";

type CardPadding = "md" | "lg";

const paddingClasses: Record<CardPadding, string> = {
  md: "p-5 lg:p-8",
  lg: "p-5 lg:p-12",
};

interface CardProps {
  children: ReactNode;
  padding?: CardPadding;
  className?: string;
  /** Render as a different element/component, e.g. `Link`, when the card is interactive. */
  as?: ElementType;
  [key: string]: unknown;
}

/** Rounded surface used for solutions, stats, features and news cards. */
export default function Card({
  children,
  padding = "md",
  className = "",
  as: Component = "div",
  ...rest
}: CardProps) {
  return (
    <Component
      className={`rounded-[20px] bg-gray-11 lg:rounded-4xl ${paddingClasses[padding]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
