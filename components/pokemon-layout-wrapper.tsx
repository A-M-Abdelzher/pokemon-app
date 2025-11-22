"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function PokemonLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPaginationView = pathname === "/pokemon/pagination-view";
  const isLoadMoreView = pathname === "/pokemon/loadmore-view";

  return (
    <section
      className={cn(
        "p-6 min-h-screen transition-colors duration-300 bg-linear-to-r",
        isPaginationView && "from-blue-50 to-blue-100",
        isLoadMoreView && "from-green-50 to-green-100",
        !isPaginationView && !isLoadMoreView && "from-gray-50 to-gray-100"
      )}
    >
      {children}
    </section>
  );
}
