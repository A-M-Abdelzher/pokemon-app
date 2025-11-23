import type { PokemonDetailResponse } from "@/lib/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_POKEAPI_URL || "https://pokeapi.co/api/v2";

export async function getPokemonDetail(
  nameOrId: string
): Promise<PokemonDetailResponse | null> {
  const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`, {
    // Cache the response for 5 minutes (300 seconds)
    // This reduces API calls and improves performance
    next: { revalidate: 300 },
  });
  if (!response.ok) {
    return null;
  }
  return response.json();
}
