import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS
} from '../constants/Page'

function requestPokemons() {
  return {
    type: REQUEST_POKEMONS
  }
}

function receivePokemons(json) {
  return {
    type: RECEIVE_POKEMONS,
    pokemons: json.results.map(pokemon => pokemon)
  }
}

export function fetchPokemons() {

  return dispatch => {
    dispatch(requestPokemons())
    return fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then(response => response.json())
      .then(json => dispatch(receivePokemons(json)))
  }

}
