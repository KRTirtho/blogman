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

    console.log('error:', error)
    if (data?.username) {
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

  return (
    <section className="max-w-lg mx-auto">
      <h3 className="text-2xl font-semibold">Welcome, {data.firstName || data.lastName || data.username}</h3>
      <ProfileForm profile={data} />
    </section>
  );
};

export default ProfilePage;
