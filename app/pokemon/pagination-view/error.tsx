"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const handleReset = () => {
    setIsResetting(true);
    try {
      reset();
    } catch (resetError) {
      console.error("Error resetting:", resetError);
      setIsResetting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4 p-4 bg-white">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription>
          {error.message || "Failed to load Pokémon data. Please try again."}
        </AlertDescription>
      </Alert>
      <Button onClick={handleReset} disabled={isResetting} type="button">
        {isResetting ? "Retrying..." : "Try again"}
      </Button>
    </div>
  );
}
