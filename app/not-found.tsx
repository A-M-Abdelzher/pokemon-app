import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-4">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <FileQuestion className="h-12 w-12 text-muted-foreground" />
          <h1 className="text-6xl font-bold text-foreground">404</h1>
        </div>
        <h2 className="text-2xl font-semibold text-foreground">
          Pokémon Not Found
        </h2>
        <p className="max-w-md text-muted-foreground">
          The Pokémon you&apos;re looking for has fled! This page doesn&apos;t
          exist in the Pokédex.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild variant="default">
          <Link href="/pokemon/pagination-view">
            <Home className="mr-2 h-4 w-4" />
            Back to Pokédex
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
