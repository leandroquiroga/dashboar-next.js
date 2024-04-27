/**
 * Este middleware captura cada acción despachada, permite que la acción continúe su flujo hacia el reducer, y mientras tanto,
 * guarda el estado actualizado de la aplicación en el localStorage bajo la clave 'store', asegurando así que el estado pueda persistir entre recargas de página.
 *
 * Esto es util para persistir el estado entre recargas de la pagina, ya que cada vez que se despecha una accion, se guarda el estado en el localStorage.
 *
 * La funcion basicamente se encarga de retornar otra funcion. El argumento next hace una referencia al siguiente middleware en la cadena de middlewares.
 *
 * Si la acción que se esta despachando es de tipo 'favoritePokemons/toggleFavoritePokemon', entonces se obtiene el estado actual de la aplicación y se guarda en el localStorage.
 */

import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type.includes("favoritePokemons/toggleFavoritePokemon")) {
      const { favoritesPokemons } = state.getState() as RootState;

      localStorage.setItem(
        "favoritesPokemons",
        JSON.stringify(favoritesPokemons)
      );
    }
  };
};
