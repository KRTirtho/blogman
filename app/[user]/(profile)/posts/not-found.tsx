"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

const PostNotFound = () => {
  return (
    <div className="flex flex-col gap-10 items-center mt-[20vh]">
      <div>
        <h1 className="text-lg font-semibold">Nothing to see here</h1>
        <p>Looks like you haven&apos;t created any posts yet.</p>
      </div>
      <Button asChild>
        <Link className="flex gap-1" href="/create">
          <Pencil size="18" />
          Go Destroy Literacy
        </Link>
      </Button>
    </div>
  );
};

export default PostNotFound;
