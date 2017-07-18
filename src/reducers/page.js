import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS
} from '../constants/Page'

const initialState = {
  isFetched: false,
  pokemons: []
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

    default:
      return state
  }

}
