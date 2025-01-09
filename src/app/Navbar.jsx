import { pokemonsContext } from "@/providers/PokemonsProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

function Link({ exercice }) {
  // const { theme } = useContext(themeContext);
  // console.log(theme);

  return (
    <li style={{ padding: "5px 0" }}>
      <a href={`/exercices/${exercice}`}>Exercice {exercice}</a>
    </li>
  );
}

export default function Navbar() {
  const [queryPokemon, setQueryPokemon] = useState("");
  const [queryType, setQueryType] = useState("");
  const [types, setTypes] = useState([]);
  const [limit, setLimit] = useState(50);
  const contextPokemons = useContext(pokemonsContext);
  const { pokemons, setPokemons } = contextPokemons;

  const handleQueryPokemon = (event) => {
    setQueryPokemon(event.target.value);
  };

  const handleQueryType = (event) => {
    console.log(event.target.value);

    setQueryType(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://nestjs-pokedex-api.vercel.app/pokemons")
      .then((response) => {
        console.log(response.data);
        setPokemons(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://nestjs-pokedex-api.vercel.app/pokemons", {
        params: { name: queryPokemon, limit },
      })
      .then((response) => {
        console.log(response.data);
        setPokemons(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [queryPokemon]);

  useEffect(() => {
    axios
      .get("https://nestjs-pokedex-api.vercel.app/pokemons", {
        params: { types: queryType, limit },
      })
      .then((response) => {
        console.log(response.data);
        setPokemons(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setQueryPokemon("");
  }, [queryType]);

  useEffect(() => {
    axios
      .get("https://nestjs-pokedex-api.vercel.app/types")
      .then((response) => {
        console.log(response.data);
        setTypes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="navbar">
      <h1 className="text-3xl font-bold underline">Exercices</h1>
      <nav className="flex gap-2">
        <input
          type="name-pokemon"
          value={queryPokemon}
          onChange={handleQueryPokemon}
        />
        <select name="types-pokemon" onChange={handleQueryType}>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
          {/* <option value="">All</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option> */}
        </select>
        <select name="limit-pokemon">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </nav>
    </div>
  );
}
