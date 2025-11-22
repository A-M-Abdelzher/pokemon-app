"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

const navLinks = [
  {
    label: "Page Controls",
    href: "/pokemon/pagination-view",
  },
  {
    label: "Infinite Scroll",
    href: "/pokemon/loadmore-view",
  },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 my-4 w-full justify-center">
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button
            variant={pathname === link.href ? "default" : "outline"}
            className={
              pathname === link.href ? "border border-transparent" : ""
            }
          >
            {link.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
