import { supabaseRSC } from "@/collection/supabase";
import Logo from "@/components/logo";
import Link from "next/link";
import { Pencil, User2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import HideOn from "@/components/hider";

const GlobalNavigation = async () => {
  const supabase = supabaseRSC();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("Profile")
    .select("*")
    .eq("id", user?.id)
    .single();

  return (
    <nav className="flex justify-between items-center px-6 py-2">
      <Link href="/">
        <Logo size="large" />
      </Link>

      <div className="flex gap-2 items-center justify-end">
        <HideOn paths={["/create"]} auth="anon">
          <Link
            href="/create"
            className={`flex gap-1 ${buttonVariants({ size: "sm" })}`}
          >
            <Pencil size="18" />
            <span className="hidden sm:block">Destroy Literacy</span>
          </Link>
        </HideOn>

        {data?.username && (
          <Link href={`/${data?.username}/profile`}>
            <User2 />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default GlobalNavigation as unknown as React.FC;
