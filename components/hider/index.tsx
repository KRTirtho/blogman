"use client";

import { useSession } from "@supabase/auth-helpers-react";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface HideOnProps {
  children: React.ReactNode;
  paths: string[];
  auth?: "anon" | "logged-in";
}

const HideOn: FC<HideOnProps> = ({ children, paths, auth }) => {
  const pathname = usePathname();
  const session = useSession();

  const isInPath = paths.includes(pathname);
  const isAnon = !session && auth === "anon";
  const isLoggedIn = session && auth === "logged-in";

  if (isInPath || (isAnon && !isLoggedIn) || (isLoggedIn && !isAnon)) {
    return <></>;
  }

  return <>{children}</>;
};

export default HideOn;
