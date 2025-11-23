import { ZapIcon } from "lucide-react";
import { PokemonLayoutWrapper } from "../../../components/pokemon-layout-wrapper";
import { NavLinks } from "../../../components/nav-links";
import { PokemonDescription } from "../../../components/pokemon-description";

export default async function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PokemonLayoutWrapper>
      <div className="flex items-center justify-center gap-2">
        <ZapIcon className="min-w-7 min-h-7 text-yellow-500" />
        <h1 className="text-4xl font-bold text-slate-900">Pokédex</h1>
      </div>
      <PokemonDescription />
      <NavLinks />
      {children}
    </PokemonLayoutWrapper>
  );
}
