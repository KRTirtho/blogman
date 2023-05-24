import { supabaseRSC } from "@/collection/supabase";

const PostPage = async ({
  params: { postSlug },
}: {
  params: { postSlug: string };
}) => {
  const supabase = supabaseRSC();

  const { data: post } = await supabase
    .from("Post")
    .select("*")
    .eq("slug", postSlug)
    .single();

  return (
    <div>
      <h1>{post?.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: post?.content ?? "",
        }}
      />
    </div>
  );
};

export default PostPage;
