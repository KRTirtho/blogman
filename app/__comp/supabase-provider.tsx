"use client"

import {
  Session,
  createBrowserSupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import React, { FC, PropsWithChildren, useEffect, useMemo } from "react";

interface SupabaseProviderProps extends PropsWithChildren {
  serverSession: Session | null;
}

const SupabaseProvider: FC<SupabaseProviderProps> = ({
  children,
  serverSession,
}) => {
  const supabase = useMemo(() => createBrowserSupabaseClient(), []);
  const router = useRouter();

  useEffect(() => {
    return supabase.auth.onAuthStateChange(() => {
      return router.refresh();
    }).data.subscription.unsubscribe;
  }, [supabase, router]);

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={serverSession}
    >
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
