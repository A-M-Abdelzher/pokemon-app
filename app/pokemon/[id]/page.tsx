import { getPokemonDetail } from "@/lib/api/getPokemonDetail";
import { getPokemonListServer } from "@/lib/api/getPokemonList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PokemonDetailHeader } from "@/components/pokemon-detail/pokemon-detail-header";
import { PokemonImage } from "@/components/pokemon-detail/pokemon-image";
import { PokemonBaseStats } from "@/components/pokemon-detail/pokemon-base-stats";
import { PokemonAbilities } from "@/components/pokemon-detail/pokemon-abilities";
import { PokemonBaseExperience } from "@/components/pokemon-detail/pokemon-base-experience";
import { PokemonPhysicalStats } from "@/components/pokemon-detail/pokemon-physical-stats";
import { PokemonTypes } from "@/components/pokemon-detail/pokemon-types";

// ISR: Revalidate every hour (3600 seconds)
export const revalidate = 3600;

// Generate static params for the first 50 Pokemon at build time
export async function generateStaticParams() {
  try {
    const pokemonList = await getPokemonListServer(50, 0);

    return pokemonList.results.map((pokemon) => {
      // Extract ID from URL (e.g., "https://pokeapi.co/api/v2/pokemon/1/")
      const id = pokemon.url.split("/").filter(Boolean).pop() || pokemon.name;
      return {
        id: id,
      };
    });
  } catch (error) {
    // If static generation fails, return empty array to allow dynamic generation
    // This prevents build failures when the API is unavailable
    console.warn(
      "Failed to generate static params, falling back to dynamic generation:",
      error
    );
    return [];
  }
}

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  if (!id) {
    notFound();
  }
  const pokemon = await getPokemonDetail(id);
  if (!pokemon) {
    notFound();
  }
  return (
    <div className="bg-linear-to-r from-purple-50 to-rose-100 p-4 sm:p-6 md:p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Link href="/pokemon/pagination-view">
          <Button variant="outline" className="mb-4 w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4" />
            Back to list
          </Button>
        </Link>
        {/* Pokemon Detail Card */}
        <Card className="bg-white shadow-none overflow-hidden max-w-3xl mx-auto py-0">
          <PokemonDetailHeader pokemon={pokemon} />
          {/* Pokemon Detail Content */}
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
              {/* Left Column - Image, Types and Physical Stats */}
              <div className="space-y-4 sm:space-y-6 lg:col-span-6">
                <PokemonImage pokemon={pokemon} />
                <PokemonTypes pokemon={pokemon} />
                <PokemonPhysicalStats pokemon={pokemon} />
              </div>
              {/* Right Column - Details */}
              <div className="space-y-4 sm:space-y-6 lg:col-span-6">
                <PokemonBaseStats pokemon={pokemon} />
                <PokemonAbilities pokemon={pokemon} />
                <PokemonBaseExperience pokemon={pokemon} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
