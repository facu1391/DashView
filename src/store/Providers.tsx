'use client'

import { Provider } from 'react-redux';
import { store } from './index';
import { useEffect } from 'react';
import { setFavoritePokemons } from './pokemons/pokemons';

interface Props {
    children: React.ReactNode;
}

export const Providers = ({children}: Props) => {

  useEffect(() => {
    const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}' )
    store.dispatch(setFavoritePokemons(favorites));
  }, [])


  return (
    <Provider store={ store }>
        {children}
    </Provider>
  )
}
function dispatch(arg0: { payload: { [key: string]: import("../pokemons").SimplePokemon; }; type: "pokemons/setFavoritePokemons"; }) {
  throw new Error('Function not implemented.');
}

