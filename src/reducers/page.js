import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  REQUEST_SELECTED_POKEMON,
  RECEIVE_SELECTED_POKEMON
} from '../constants/Pokemon'

const initialState = {
  isFetched: false,
  pokemons: [],
  selectedPokemon: null
}

export default function pokemon(state = initialState, action) {

  switch (action.type) {
    case REQUEST_POKEMONS:
      return {
        ...state,
        isFetched: true
      }

    case RECEIVE_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemons,
        isFetched: false
      }

    case REQUEST_SELECTED_POKEMON:
      return state

    case RECEIVE_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: action.selectedPokemon
      }

    default:
      return state
  }

}
