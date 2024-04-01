import React from 'react';

import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokeCard } from './PokeCard';

import styles from "../../app/styles/styles.module.css";

interface PokeCardProps {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}: PokeCardProps) => {
  return (
    <div className={`${styles.pokeCardPage}`}>
      {
        pokemons.map((pokemon) => (
          <PokeCard key={pokemon.id} pokemon={pokemon} />
        ))
      }
    </div>
  );
};
