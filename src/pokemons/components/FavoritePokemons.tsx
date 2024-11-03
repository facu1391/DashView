'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from "./PokemonGrid"
import { useState } from "react";
import { IoHeadsetOutline } from "react-icons/io5";

export const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector( state => Object.values(state.pokemnos.favorites) );
    //const [ pokemons, setPokemons ] = useState( favoritePokemons );

  return (
    <>
    {/*<PokemonGrid pokemons={ favoritePokemons } /> */}
    {
        favoritePokemons.length === 0
          ? ( <NoFavorite /> )
          : (<PokemonGrid pokemons={ favoritePokemons } /> )
    }
    </>
    
  )
}

export const NoFavorite = () => {
    return (
      <div className="flex flex-col h-[50vh] items-center justify-center">
        <IoHeadsetOutline size={100} className="text-red-500" />
        <span>No hay favoritos</span>
      </div>
    )
}
