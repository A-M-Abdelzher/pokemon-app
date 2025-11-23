import { GridSkeleton } from "@/components/loading-skeletons";
import { PaginationControls } from "@/components/pagination-controls";
import { PokemonGrid } from "@/components/pokemon-grid";
import { getPokemonListServer } from "@/lib/api/getPokemonList";
import { ITEMS_PER_PAGE } from "@/lib/constants";
import { Suspense } from "react";

export default async function PaginationView({
  searchParams,
}: {
  searchParams: Promise<{
    page: string;
  }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const offset = (page - 1) * ITEMS_PER_PAGE;
  const pokemonList = await getPokemonListServer(ITEMS_PER_PAGE, offset);
  const totalPages = Math.ceil(pokemonList.count / ITEMS_PER_PAGE);

  return (
    <div className="my-8">
      <Suspense fallback={<GridSkeleton />}>
        <PokemonGrid pokemons={pokemonList?.results} />
      </Suspense>
      <Suspense
        fallback={<div className="h-10 bg-gray-200 rounded w-1/2"></div>}
      >
        <PaginationControls currentPage={page} totalPages={totalPages} />
      </Suspense>
    </div>
  );
}
