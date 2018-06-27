import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  SET_POKEMONS,
  FILTER_POKEMONS
} from '../constants/page'

const initialState = {
  isFetched: false,
  error: null,
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
      return {
        ...state,
        isFetched: false
      }

    case GET_POKEMONS_FAIL:
      const { error } = action
      return {
        ...state,
        isFetched: false,
        error
      }

    case SET_POKEMONS:
      const { pokemons } = action

      return {
        ...state,
        pokemons
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
