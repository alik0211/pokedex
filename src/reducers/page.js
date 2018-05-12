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

export default function pokemon(state = initialState, action) {
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
        displayedPokemons: pokemons.slice(0, 60),
        isFetched: false
      }

    case FILTER_POKEMONS:
      let displayedPokemons = state.pokemons
        .filter(pokemon => {
          if (pokemon.name.includes(action.searchTerm.toLowerCase())) {
            return true
          }

          return false
        })
        .slice(0, 60)

      return {
        ...state,
        displayedPokemons
      }

    default:
      return state
  }
}
