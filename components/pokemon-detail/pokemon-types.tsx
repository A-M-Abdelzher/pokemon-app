import { Badge } from "@/components/ui/badge";
import { PokemonDetailResponse } from "@/lib/types";

interface PokemonTypesProps {
  pokemon: PokemonDetailResponse;
}

export function PokemonTypes({ pokemon }: PokemonTypesProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {pokemon.types.map((type) => (
        <Badge key={type.slot} className="bg-rose-500 text-white">
          {type.type.name}
        </Badge>
      ))}
    </div>
  );
}
