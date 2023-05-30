import { supabaseRSC } from "@/collection/supabase";
import PostCard from "@/components/post-card";
import { notFound } from "next/navigation";

const PostsPage = async ({
  params: { user },
}: {
  params: { user: string };
}) => {
  const supabase = supabaseRSC();

  const sessionUser = await supabase.auth.getUser();
  const { data: profile } = await supabase
    .from("Profile")
    .select("*")
    .eq("username", user)
    .single();
  const { data: posts } = await supabase
    .from("Post")
    .select(`id,title,slug,createdAt`)
    .eq("authId", sessionUser.data.user?.id);

  if (!posts) notFound();

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-2xl font-semibold">Your Posts</h3>

      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            post={Object.assign(post, { author: profile! })}
          />
        );
      })}
    </div>
  );
};

export default PostsPage;
