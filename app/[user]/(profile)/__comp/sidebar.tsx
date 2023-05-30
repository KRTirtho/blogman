"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const pages = Object.entries({
  profile: "Profile",
  posts: "Posts",
  settings: "Settings",
});

const Sidebar = () => {
  const pathname = usePathname();

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
              <Link href={page}>{title}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
