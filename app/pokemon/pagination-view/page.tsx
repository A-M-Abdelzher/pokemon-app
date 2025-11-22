import { GridSkeleton } from "@/components/loading-skeletons";
import { PaginationControls } from "@/components/pagination-controls";
import { PokemonCard } from "@/components/pokemon-card";
import { getPokemonList } from "@/lib/api/getPokemonList";
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
  const pokemonList = await getPokemonList(ITEMS_PER_PAGE, offset);
  const totalPages = Math.ceil(pokemonList.count / ITEMS_PER_PAGE);

  return (
    <div className="my-8">
      <Suspense fallback={<GridSkeleton />}>
        <div
          key={`page-${page}`}
          className="grid animate-fade-in grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {pokemonList?.results?.map((p) => (
            <PokemonCard key={p.name} pokemon={p} />
          ))}
        </div>
      </Suspense>
      <Suspense
        fallback={<div className="h-10 bg-gray-200 rounded w-1/2"></div>}
      >
        <PaginationControls currentPage={page} totalPages={totalPages} />
      </Suspense>
    </div>
  );
}
