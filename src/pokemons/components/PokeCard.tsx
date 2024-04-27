"use client";

import React from "react";
import Image from "next/image";
import { RiHeart2Line, RiHeart2Fill, RiBarChartFill } from "react-icons/ri";
import Link from "next/link";

import { SimplePokemon } from "../index";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavoritePokemon } from "@/store/favorite/pokemons";

interface PokeCardProps {
  pokemon: SimplePokemon;
}

export const PokeCard = ({ pokemon }: PokeCardProps) => {
  const { id, name } = pokemon;
  const isFavourite = useAppSelector(
    (state) => !!state.favoritesPokemons.favourite[id]
  );
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavoritePokemon(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-72" key={id}>
      <div className="bg-white rounded overflow-hidden shadow-lg h-100 p-2">
        <div className="text-center p-6 bg-gray-800 border-b">
          <Image
            priority
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={80}
            height={80}
            alt="Pokemon [id]"
            className="mx-auto my-0 w-40 h-40"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            Nombre: {name}
          </p>
          {/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
          {/* <div className="mt-5">
                  <span className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                    Nombre: {nameUppercase(name)}
                  </span>
                </div> */}
        </div>
        <div className="border-b">
          <button
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer">
            <div className="text-red-600">
              {isFavourite ? <RiHeart2Fill /> : <RiHeart2Line />}
              {/* <RiHeart2Fill /> */}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavourite ? "Favorito" : "Añadir a favoritos"}
              </p>
            </div>
          </button>
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
          <Link href={`/dashboard/pokemons/${name}`}>
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
