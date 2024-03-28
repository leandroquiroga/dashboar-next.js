import { Metadata } from "next";
import { PokeCard, ResponseApiPoket, SimplePokemon } from "@/pokemons";


export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'En esta seccion se encuentran todos tus pokemones favoritos.'
}

export default async function PokemonsPage() {
  
  return (
    <div className="flex flex-col p-2">
      <h1 className="text-4xl my-2">Tus favoritos</h1>

      {/* <PokeCard pokemon={null}/> */}
    </div>
  );
}
