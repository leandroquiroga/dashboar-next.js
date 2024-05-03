import React from "react";
import Link from "next/link";
import Image from "next/image";
import pokemon404 from "../../../../../public/pokemon404.svg";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={pokemon404}
          alt="Pokemon not found"
          width={300}
          height={300}
          className="ml-10"
        />
        <div className="bg-[#FF6A3D] px-2 text-lg rounded rotate-12 absolute w-76 text-white text-center">
          404 - Pokemon no encontrado
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center ">
        <button className="mt-5">
          <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
              <Link href="/dashboard/pokemons">Ir al listado de pokémons</Link>
            </span>
          </div>
        </button>
      </div>
    </main>
  );
}
