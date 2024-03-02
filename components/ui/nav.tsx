"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Nav() {
  const pathname = usePathname();
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Github", link: "/" },
  ];
  return (
    <div className="mr-4">
      <DefaultNav links={Links} />
      <MobileNav links={Links} />
    </div>
  );
}

function MobileNav({ links }: any) {
  return (
    <nav className="flex bg-zinc-100 justify-around md:hidden p-2 w-screen border shadow-xl">
      {links?.map((link: any) => {
        return <Link className="text-xl text-muted-foreground hover:text-primary" href={link.link}>{link.name}</Link>;
      })}
    </nav>
  );
}

function DefaultNav({ links }: any) {
  return (
    <nav className="hidden md:flex">
      {links?.map((link: any) => {
        return <Link href={link.link}>{link.name}</Link>;
      })}
    </nav>
  );
}
