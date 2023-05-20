import { supabaseRSC } from "@/collection/supabase";
import { notFound, redirect } from "next/navigation";
import ProfileForm from "./__comp/profile-form";

const ProfilePage = async ({
  params: { user },
}: {
  params: { user: string };
}) => {
  const supabase = supabaseRSC();

  if (user === "new") {
    const {
      data: { user: userData },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("Profile")
      .select("*")
      .eq("id", userData?.id)
      .single();

    if (data) {
      return redirect(`/${data.username}/profile`);
    } else if (error) {
      return notFound();
    }
    return <ProfileForm isNew />;
  }

  const { data, error } = await supabase
    .from("Profile")
    .select("*")
    .eq("username", user)
    .single();

  if (error) {
    return notFound();
  }

  return <ProfileForm profile={data} />;
};

export default ProfilePage;
