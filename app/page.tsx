import { supabaseRSC } from "@/collection/supabase";
import { redirect } from "next/navigation";

const Home = async () => {
  const supabase = supabaseRSC();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("Profile")
    .select("*")
    .eq("id", session.user.id)
    .single();
  
  if (!data?.username) {
    redirect("/new/profile");
  }

  return <main>You are logged in!</main>;
};

export default Home;
