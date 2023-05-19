"use client";

import React, { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const supabase = useSupabase();
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return <Auth supabaseClient={supabase} />;
};

export default LoginPage;
