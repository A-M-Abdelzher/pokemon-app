import { useInfiniteQuery } from "@tanstack/react-query";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import { getPokemonListClient } from "@/lib/api/getPokemonList";
import type { PokemonListItem } from "@/lib/types";

interface PokemonPage {
  pokemons: PokemonListItem[];
  nextOffset: number;
}

export function usePokemonInfiniteQuery() {
  const query = useInfiniteQuery({
    queryKey: ["pokemon", "infinite"],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const listData = await getPokemonListClient(ITEMS_PER_PAGE, pageParam);

      return {
        pokemons: listData.results,
        nextOffset: pageParam + ITEMS_PER_PAGE,
      };
    },
    getNextPageParam: (lastPage: PokemonPage) => lastPage.nextOffset,
    initialPageParam: 0,
  });

  const allPokemons =
    query.data?.pages.flatMap((page: PokemonPage) => page.pokemons) ?? [];

  return {
    ...query,
    allPokemons,
  };
}
