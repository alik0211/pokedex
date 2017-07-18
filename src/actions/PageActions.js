import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS
} from '../constants/Page'

function requestPokemons(offset) {
  return {
    type: REQUEST_POKEMONS,
    offset
  }
}

function receivePokemons(offset, json) {
  return {
    type: RECEIVE_POKEMONS,
    pokemons: json.results.map(pokemon => pokemon)
  }
}

export function fetchPokemons(offset) {

  return dispatch => {
    dispatch(requestPokemons(offset))
    return fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}`)
      .then(response => response.json())
      .then(json => dispatch(receivePokemons(offset, json)))
  }

}
