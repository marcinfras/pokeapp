"use client";

import { useEffect, useState } from "react";
import { Pokemon } from "./_components/Pokemon";

// async function getPokemons() {
//   const res = await fetch(`${process.env.API_URL}`);

//   if (!res.ok) throw new Error("Failed to fetch pokemons");

//   const data = await res.json();

//   return data;
// }

type Pokemons = {
  name: string;
  url: string;
}[];

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemons | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log(pokemons);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);

        if (!res.ok) throw new Error("Failed to fetch pokemons");

        const { results } = await res.json();

        setPokemons(results as Pokemons);
      } catch (error) {
        throw new Error((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return (
    <main className="">
      {isLoading && <p>Loading...</p>}
      <div className="flex gap-4 flex-wrap justify-around items-center p-3">
        {pokemons?.map((poke) => (
          <Pokemon key={poke.name} pokemon={poke} />
        ))}
        {/* <Pokemon
          pokemon={{
            name: "dsaduiyaghuiwdahuif wauiuhfahfoawuihuiofawhihifwahiowfa",
            url: "dasdsa",
          }}
        /> */}
      </div>
    </main>
  );
}
