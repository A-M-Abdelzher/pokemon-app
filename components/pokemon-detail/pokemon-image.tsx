import Image from "next/image";
import { PokemonDetailResponse } from "@/lib/types";

interface PokemonImageProps {
  pokemon: PokemonDetailResponse;
}

export function PokemonImage({ pokemon }: PokemonImageProps) {
  return (
    <div className="aspect-square relative bg-gray-50 rounded-full flex items-center justify-center p-8">
      <Image
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="object-contain"
        fill
        priority={true}
      />
    </div>
  );
}
