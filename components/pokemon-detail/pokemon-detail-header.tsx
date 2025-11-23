import { CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { formatPokemonId, formatPokemonName } from "@/lib/utils";
import { PokemonDetailResponse } from "@/lib/types";

interface PokemonDetailHeaderProps {
  pokemon: PokemonDetailResponse;
}

export function PokemonDetailHeader({ pokemon }: PokemonDetailHeaderProps) {
  return (
    <CardHeader className="bg-linear-to-r from-purple-500 to-rose-500 p-4 text-center text-white gap-0">
      <CardTitle className="">
        <h6 className="text-2xl font-bold capitalize flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" />
          {formatPokemonName(pokemon.name)}
        </h6>
        <p className="text-gray-200 text-lg mt-2 font-normal">
          {formatPokemonId(pokemon.id)}
        </p>
      </CardTitle>
    </CardHeader>
  );
}
