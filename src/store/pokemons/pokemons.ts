import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    [key: string]: SimplePokemon,
}

const getInitialState = (): PokemonsState => {
  const favorites = JSON.parse( localStorage.getItem('favorite-pokemons') ?? '{}' )
  return favorites;
}

const initialState: PokemonsState = {
  ...getInitialState()
    //'1': { id: '1', name: 'bulbasaur'},
    //'3': { id: '3', name: 'venusaur'},
    //'5': { id: '5', name: 'charmeleon'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorites( state, action: PayloadAction<SimplePokemon> ) {
        const pokemon = action.payload;
        const {id} = pokemon;
        
        if ( !!state[id] ) {
            delete state[id];
            //return;
        } else {
          state[id] = pokemon;
        }
        
        //Todo: no se debe hacer en Redux
        localStorage.setItem('favorite-pokemons', JSON.stringify(state));
        
    }
  }
});

export const { toggleFavorites } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;