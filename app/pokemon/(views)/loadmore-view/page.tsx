"use client";

import { GridSkeleton } from "@/components/loading-skeletons";
import { usePokemonInfiniteQuery } from "@/hooks/usePokemonInfiniteQuery";
import { PokemonGrid } from "@/components/pokemon-grid";
import { LoadMoreButton } from "@/components/pokemon-loadmore/load-more-button";
import { ErrorState } from "@/components/pokemon-loadmore/error-state";
import { PokemonCount } from "@/components/pokemon-loadmore/pokemon-count";
import { EndOfListMessage } from "@/components/pokemon-loadmore/end-of-list-message";

export default function LoadMorePage() {
  const {
    allPokemons,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = usePokemonInfiniteQuery();

  const showError = isError && allPokemons.length === 0;

  return (
    <div className="space-y-4 my-8">
      {isLoading ? (
        <GridSkeleton />
      ) : showError ? (
        <ErrorState />
      ) : (
        <>
          <PokemonGrid pokemons={allPokemons} />

          {hasNextPage && (
            <LoadMoreButton
              onClick={() => fetchNextPage()}
              isLoading={isFetchingNextPage}
            />
          )}

          <PokemonCount count={allPokemons.length} />

          {!hasNextPage && allPokemons.length > 0 && (
            <EndOfListMessage totalCount={allPokemons.length} />
          )}
        </>
      )}
    </div>
  );
}
