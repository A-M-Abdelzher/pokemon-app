"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { PokemonCard } from "@/components/pokemon-card";
import { GridSkeleton } from "@/components/loading-skeletons";
import { PokemonListItem } from "@/lib/types";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import { getPokemonListClient } from "@/lib/api/getPokemonList";
import { Button } from "@/components/ui/button";

export default function LoadMorePage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["pokemon", "infinite"],
    queryFn: async ({ pageParam = 0 }) => {
      const listData = await getPokemonListClient(ITEMS_PER_PAGE, pageParam);

      return {
        pokemons: listData.results,
        nextOffset: pageParam + ITEMS_PER_PAGE,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextOffset,
    initialPageParam: 0,
  });

  const allPokemons = data?.pages.flatMap((page) => page.pokemons) ?? [];

  return (
    <div className="space-y-4">
      {isLoading ? (
        <GridSkeleton count={ITEMS_PER_PAGE} />
      ) : isError && allPokemons.length === 0 ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200 text-center">
          Failed to load Pokémon. Please try again.
          <Button onClick={() => window.location.reload()} variant="outline">
            Retry
          </Button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allPokemons.map((p: PokemonListItem) => (
              <PokemonCard key={p.name} pokemon={p} />
            ))}
          </div>

          {hasNextPage && (
            <div className="flex justify-center mt-12">
              <Button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                className={
                  isFetchingNextPage ? "opacity-50 cursor-not-allowed" : ""
                }
                variant={isFetchingNextPage ? "ghost" : "default"}
              >
                {isFetchingNextPage ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Loading
                    more Pokémon...
                  </>
                ) : (
                  "Load More Pokémon"
                )}
              </Button>
            </div>
          )}
          <p className="text-center text-muted-foreground">
            Showing {allPokemons.length} Pokémon
          </p>
          {!hasNextPage && allPokemons.length > 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <p>
                You&apos;ve reached the end! All {allPokemons.length} Pokémon
                have been loaded.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
