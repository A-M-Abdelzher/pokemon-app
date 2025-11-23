import { Badge } from "@/components/ui/badge";
import { PokemonDetailResponse } from "@/lib/types";

interface PokemonAbilitiesProps {
  pokemon: PokemonDetailResponse;
}

export function PokemonAbilities({ pokemon }: PokemonAbilitiesProps) {
  console.log(pokemon.abilities[1]);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Abilities</h2>
      <div className="space-y-2 font-medium">
        {pokemon.abilities.map((ability) => (
          <div key={ability.ability.name} className="flex items-center gap-2">
            <Badge
              variant={
                ability.ability.name === "solar-power" ? "secondary" : "outline"
              }
              className="capitalize"
            >
              {ability.ability.name.replace("-", " ")}
            </Badge>
            {ability.is_hidden && (
              <span className="text-xs text-gray-500">{`(Hidden)`}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
