import React from "react";
import { BackButton } from "./back-button";
import { Card } from "./ui/card";
import { Zap } from "lucide-react";
import { PokemonDetailResponse } from "@/lib/types";
import { formatPokemonId, formatPokemonName } from "@/lib/utils";

export const PokemonDetail = ({
  pokemon,
}: {
  pokemon: PokemonDetailResponse;
}) => {
  return (
    <div className="bg-linear-to-r from-pink-50 to-pink-100">
      <BackButton />
      <Card>
        {/* Gradient Header */}
        <div className="bg-linear-to-r from-pink-500 to-pink-600 p-8 text-center text-white">
          <h1 className="text-4xl font-bold capitalize flex items-center justify-center gap-2">
            <Zap className="w-8 h-8" />
            {formatPokemonName(pokemon.name)}
          </h1>
          <p className="text-muted-foreground text-lg mt-2">
            {formatPokemonId(pokemon.id)}
          </p>
        </div>
      </Card>
    </div>
  );
};
