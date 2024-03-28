import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/CounterSlice';
import favouritesPokemonsReducer from './favourite/pokemons';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Configuracion del store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    favouritesPokemons: favouritesPokemonsReducer,
  }, //TODO: Agregar los reducers, hojas de nuestro store
});

// Tipado estricto para el store
export type RootState = ReturnType<typeof store.getState>;

//Tipado estricto para el dispatch
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
