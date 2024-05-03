import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavouritesType = {
  [key: string]: SimplePokemon;
};
export interface FavouritePokemon {
  favourite: FavouritesType;
}

const getInitialState = () => {
  if (typeof window === "undefined") return {};
  const favourite = JSON.parse(localStorage.getItem("favourite") ?? "{}");
  return favourite;
};

const initialState: FavouritePokemon = {
  favourite: {},
  // ...getInitialState(),
};

const favoritePokemonsSlice = createSlice({
  name: "favoritePokemons",
  initialState,
  reducers: {
    setFavouritePokemons: (state, action: PayloadAction<FavouritesType>) => {
      state.favourite = action.payload;
    },

    toggleFavoritePokemon: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;

      // Chequamos si el id existe con la doble negacion. Si existe, lo eliminamos
      if (!!state.favourite[id]) {
        delete state.favourite[id];
      } else {
        // Si no existe, lo agregamos
        state.favourite[id] = pokemon;
      }

      localStorage.setItem("favourite", JSON.stringify(state.favourite));
    },
  },
});

export const { toggleFavoritePokemon, setFavouritePokemons } = favoritePokemonsSlice.actions;

export default favoritePokemonsSlice.reducer;
