import Image from "next/image";
import { PokemonDetailResponse } from "@/lib/types";

interface PokemonImageProps {
  pokemon: PokemonDetailResponse;
}

export function PokemonImage({ pokemon }: PokemonImageProps) {
  return (
    <div className="aspect-square relative bg-gray-50 rounded-full flex items-center justify-center p-4 sm:p-6 md:p-8 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] m-auto">
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
