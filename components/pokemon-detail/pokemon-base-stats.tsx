import { Progress } from "@/components/ui/progress";
import { PokemonDetailResponse } from "@/lib/types";

interface PokemonBaseStatsProps {
  pokemon: PokemonDetailResponse;
}

const STAT_NAMES: Record<string, string> = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Attack",
  "special-defense": "Sp. Defense",
  speed: "Speed",
};

export function PokemonBaseStats({ pokemon }: PokemonBaseStatsProps) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Base Stats</h2>
      <div className="space-y-3">
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">
                {STAT_NAMES[stat.stat.name] || stat.stat.name}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {stat.base_stat}
              </span>
            </div>
            <Progress value={(stat.base_stat / 255) * 100} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
