import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  FILTER_POKEMONS
} from '../constants/page'

const initialState = {
  isFetched: false,
  pokemons: [],
  displayedPokemons: []
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_REQUEST:
      return {
        ...state,
        isFetched: true
      }

    case GET_POKEMONS_SUCCESS:
      const { pokemons } = action

      return {
        ...state,
        pokemons,
        isFetched: false
      }

    case FILTER_POKEMONS:
      const { displayedPokemons } = action

      return {
        ...state,
        displayedPokemons
      }

    default:
      return state
  }
}
