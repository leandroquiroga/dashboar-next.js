"use client";
import { useMemo, useState } from "react";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { NotFavorites } from "./NotFavorites";
import { SimplePokemon } from "../interfaces/simple-pokemon";

export const FavoritePokemon = () => {
  const favoritesPokemonsState = useAppSelector(
    (state) => state.favoritesPokemons.favourite
  );

  const favoritePokemons = useMemo(() => {
    return Object.values(favoritesPokemonsState);
  }, [favoritesPokemonsState]);

  const [pokemons, setPokemons] = useState<SimplePokemon[]>(favoritePokemons);

  return (
    <>
      {pokemons.length === 0 ? (
        <NotFavorites />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};
