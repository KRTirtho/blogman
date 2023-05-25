import { supabaseRSC } from "@/collection/supabase";
import { notFound } from "next/navigation";

const PostPage = async (props: { params: { postSlug: string } }) => {
  const supabase = supabaseRSC();

  const { data: post, error } = await supabase
    .from("Post")
    .select("*")
    .eq("slug", decodeURIComponent(props.params.postSlug))
    .single();

  if (error) {
    notFound();
  }

  return (
    <article className="w-full prose dark:prose-invert max-w-3xl mx-auto">
      <h1>{post?.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: post?.content ?? "",
        }}
      />
    </article>
  );
};

export default PostPage;
