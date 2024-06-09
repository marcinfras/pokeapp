import Link from "next/link";
import { redirect } from "next/navigation";

export function Pokemon({
  pokemon,
}: {
  pokemon: { name: string; url: string };
}) {
  return (
    <Link
      href={`/${pokemon.name}`}
      className="cursor-pointer bg-stone-200 w-60 text-center p-2"
    >
      {pokemon.name}
    </Link>
  );
}
