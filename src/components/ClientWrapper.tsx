"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ClientWrapper({ children }: Props) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}
