import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionContainer({
  children,
}: {
  children: Props["children"];
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      {children}
    </section>
  );
}
