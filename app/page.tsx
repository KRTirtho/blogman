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

  return <main>You are logged in!</main>;
};

export default Home;
