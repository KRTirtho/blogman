import { supabaseRSC } from "@/collection/supabase";
import { SupaPost, SupaProfile } from "@/supabase/types/types";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";

const PostPage = async (props: { params: { postSlug: string } }) => {
  const supabase = supabaseRSC();

  const { data, error } = await supabase
    .from("Post")
    .select("*,author:Profile(*)")
    .eq("slug", decodeURIComponent(props.params.postSlug))
    .single();

  if (error) {
    notFound();
  }

  const post = data as
    | (SupaPost & {
        author: SupaProfile;
      })
    | null;

  return (
    <article className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col gap-5 mb-4 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl font-semibold">{post?.title}</h1>
        <div className="text-end">
          <p className="text-sm sm:text-base text-gray-500">
            Published {formatDistanceToNow(new Date(post!.createdAt))} ago
          </p>
          <h3 className="sm:text-xl text-gray-500">
            By{" "}
            <Link className="font-medium hover:underline" href={`${post?.author.username}/profile`}>
              {post?.author?.firstName} {post?.author?.lastName}
            </Link>
          </h3>
        </div>
      </div>
      <div
        className="prose dark:prose-invert max-w-none w-full"
        dangerouslySetInnerHTML={{
          __html: post?.content ?? "",
        }}
      />
    </article>
  );
};

export default PostPage;
