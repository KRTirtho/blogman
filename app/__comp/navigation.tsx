import { supabaseRSC } from "@/collection/supabase";
import Logo from "@/components/logo";
import Link from "next/link";
import { User2 } from "lucide-react";

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
    <nav className="flex justify-between px-6 py-2">
      <Link href="/">
        <Logo size="large" />
      </Link>

      {data?.username && (
        <Link href={`/${data?.username}/profile`}>
          <User2 />
        </Link>
      )}
    </nav>
  );
};

export default GlobalNavigation as unknown as React.FC;
