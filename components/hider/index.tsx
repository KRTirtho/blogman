"use client";

import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface HideOnProps {
  children: React.ReactNode;
  paths: string[];
}

const HideOn: FC<HideOnProps> = ({ children, paths: path }) => {
  const pathname = usePathname();

  if (path.includes(pathname)) {
    return <></>;
  }

  return <>{children}</>;
};

export default HideOn;
