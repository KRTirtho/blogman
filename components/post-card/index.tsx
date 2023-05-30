import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { FC } from "react";
import { SupaProfile } from "@/supabase/types/types";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: {
    title: string;
    slug: string;
    createdAt: string;
    author: SupaProfile;
  };
}
const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <Card className="max-w-lg w-full">
      <CardHeader>
        <CardTitle>
          <Link
            className="hover:underline"
            href={`${post.author.username}/${post.slug}`}
          >
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row sm:justify-between">
        <span className="text-sm text-gray-500">
          By{" "}
          <Link
            className={cn(
              buttonVariants({
                variant: "link",
                size: "sm",
              }),
              "font-semibold p-0 text-gray-500"
            )}
            href={`${post.author.username}/profile`}
          >
            {post.author.firstName} {post.author.lastName}
          </Link>
        </span>
        <span className="text-sm text-gray-500">
          Published {formatDistanceToNow(new Date(post.createdAt))} ago
        </span>
      </CardContent>
    </Card>
  );
};

export default PostCard;
