import Link from "next/link";
import Image from "next/image";
import { PokemonListItem } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { POKEMON_IMAGE_BASE_URL } from "@/lib/constants";

/**
 * Props for the PokemonCard component
 */
interface PokemonCardProps {
  pokemon: PokemonListItem;
}

/**
 * PokemonCard Component
 *
 * Displays a Pokemon card with image, name, and ID.
 * The card is clickable and navigates to the Pokemon detail page.
 *
 * @param pokemon - Pokemon data from the API (name and URL)
 * @returns A clickable card component displaying Pokemon information
 */
export function PokemonCard({ pokemon }: PokemonCardProps) {
  // Extract Pokemon ID from URL
  // URL format: https://pokeapi.co/api/v2/pokemon/1/
  // Split by "/", filter out empty strings, and get the last part (the ID)
  const urlParts = pokemon.url.split("/").filter(Boolean);
  const pokemonId = urlParts[urlParts.length - 1] || "1";

  // Construct the official artwork image URL from PokeAPI sprites
  const pokemonImage = `${POKEMON_IMAGE_BASE_URL}/${pokemonId}.png`;

  return (
    <Link href={`/pokemon/${pokemonId}`} className="group block">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4">
        <div className="relative h-42 bg-muted/50 flex items-center justify-center p-4">
          <Image
            src={pokemonImage}
            alt={pokemon.name}
            width={150}
            height={150}
            className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
            // Prioritize loading images for the first 20 Pokemon for better performance
            priority={Number(pokemonId) <= 20}
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold capitalize group-hover:text-[#DC2626] transition-colors">
            {pokemon.name}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">
            #{pokemonId.toString().padStart(3, "0")}
          </p>
        </div>
      </Card>
    </Link>
  );
}
