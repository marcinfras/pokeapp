// "use client";

import Link from "next/link";
import { LinkToHome } from "../_components/LinkToHome";

async function getPokemon(pokeName: string) {
  const res = await fetch(`${process.env.API_URL}/pokemon/${pokeName}`);

  if (!res.ok) throw new Error(`Failed to get ${pokeName} data`);

  const { name, abilities, weight } = await res.json();

  return { name, abilities, weight } as {
    name: string;
    abilities: {
      ability: {
        name: string;
        url: string;
      };
      is_hidden: boolean;
      slot: number;
    }[];
    weight: number;
  };
}

export default async function Page({
  params,
}: {
  params: { pokemon: string };
}) {
  const pokemon = await getPokemon(params.pokemon);
  console.log(pokemon);

  return (
    <div className="text-center py-10 flex flex-col gap-3">
      <h1 className="font-semibold text-3xl uppercase">{pokemon.name}</h1>
      <div>
        <h2 className="font-semibold text-xl">Ability:</h2>
        {pokemon.abilities.map(({ ability }) => (
          <p key={ability.url}>{ability.name}</p>
        ))}
        <p className="mt-2">Weight: {pokemon.weight}</p>
      </div>
      <div className="mt-4">
        <LinkToHome />
      </div>
    </div>
  );
}
