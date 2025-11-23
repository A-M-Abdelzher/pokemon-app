import { Ruler, Weight } from "lucide-react";
import { PokemonDetailResponse } from "@/lib/types";

interface PokemonPhysicalStatsProps {
  pokemon: PokemonDetailResponse;
}

export function PokemonPhysicalStats({ pokemon }: PokemonPhysicalStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className="bg-gray-50 p-4 rounded-md text-center">
        <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
          <Ruler className="w-4 h-4" />
          <span className="text-xs font-medium uppercase">Height</span>
        </div>
        <p className="text-xl font-bold text-gray-900">
          {pokemon.height / 10} m
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-md text-center">
        <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
          <Weight className="w-4 h-4" />
          <span className="text-xs font-medium uppercase">Weight</span>
        </div>
        <p className="text-xl font-bold text-gray-900">
          {pokemon.weight / 10} kg
        </p>
      </div>
    </div>
  );
}

