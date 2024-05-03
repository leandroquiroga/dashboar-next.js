"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { setFavouritePokemons } from "./favorite/pokemons";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props): JSX.Element => {
  useEffect(() => {
    const favotites = JSON.parse(localStorage.getItem("favourite") ?? "{}");

    store.dispatch(setFavouritePokemons(favotites));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
