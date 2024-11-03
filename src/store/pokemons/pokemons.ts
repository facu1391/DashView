import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    [key: string]: SimplePokemon,
}

const initialState: PokemonsState = {
    '1': { id: '1', name: 'bulbasaur'},
    '3': { id: '3', name: 'ajkjakjsd'},
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
            return;
        }
        state[id] = pokemon;
    }
  }
});

export const { toggleFavorites } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;