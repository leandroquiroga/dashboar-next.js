'use client';
import { use, useEffect, useState } from "react";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { NotFavorites } from "./NotFavorites";

export const FavoritePokemon = () => {
  const favoritePokemons = useAppSelector((state) => Object.values(state.favoritesPokemons));

  const [pokemons, setPokemons] = useState(favoritePokemons);

  
  return (
    <>
      {pokemons.length === 0 ? <NotFavorites /> : <PokemonGrid pokemons={pokemons} />}
    </>
  );
};
