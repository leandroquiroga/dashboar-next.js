import { SimplePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit';


export interface FavouritePokemon {
  [key: string]: SimplePokemon;
};

const initialState: FavouritePokemon = {
  "1": {
    id: "1",
    name: "bulbasaur",
  },
};

const favouritePokemonsSlice = createSlice({
  name: 'favouritePokemons',
  initialState,
  reducers: {
    addFavouritePokemon: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    removeFavouritePokemon: (state, action) => {
      delete state[action.payload.id];
    },
  },
});

export const { addFavouritePokemon, removeFavouritePokemon } = favouritePokemonsSlice.actions;

export default favouritePokemonsSlice.reducer;