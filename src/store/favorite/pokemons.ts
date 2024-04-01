import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface FavouritePokemon {
  [key: string]: SimplePokemon;
};

const initialState: FavouritePokemon = {
  // "1": {
  //   id: "1",
  //   name: "bulbasaur",
  // },
  // "4": {
  //   id: "4",
  //   name: "charmander",
  // },
  // "7": {
  //   id: "7",
  //   name: "squirtle",
  // },
};

const favoritePokemonsSlice = createSlice({
  name: 'favoritePokemons',
  initialState,
  reducers: {

    toggleFavoritePokemon: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;
      
      // Chequamos si el id existe con la doble negacion. Si existe, lo eliminamos
      if (!!state[id]) { 
        delete state[id];
        return;
      }
      // Si no existe, lo agregamos
      state[id] = pokemon;
    },
  },
});

export const { toggleFavoritePokemon } = favoritePokemonsSlice.actions;

export default favoritePokemonsSlice.reducer;