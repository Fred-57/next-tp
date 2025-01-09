"use client";

import { Card } from "@/components/ui/card";
import { pokemonsContext } from "@/providers/PokemonsProvider";
import { useContext } from "react";
import Image from "next/image";

function Link({ id }) {
  return (
    <a className="w-fit bg-red-500" href={`/pokemon/${id}`}>
      Plus d'infos
    </a>
  );
}

export default function test() {
  const contextPokemons = useContext(pokemonsContext);
  const { pokemons, setPokemons } = contextPokemons;

  const handleClickPokemon = () => {};

  return (
    <>
      <div className="flex flex-wrap gap-2 w-full justify-items-center">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            value={pokemon.id}
            onClick={handleClickPokemon}
          >
            <Image
              src={pokemon.image}
              width={150}
              height={150}
              alt="Picture of the author"
            ></Image>
            <div className="flex flex-col items-center">
              <Link id={pokemon.id}></Link>
              {pokemon.name}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
