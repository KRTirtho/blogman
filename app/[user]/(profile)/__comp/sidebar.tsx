"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { useSupabase } from "@/utils/hooks/useSupabase";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const pages = Object.entries({
  profile: "Profile",
  posts: "Posts",
  settings: "Settings",
});

const Sidebar = () => {
  const router = useRouter();
  const supabase = useSupabase();
  const pathname = usePathname();
  const params = useParams();

  return (
    <nav className="sm:min-w-[8rem]">
      <ul className="w-full flex sm:flex-col">
        {pages.map(([page, title]) => (
          <li key={page}>
            <Button
              asChild
              className="w-full flex justify-start"
              variant={pathname.includes(page) ? "default" : "link"}
            >
              <Link href={`/${params.user}/${page}`}>{title}</Link>
            </Button>
          </li>
        ))}
        <li>
          <Button
            className="w-full flex justify-start text-destructive hover:text-destructive"
            variant="outline"
            onClick={() => {
              supabase.auth.signOut();
              router.push("/login");
            }}
          >
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
