interface EndOfListMessageProps {
  totalCount: number;
}

export function EndOfListMessage({ totalCount }: EndOfListMessageProps) {
  return (
    <div className="text-center py-8 text-muted-foreground">
      <p>
        You&apos;ve reached the end! All {totalCount} Pokémon have been loaded.
      </p>
    </div>
  );
}

