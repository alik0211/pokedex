import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  FILTER_POKEMONS
} from '../constants/Page'

const initialState = {
  isFetched: false,
  pokemons: [],
  displayedPokemons: []
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POKEMONS:
      return {
        ...state,
        isFetched: true
      }

    case RECEIVE_POKEMONS:
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
