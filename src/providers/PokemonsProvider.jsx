import { createContext, useState } from "react";

export const pokemonsContext = createContext();

export default function PokemonsProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);

  return (
    <pokemonsContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </pokemonsContext.Provider>
  );
}
