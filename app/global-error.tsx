"use client"; // Error boundaries must be Client Components
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html lang="en">
      <body className={`antialiased bg-background text-foreground`}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-4">
          <div className="flex flex-col items-center gap-6 text-center max-w-lg">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center size-16 rounded-full bg-destructive/10 dark:bg-destructive/20">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Something went wrong!
              </h1>
              <p className="text-lg text-muted-foreground">
                {error.message ||
                  "An unexpected error occurred while loading the application. Please try again."}
              </p>
            </div>

            {error.digest && (
              <div className="w-full rounded-md bg-muted px-4 py-2 text-sm font-mono text-muted-foreground">
                Error ID: {error.digest}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              onClick={() => reset()}
              variant="default"
              size="lg"
              className="w-full sm:w-auto"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Try again
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
