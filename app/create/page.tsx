import { supabaseRSC } from "@/collection/supabase";
import CreatePostForm from "./__comp/create-form";
import { redirect } from "next/navigation";

const CreatePostPage = async () => {
  const supabase = supabaseRSC();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profile = await supabase
    .from("Profile")
    .select("*")
    .eq("id", user?.id)
    .single();

  if (!profile.data?.username) {
    redirect("/new/profile");
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-xl font-semibold">
        Write Something beautiful for the world
      </h4>
      <CreatePostForm username={profile.data.username} />
    </div>
  );
};

export default CreatePostPage;
