import React from 'react'
import Image from 'next/image';
import { RiHeart2Line, RiBarChartFill } from 'react-icons/ri';


import { SimplePokemon } from '../index';
import Link from 'next/link';

interface PokeCardProps {
  pokemon: SimplePokemon;
}

export const PokeCard = ({ pokemon }: PokeCardProps) => {

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={80}
            height={80}
            alt="Pokemon [id]"
            className="mx-auto my-0"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            Nombre: {pokemon.name}
          </p>
          {/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
          {/* <div className="mt-5">
            <span className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Nombre: {nameUppercase(pokemon.name)}
            </span>
          </div> */}
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-red-600">
              <RiHeart2Line />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Añade a favoritos
              </p>
            </div>
          </Link>
          <Link
            href="/dashboard/counter"
            className="px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-gray-800">
              <RiBarChartFill />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Poderes
              </p>
              <p className="text-xs text-gray-500">Ver todos los poderes</p>
            </div>
          </Link>
        </div>

        <div className="">
          <Link href={''} >
            <button className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Ver pokemon

              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

    // <div className="flex items-center justify-center bg-gray-100">
    //   <div className="mx-auto px-5">
    //     <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
    //       <Image
    //         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
    //         width={80}
    //         height={80}
    //         alt="Pokemon [id]"
    //       />
    //       <p className="my-4 pl-4 font-bold text-gray-500">Nombre: {nameUppercase(pokemon.name)}</p>
    //     </div>
    //   </div>
    // </div>