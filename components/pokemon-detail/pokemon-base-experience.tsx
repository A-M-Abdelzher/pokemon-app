import { PokemonDetailResponse } from "@/lib/types";

interface PokemonBaseExperienceProps {
  pokemon: PokemonDetailResponse;
}

export function PokemonBaseExperience({ pokemon }: PokemonBaseExperienceProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Base Experience</h2>
      <p className="text-3xl font-bold bg-linear-to-r from-purple-500 to-rose-500 bg-clip-text text-transparent">
        {pokemon.base_experience} XP
      </p>
    </div>
  );
}
