"use client";

import React, { useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { useSupabase } from "@/utils/hooks/useSupabase";
import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { inputClasses } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { labelVariants } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Logo from "@/components/logo";

const LoginPage = () => {
  const supabase = useSupabase();
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <Card className="max-w-md w-full p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h3 className="text-2xl font-medium mb-4">
        Get started on <Logo />
      </h3>
      <Auth
        supabaseClient={supabase}
        providers={[]}
        appearance={{
          extend: false,
          className: {
            container: "flex flex-col justify-center gap-4",
            button: buttonVariants(),
            input: inputClasses,
            label: labelVariants(),
            message: "text-destructive",
            divider: "bg-border dark:bg-gray-700",
            anchor: "hover:underline text-center",
          },
        }}
      />
    </Card>
  );
};

export default LoginPage;
