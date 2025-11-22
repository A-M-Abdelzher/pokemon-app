"use client";

import { usePathname } from "next/navigation";

export function PokemonDescription() {
  const pathname = usePathname();
  const isPaginationView = pathname === "/pokemon/pagination-view";
  const isLoadMoreView = pathname === "/pokemon/loadmore-view";

  const getDescription = () => {
    if (isPaginationView) {
      return "Discover and explore Pokemon with page controls";
    }
    if (isLoadMoreView) {
      return "Discover and explore Pokemon with infinite scroll";
    }
    return "Discover and explore Pokemon";
  };

  return (
    <p className="text-sm text-muted-foreground font-medium text-center my-6">
      {getDescription()}
    </p>
  );
}
