"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ClientWrapper({ children }: Props) {
  return <div className="flex min-h-[100svh] flex-col">{children}</div>;
}
