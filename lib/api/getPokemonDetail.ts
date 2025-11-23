import type { PokemonDetailResponse } from "@/lib/types";

// This is a proxy to bypass the CORS policy
// It is not a secure way to bypass the CORS policy
// this hot fix is used because the pokeapi.co is not allowing the requests from the browser

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2";

export async function getPokemonDetail(
  nameOrId: string
): Promise<PokemonDetailResponse | null> {
  const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`, {
    // Cache the response for 5 minutes (300 seconds)
    // This reduces API calls and improves performance
    next: { revalidate: 300 },
    headers: {
      Origin: "https://pokeapi.co",
      "X-Requested-With": "XMLHttpRequest",
    },
  });
  if (!response.ok) {
    return null;
  }
  return response.json();
}
