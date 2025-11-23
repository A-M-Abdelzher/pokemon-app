import type { PokemonListResponse } from "@/lib/types";

const BASE_URL =
  process.env.NEXT_PUBLIC_POKEAPI_URL || "https://pokeapi.co/api/v2";

export async function getPokemonListServer(
  limit = 20,
  offset = 0
): Promise<PokemonListResponse> {
  // Use direct API URL for server-side requests (no CORS needed)
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
    {
      // Cache the response for 1 hour (3600 seconds)
      // This reduces API calls and improves performance
      next: { revalidate: 3600 },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch pokemon list");
  }
  return response.json();
}
export async function getPokemonListClient(
  limit = 20,
  offset = 0
): Promise<PokemonListResponse> {
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.json();
}
