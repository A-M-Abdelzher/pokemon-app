import { Button } from "@/components/ui/button";

export function ErrorState() {
  return (
    <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200 text-center">
      Failed to load Pokémon. Please try again.
      <Button onClick={() => window.location.reload()} variant="outline" className="mt-2">
        Retry
      </Button>
    </div>
  );
}

