"use client";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter, usePathname } from "next/navigation";
import React, { FC, PropsWithChildren, useEffect } from "react";

//  anonymous accessible
const anonWhitelist = ["/login"];

// logged in but not accessible
const loggedInBlacklist = ["/login"];

const AppGuard: FC<PropsWithChildren> = ({ children }) => {
  const session = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!session && !anonWhitelist.includes(pathname)) {
      router.push("/login");
    } else if (session && loggedInBlacklist.includes(pathname)) {
      router.push("/");
    }
  }, [pathname, router, session]);

  return <>{children}</>;
};

export default AppGuard;
