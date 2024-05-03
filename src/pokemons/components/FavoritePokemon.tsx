"use client";
import React, { Suspense } from "react";
import { useMemo } from "react";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { NotFavorites } from "./NotFavorites";
import { Spinner } from "@/components/dashboard/Spinner";
// import { SimplePokemon } from "../interfaces/simple-pokemon";

export const FavoritePokemon = () => {
  const favoritesPokemonsState = useAppSelector(
    (state) => state.favoritesPokemons.favourite
  );

  const favoritePokemons = useMemo(() => {
    return Object.values(favoritesPokemonsState);
  }, [favoritesPokemonsState]);

  // const [pokemons, setPokemons] = useState<SimplePokemon[]>(favoritePokemons);

  // useEffect(() => {
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {favoritePokemons.length === 0 ? (
          <NotFavorites />
        ) : (
          <PokemonGrid pokemons={favoritePokemons} />
        )}
      </Suspense>
    </>
  );
};
