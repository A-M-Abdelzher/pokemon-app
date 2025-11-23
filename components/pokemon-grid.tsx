import { PokemonCard } from "@/components/pokemon-card";
import type { PokemonListItem } from "@/lib/types";

interface PokemonGridProps {
  pokemons: PokemonListItem[];
}

export function PokemonGrid({ pokemons }: PokemonGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
