import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export function LoadMoreButton({ onClick, isLoading }: LoadMoreButtonProps) {
  return (
    <div className="flex justify-center mt-12">
      <Button
        onClick={onClick}
        disabled={isLoading}
        className={isLoading ? "opacity-50 cursor-not-allowed" : ""}
        variant={isLoading ? "ghost" : "default"}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Loading more
            Pokémon...
          </>
        ) : (
          "Load More Pokémon"
        )}
      </Button>
    </div>
  );
}

