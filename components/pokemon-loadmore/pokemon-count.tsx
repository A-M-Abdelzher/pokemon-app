interface PokemonCountProps {
  count: number;
}

export function PokemonCount({ count }: PokemonCountProps) {
  return (
    <p className="text-center text-muted-foreground">
      Showing {count} Pokémon
    </p>
  );
}

